"use client";
import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import {
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
  useGLTF,
} from "@react-three/drei";
import { OrbitingCirclesDemo } from "./orbiting-circles";
import Loader from "./Loader";
import { Overlay } from "./Overlay";

export default function PorscheWithBackground() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="fixed h-screen w-screen">
      {/* Muestra el fondo solo si el modelo se ha cargado */}
      {!loading && <OrbitingCirclesDemo />}

      {/* Porsche Component */}
      <div className="absolute top-0 left-0 h-full w-full">
        {loading && (
          <div className="flex justify-center items-center h-full">
            {/* Indicador de carga */}
            <Loader />
          </div>
        )}
        <Overlay />
        <Porsche911 setLoading={setLoading} />
      </div>
    </div>
  );
}

function Porsche911({ setLoading }) {
  const [degraded, degrade] = useState(false);
  return (
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }} gl={{ alpha: true }} style={{ background: "none" }}>
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={3.5} />
      <Porsche
        scale={2}
        position={[-0.5, -0.18, 0]}
        rotation={[0, Math.PI / 5, 0]}
        setLoading={setLoading}
      />
      <AccumulativeShadows
        position={[0, -1.16, 0]}
        frames={100}
        alphaTest={0.9}
        scale={10}
      >
        <RandomizedLight
          amount={10}
          radius={10}
          ambient={0.2}
          position={[1, 5, -1]}
        />
      </AccumulativeShadows>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment frames={degraded ? 1 : Infinity} resolution={256} background={false} blur={1}>
        <Lightformers />
      </Environment>
      <CameraRig />
    </Canvas>
  );
}

function Porsche({ setLoading, ...props }) {
  const { scene, nodes, materials } = useGLTF("/911-transformed.glb");

  // Actualiza el estado de carga al cargar el modelo
  useLayoutEffect(() => {
    setLoading(false); // Marca que el modelo ha terminado de cargarse
    Object.values(nodes).forEach(
      (node) =>
        node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    applyProps(materials.rubber, {
      color: "#222",
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
    applyProps(materials.window, {
      color: "black",
      roughness: 0,
      clearcoat: 0.1,
    });
    applyProps(materials.coat, {
      envMapIntensity: 4,
      roughness: 0.5,
      metalness: 1,
    });
    applyProps(materials.paint, {
      envMapIntensity: 2,
      roughness: 0.45,
      metalness: 0.8,
      color: "#555",
    });
  }, [nodes, materials, setLoading]);

  return <primitive object={scene} {...props} />;
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );

  return (
    <>
      <Lightformer
        intensity={0.8}
        rotation-x={Math.PI / 2}
        position={[0, 5, -10]}
        scale={[12, 12, 1]}
      />
      <group rotation={[0, 0.3, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              intensity={1.5}
              rotation={[Math.PI / 3, 0, 0]}
              position={[x, 3.5, i * 5]}
              scale={[3, 1, 2]}
            />
          ))}
        </group>
      </group>
      <Lightformer
        intensity={3.5}
        rotation-y={Math.PI / 3}
        position={[-4, 1, -1]}
        scale={[15, 0.1, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 3}
        position={[9, 1, 1]}
        scale={[15, 0.5, 1]}
      />
      <Float
        speed={4}
        floatIntensity={1.5}
        rotationIntensity={1.5}
      >
        <Lightformer
          form="ring"
          color="black"
          intensity={0.8}
          scale={8}
          position={[-12, 4, -15]}
          target={[0, 0, 0]}
        />
      </Float>
      <mesh scale={120}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
    </>
  );
}
