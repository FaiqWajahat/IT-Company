import React, { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, OrbitControls } from "@react-three/drei";

// Word Component
function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 4,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    if (ref.current && ref.current.material) {
      ref.current.material.color.lerp(
        color.set(hovered ? "#1e40af" : "#2563eb"),
        0.1
      );
    }
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
        {...fontProps}
      >
        {children}
      </Text>
    </Billboard>
  );
}

// Cloud Component
function Cloud({ radius = 15 }) {
  const words = [
    "Website",
    "Logo",
    "Apps",
    "Banner",
    "Posts",
    "Marketing",
    "WordPress",
    "Shopify",
  ];

  const spherical = new THREE.Spherical();
  const positions = words.map((word, idx) => {
    const phi = Math.acos(-1 + (2 * idx) / words.length);
    const theta = Math.sqrt(words.length * Math.PI) * phi;
    return [
      new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta)),
      word,
    ];
  });

  return positions.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

// 3D Scene Component
function HeroRightSection() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Loading fallback */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
        <div className="text-gray-400">Loading 3D Experience...</div>
      </div>
      
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 40], fov: 60 }}
        className="rounded-xl"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <group rotation={[0, 0, 0]}>
            <Cloud radius={15} />
          </group>
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
