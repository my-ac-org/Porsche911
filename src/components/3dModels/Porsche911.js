"use client";
import * as THREE from "three";
import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerformanceMonitor,
  Environment,
  Lightformer,
  Float,
  useGLTF,
} from "@react-three/drei";
import { OrbitingCirclesDemo } from "@/components/hero/components/orbiting-circles";
import Loader from "@/components/hero/components/Loader";
import CarOptions from "@/components/hero/components/CarOptions";

export default function PorscheWithBackground() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="fixed h-screen w-full">
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
        <Porsche911 setLoading={setLoading} />
      </div>
      <CarOptions />
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
        intensity={10}
        shadow-bias={-0.0001}
      />
      <ambientLight intensity={3.5} />
      <Porsche
        scale={230}
        position={[0.2, -1.2, 0]}
        rotation={[0.05, Math.PI / 1.7, 0]}
        setLoading={setLoading}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[10, 10, 32, 32]} />
        <shaderMaterial
          transparent
          uniforms={{
            color: { value: new THREE.Color(0x000000) },
            opacity: { value: 0.5 },
          }}
          vertexShader={`
                        varying vec2 vUv;
                        void main() {
                          vUv = uv;
                          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
          `}
          fragmentShader={`
                          uniform vec3 color;
                          uniform float opacity;
                          varying vec2 vUv;
                          void main() {
                            float dist = length(vUv - vec2(0.5));
                            float alpha = smoothstep(0.4, 0.5, dist);
                            gl_FragColor = vec4(color, opacity * (1.0 - alpha));
                          }
          `}
        />
      </mesh>

      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment frames={degraded ? 1 : Infinity} resolution={256} background={false} blur={1}>
        <Lightformers />
      </Environment>
    </Canvas>
  );
}

function Porsche({ setLoading, ...props }) {
  const { scene, nodes, materials } = useGLTF("/models/compressedPorsche.glb");

  // Actualiza el estado de carga al cargar el modelo
  useLayoutEffect(() => {
    setLoading(false); // Marca que el modelo ha terminado de cargarse
    Object.values(nodes).forEach(
      (node) =>
        node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
  }, [nodes, materials, setLoading]);

  return <primitive object={scene} {...props} />;
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
