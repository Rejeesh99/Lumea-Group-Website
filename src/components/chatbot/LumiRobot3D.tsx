'use client';

import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type RobotMood = 'idle' | 'greeting' | 'listening' | 'thinking' | 'talking';

function RobotModel({ mood }: { mood: RobotMood }) {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const eyes = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const mouth = useRef<THREE.Mesh>(null);
  const leftEyeMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const rightEyeMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const mouthMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const faceScreenMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const target = useRef(new THREE.Vector2());

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      pointer.current.y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    if (root.current) {
      root.current.position.y = Math.sin(t * 1.7) * 0.055;
      // Keep the metal shell stationary relative to the lights. Rotating the whole
      // robot made specular highlights sweep across the armour as the cursor moved.
      root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, 0, 5, delta);
    }
    target.current.set(pointer.current.x * 0.17, -pointer.current.y * 0.12);
    // Natural glances when the visitor is not actively interacting.
    const idleLookX = mood === 'idle' ? Math.sin(t * 0.42) * 0.075 : 0;
    const idleLookY = mood === 'idle' ? Math.sin(t * 0.31 + 1.4) * 0.045 : 0;
    if (head.current) {
      // Cursor tracking is intentionally restricted to the emissive eye group below.
      // This prevents moving metallic head surfaces through fixed lights (the source
      // of the distracting highlight/flicker effect).
      head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, idleLookX, 3.2, delta);
      head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, idleLookY, 3.2, delta);
      const moodTilt = mood === 'thinking' ? 0.42 : mood === 'listening' ? -0.22 : mood === 'greeting' ? -0.16 : mood === 'talking' ? 0.10 : 0;
      head.current.rotation.z = THREE.MathUtils.damp(head.current.rotation.z, moodTilt + Math.sin(t * 0.8) * 0.025, 5, delta);
    }
    if (eyes.current) {
      // Only the emissive eyes translate; the head, armour and lights stay still.
      const eyeTargetX = THREE.MathUtils.clamp(pointer.current.x, -1, 1) * 0.055;
      const eyeTargetY = THREE.MathUtils.clamp(-pointer.current.y, -1, 1) * 0.035;
      eyes.current.position.x = THREE.MathUtils.damp(eyes.current.position.x, eyeTargetX, 9, delta);
      eyes.current.position.y = THREE.MathUtils.damp(eyes.current.position.y, 0.045 + eyeTargetY, 9, delta);
      const blink = (Math.sin(t * 0.7) > 0.995 || Math.sin(t * 0.7 + 2.1) > 0.997) ? 0.12 : 1;
      const eyePulse = mood === 'thinking' ? 1 + Math.sin(t * 4) * 0.07 : mood === 'talking' ? 1 + Math.sin(t * 8) * 0.045 : 1;
      const moodEyeScale = mood === 'thinking' ? 1.35 : mood === 'listening' ? 1.3 : mood === 'greeting' ? 1.22 : 1;
      eyes.current.scale.x = THREE.MathUtils.damp(eyes.current.scale.x, eyePulse * moodEyeScale, 8, delta);
      eyes.current.scale.y = THREE.MathUtils.damp(eyes.current.scale.y, blink, 18, delta);
    }
    if (leftArm.current) {
      const wave = mood === 'greeting' ? Math.sin(t * 13) * 0.55 : Math.sin(t * 1.4) * 0.045;
      const gesture = mood === 'greeting' ? -1.55 + wave : mood === 'talking' ? -0.72 + Math.sin(t * 7) * 0.12 : mood === 'listening' ? 0.48 : 0.16 + wave;
      leftArm.current.rotation.z = THREE.MathUtils.damp(leftArm.current.rotation.z, gesture, 6, delta);
    }
    if (rightArm.current) {
      const rightGesture = mood === 'thinking' ? 1.12 : mood === 'talking' ? -0.48 + Math.sin(t * 7 + 1) * 0.12 : mood === 'listening' ? -0.34 : -0.16 + Math.sin(t * 1.4 + 1) * 0.045;
      rightArm.current.rotation.z = THREE.MathUtils.damp(rightArm.current.rotation.z, rightGesture, 5, delta);
    }
    const glow = mood === 'thinking' ? '#b58cff' : mood === 'listening' ? '#ffe066' : mood === 'talking' ? '#55f2d0' : mood === 'greeting' ? '#86efac' : '#67e8f9';
    // Keep illumination steady: animate colour, not the light intensity.
    const targetGlow = new THREE.Color(glow);
    // Eyes and mouth use unlit materials: cursor tracking cannot move highlights,
    // shadows or light gradients across the face beneath them.
    [leftEyeMaterial.current, rightEyeMaterial.current, mouthMaterial.current].forEach((material) => {
      if (material) material.color.lerp(targetGlow, 1 - Math.exp(-delta * 9));
    });
    if (faceScreenMaterial.current) {
      faceScreenMaterial.current.emissive.lerp(targetGlow, 1 - Math.exp(-delta * 7));
      faceScreenMaterial.current.emissiveIntensity = mood === 'idle' ? 0.22 : 0.48;
    }
    if (mouth.current) {
      const talking = mood === 'talking';
      mouth.current.scale.y = THREE.MathUtils.damp(mouth.current.scale.y, talking ? 1 + Math.abs(Math.sin(t * 11)) * 9 : mood === 'thinking' ? 0.65 : mood === 'greeting' ? 1.5 : 1, 14, delta);
      mouth.current.scale.x = THREE.MathUtils.damp(mouth.current.scale.x, talking ? 1.15 : 1, 12, delta);
    }
  });

  const eyeColor = mood === 'thinking' ? '#a78bfa' : mood === 'listening' ? '#facc15' : mood === 'talking' ? '#55f2d0' : mood === 'greeting' ? '#86efac' : '#67e8f9';

  return (
    <group ref={root}>
      {/* legs and feet */}
      <mesh position={[-0.22, -0.72, 0]} castShadow><capsuleGeometry args={[0.105, 0.25, 5, 10]} /><meshStandardMaterial color="#b9cbd5" metalness={0.72} roughness={0.28} /></mesh>
      <mesh position={[0.22, -0.72, 0]} castShadow><capsuleGeometry args={[0.105, 0.25, 5, 10]} /><meshStandardMaterial color="#b9cbd5" metalness={0.72} roughness={0.28} /></mesh>
      <mesh position={[-0.23, -0.94, 0.09]} castShadow><boxGeometry args={[0.28, 0.13, 0.38]} /><meshStandardMaterial color="#dce8ed" metalness={0.65} roughness={0.3} /></mesh>
      <mesh position={[0.23, -0.94, 0.09]} castShadow><boxGeometry args={[0.28, 0.13, 0.38]} /><meshStandardMaterial color="#dce8ed" metalness={0.65} roughness={0.3} /></mesh>

      {/* torso */}
      <mesh position={[0, -0.25, 0]} castShadow><capsuleGeometry args={[0.32, 0.42, 8, 16]} /><meshStandardMaterial color="#e6f0f4" metalness={0.72} roughness={0.24} /></mesh>
      <mesh position={[0, -0.18, 0.292]}><boxGeometry args={[0.22, 0.09, 0.025]} /><meshStandardMaterial color="#122c3a" metalness={0.35} roughness={0.35} /></mesh>
      <mesh position={[0, -0.18, 0.31]}><boxGeometry args={[0.13, 0.025, 0.018]} /><meshStandardMaterial color="#42e8d0" emissive="#18cdbb" emissiveIntensity={2.5} /></mesh>


      <mesh position={[0, -0.25, 0.306]}><boxGeometry args={[0.34, 0.3, 0.018]} /><meshStandardMaterial color="#b7cbd4" metalness={0.85} roughness={0.25} /></mesh>
      <mesh position={[0, -0.25, 0.322]}><boxGeometry args={[0.25, 0.22, 0.018]} /><meshStandardMaterial color="#dce9ed" metalness={0.7} roughness={0.3} /></mesh>
      <mesh position={[0, -0.25, 0.34]}><circleGeometry args={[0.065, 6]} /><meshStandardMaterial color="#0c3544" metalness={0.4} roughness={0.3} /></mesh>
      <mesh position={[0, -0.25, 0.354]}><circleGeometry args={[0.036, 6]} /><meshStandardMaterial color="#49ead5" emissive="#21d8c5" emissiveIntensity={2.5} /></mesh>
      <mesh position={[-0.22, -0.47, 0.19]}><boxGeometry args={[0.035, 0.16, 0.035]} /><meshStandardMaterial color="#829ba8" metalness={0.8} /></mesh>
      <mesh position={[0.22, -0.47, 0.19]}><boxGeometry args={[0.035, 0.16, 0.035]} /><meshStandardMaterial color="#829ba8" metalness={0.8} /></mesh>

      {/* shoulder pivots and arms */}
      <mesh position={[-0.39, -0.08, 0]}><sphereGeometry args={[0.14, 20, 20]} /><meshStandardMaterial color="#879eaa" metalness={0.8} roughness={0.25} /></mesh>
      <mesh position={[0.39, -0.08, 0]}><sphereGeometry args={[0.14, 20, 20]} /><meshStandardMaterial color="#879eaa" metalness={0.8} roughness={0.25} /></mesh>
      <group ref={leftArm} position={[-0.42, -0.12, 0]}>
        <mesh position={[0, -0.23, 0]} rotation={[0, 0, -0.12]} castShadow><capsuleGeometry args={[0.105, 0.31, 5, 12]} /><meshStandardMaterial color="#dce8ed" metalness={0.72} roughness={0.27} /></mesh>
        <mesh position={[0, -0.43, 0.025]}><sphereGeometry args={[0.095, 16, 16]} /><meshStandardMaterial color="#9eb3be" metalness={0.8} roughness={0.25} /></mesh>
      
        <mesh position={[-0.045, -0.5, 0.035]}><capsuleGeometry args={[0.025, 0.075, 4, 8]} /><meshStandardMaterial color="#dce8ed" metalness={0.7} /></mesh>
        <mesh position={[0, -0.515, 0.06]}><capsuleGeometry args={[0.022, 0.085, 4, 8]} /><meshStandardMaterial color="#dce8ed" metalness={0.7} /></mesh>
        <mesh position={[0.045, -0.5, 0.035]}><capsuleGeometry args={[0.025, 0.075, 4, 8]} /><meshStandardMaterial color="#dce8ed" metalness={0.7} /></mesh>
        <mesh position={[0, -0.32, 0]}><torusGeometry args={[0.108, 0.018, 8, 18]} /><meshStandardMaterial color="#50d9d1" metalness={0.7} emissive="#1baea7" emissiveIntensity={0.7} /></mesh>
      </group>
      <group ref={rightArm} position={[0.42, -0.12, 0]}>
        <mesh position={[0, -0.23, 0]} rotation={[0, 0, 0.12]} castShadow><capsuleGeometry args={[0.105, 0.31, 5, 12]} /><meshStandardMaterial color="#dce8ed" metalness={0.72} roughness={0.27} /></mesh>
        <mesh position={[0, -0.43, 0.025]}><sphereGeometry args={[0.095, 16, 16]} /><meshStandardMaterial color="#9eb3be" metalness={0.8} roughness={0.25} /></mesh>
      
        <mesh position={[-0.045, -0.5, 0.035]}><capsuleGeometry args={[0.025, 0.075, 4, 8]} /><meshStandardMaterial color="#dce8ed" metalness={0.7} /></mesh>
        <mesh position={[0, -0.515, 0.06]}><capsuleGeometry args={[0.022, 0.085, 4, 8]} /><meshStandardMaterial color="#dce8ed" metalness={0.7} /></mesh>
        <mesh position={[0.045, -0.5, 0.035]}><capsuleGeometry args={[0.025, 0.075, 4, 8]} /><meshStandardMaterial color="#dce8ed" metalness={0.7} /></mesh>
        <mesh position={[0, -0.32, 0]}><torusGeometry args={[0.108, 0.018, 8, 18]} /><meshStandardMaterial color="#50d9d1" metalness={0.7} emissive="#1baea7" emissiveIntensity={0.7} /></mesh>
      </group>

      {/* neck */}
      <mesh position={[0, 0.19, 0]}><cylinderGeometry args={[0.12, 0.14, 0.19, 20]} /><meshStandardMaterial color="#8199a6" metalness={0.8} roughness={0.25} /></mesh>

      {/* independently tracking head */}
      <group ref={head} position={[0, 0.57, 0]}>
        <mesh castShadow><boxGeometry args={[0.92, 0.78, 0.68, 5, 5, 5]} /><meshStandardMaterial color="#e5eef2" metalness={0.76} roughness={0.23} /></mesh>
        <mesh position={[0, 0, 0.351]}><boxGeometry args={[0.76, 0.59, 0.035]} /><meshStandardMaterial ref={faceScreenMaterial} color="#071923" emissive="#071923" emissiveIntensity={0.2} metalness={0.45} roughness={0.25} /></mesh>
        <group ref={eyes} position={[0, 0.045, 0.50]}>
          <mesh position={[-0.19, 0, 0]}><sphereGeometry args={[0.105, 24, 24]} /><meshBasicMaterial ref={leftEyeMaterial} color={eyeColor} toneMapped={false} /></mesh>
          <mesh position={[0.19, 0, 0]}><sphereGeometry args={[0.075, 20, 20]} /><meshBasicMaterial ref={rightEyeMaterial} color={eyeColor} toneMapped={false} /></mesh>
          <mesh ref={mouth} position={[0, -0.19, 0]}><boxGeometry args={[0.2, 0.045, 0.025]} /><meshBasicMaterial ref={mouthMaterial} color={eyeColor} toneMapped={false} /></mesh>
        </group>
        <mesh position={[-0.49, -0.02, 0]}><sphereGeometry args={[0.13, 20, 20]} /><meshStandardMaterial color="#91a8b4" metalness={0.8} roughness={0.22} /></mesh>
        <mesh position={[0.49, -0.02, 0]}><cylinderGeometry args={[0.13, 0.13, 0.12, 24]} /><meshStandardMaterial color="#91a8b4" metalness={0.8} roughness={0.22} /></mesh>
        <mesh position={[0, 0.48, 0]}><cylinderGeometry args={[0.018, 0.025, 0.2, 12]} /><meshStandardMaterial color="#a9c3ce" metalness={0.7} /></mesh>
        <mesh position={[0, 0.59, 0]}><sphereGeometry args={[0.055, 16, 16]} /><meshStandardMaterial color="#45ead6" emissive="#21d8c5" emissiveIntensity={3} /></mesh>
        <mesh position={[-0.49, -0.02, 0.07]}><circleGeometry args={[0.072, 24]} /><meshStandardMaterial color="#40e7d5" emissive="#20cdbb" emissiveIntensity={2.5} /></mesh>
        <mesh position={[0.49, -0.02, 0.07]}><circleGeometry args={[0.072, 24]} /><meshStandardMaterial color="#40e7d5" emissive="#20cdbb" emissiveIntensity={2.5} /></mesh>
        <mesh position={[0, 0.59, 0]}><torusGeometry args={[0.075, 0.012, 8, 28]} /><meshStandardMaterial color="#48e9d7" emissive="#20cdbb" emissiveIntensity={2.5} /></mesh>
        <mesh position={[0, 0.27, 0.348]}><boxGeometry args={[0.32, 0.035, 0.018]} /><meshStandardMaterial color="#9cb4bf" metalness={0.85} /></mesh>
        <mesh position={[-0.34, -0.28, 0.27]}><boxGeometry args={[0.09, 0.13, 0.04]} /><meshStandardMaterial color="#a9bdc7" metalness={0.85} roughness={0.24} /></mesh>
        <mesh position={[0.34, -0.28, 0.27]}><boxGeometry args={[0.09, 0.13, 0.04]} /><meshStandardMaterial color="#a9bdc7" metalness={0.85} roughness={0.24} /></mesh>
        <mesh position={[0, 0.12, 0.37]}><boxGeometry args={[0.19, 0.025, 0.02]} /><meshStandardMaterial color="#46e8d4" emissive="#25cdbd" emissiveIntensity={2} /></mesh>
      </group>
    </group>
  );
}

export default function LumiRobot3D({ mood = 'idle', compact = false }: { mood?: RobotMood; compact?: boolean }) {
  return (
    <div className={compact ? 'h-12 w-12' : 'h-full w-full'} aria-label="Animated 3D LUMI robot" role="img">
      <Canvas camera={{ position: [0, 0, 3.35], fov: 38 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        {/* Stable three-point studio lighting; avoid animated light intensity to prevent flicker. */}
        <hemisphereLight args={['#dff7ff', '#172633', 0.9]} />
        <ambientLight intensity={0.65} />
        <directionalLight position={[3, 4, 5]} intensity={1.65} />
        <directionalLight position={[-3, 1.5, -2]} intensity={0.85} color="#72d9ee" />
        <pointLight position={[-1.8, 0.6, 2]} intensity={0.45} color="#47dccc" distance={5} decay={2} />
        <Suspense fallback={null}>
          <RobotModel mood={mood} />
        </Suspense>
      </Canvas>
    </div>
  );
}
