import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const STAR_COUNT = 1800;
const DEPTH = 60;

function Stars() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const r = 3 + Math.random() * 22;
      const a = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = Math.sin(a) * r;
      arr[i * 3 + 2] = -Math.random() * DEPTH;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    const pos = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < STAR_COUNT; i++) {
      pos[i * 3 + 2] += delta * 9;
      if (pos[i * 3 + 2] > 6) pos[i * 3 + 2] -= DEPTH + 6;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        color="#a5f3fc"
        sizeAttenuation
        transparent
        opacity={0.9}
      />
    </points>
  );
}

function Rings() {
  const group = useRef();

  useFrame((_, delta) => {
    group.current.children.forEach((m, i) => {
      m.position.z += delta * 6;
      m.rotation.z += delta * 0.35 * (i % 2 ? 1 : -1);
      if (m.position.z > 6) m.position.z -= DEPTH + 6;
    });
  });

  return (
    <group ref={group}>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0, 0, -i * 6]}>
          <torusGeometry args={[6 + (i % 3) * 1.5, 0.035, 8, 6]} />
          <meshBasicMaterial
            color={i % 2 ? "#22d3ee" : "#3b82f6"}
            transparent
            opacity={0.65}
          />
        </mesh>
      ))}
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 2.5 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 1.5 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, -30);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 50%, #06202c 0%, #030812 75%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 70 }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <fog attach="fog" args={["#030812", 12, 50]} />
        <Stars />
        <Rings />
        <Rig />
      </Canvas>
    </div>
  );
}