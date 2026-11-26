import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const NODES = 140;
const RADIUS = 2;
const LINK_DIST = 0.85;

const RINGS = [
  {
    radius: 2.6,
    tilt: [1.2, 0, 0.35],
    speed: -0.4,
    color: "#22d3ee",
    labels: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
  },
  {
    radius: 3.0,
    tilt: [0.4, 0, -0.6],
    speed: 0.3,
    color: "#3b82f6",
    labels: ["ML", "CV", "NLP", "RAG", "LLMs"],
  },
  {
    radius: 3.3,
    tilt: [1.5, 0, -0.9],
    speed: -0.25,
    color: "#14b8a6",
    labels: ["FastAPI", "Flask", "React", "SQL"],
  },
];

function Network() {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const { nodes, lines } = useMemo(() => {
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < NODES; i++) {
      const y = 1 - (i / (NODES - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      pts.push([Math.cos(t) * r * RADIUS, y * RADIUS, Math.sin(t) * r * RADIUS]);
    }

    const segs = [];
    for (let i = 0; i < NODES; i++) {
      for (let j = i + 1; j < NODES; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < LINK_DIST) {
          segs.push(...pts[i], ...pts[j]);
        }
      }
    }

    return {
      nodes: new Float32Array(pts.flat()),
      lines: new Float32Array(segs),
    };
  }, []);

  useFrame((_, delta) => {
    const g = group.current;
    g.rotation.y += delta * 0.25;
    g.rotation.x += (mouse.current.y * 0.5 - g.rotation.x) * 0.05;
    g.rotation.z += (-mouse.current.x * 0.3 - g.rotation.z) * 0.05;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.09} color="#cffafe" sizeAttenuation transparent opacity={0.95} />
      </points>

      <mesh>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Ring({ radius, tilt, speed, color, labels }) {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>

      <group ref={ref}>
        {labels.map((label, i) => {
          const a = (i / labels.length) * Math.PI * 2;
          return (
            <Html
              key={label}
              position={[Math.cos(a) * radius, 0, Math.sin(a) * radius]}
              center
            >
              <div
                style={{
                  padding: "5px 9px",
                  borderRadius: 8,
                  fontSize: 11,
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                  color: "#e6fbff",
                  background: "rgba(6,24,34,0.85)",
                  border: `1px solid ${color}`,
                  boxShadow: `0 0 14px ${color}55`,
                  userSelect: "none",
                }}
              >
                {label}
              </div>
            </Html>
          );
        })}
      </group>
    </group>
  );
}

export default function NeuralGlobe() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 8.8], fov: 50 }} gl={{ alpha: true }}>
        <Network />
        {RINGS.map((ring) => (
          <Ring key={ring.radius} {...ring} />
        ))}
      </Canvas>
    </div>
  );
}