'use client';

import { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type RobotMood = 'idle' | 'greeting' | 'listening' | 'thinking' | 'talking';

const material = {
  shell: '#eaf2f5',
  pearl: '#c7d8df',
  titanium: '#78909d',
  dark: '#071923',
  teal: '#45e8d3',
};

function RobotModel({ mood }: { mood: RobotMood }) {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const eyes = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const leftForearm = useRef<THREE.Group>(null);
  const rightForearm = useRef<THREE.Group>(null);
  const torso = useRef<THREE.Group>(null);
  const chestCore = useRef<THREE.MeshStandardMaterial>(null);
  const chestRing = useRef<THREE.Mesh>(null);
  const antennaRing = useRef<THREE.Mesh>(null);
  const antennaCore = useRef<THREE.MeshStandardMaterial>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);
  const mouth = useRef<THREE.Mesh>(null);
  const blink = useRef({ next: 2.2, start: -10 });
  const phase = useRef(Math.random() * Math.PI * 2);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      pointer.current.y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    const smooth = (current: number, next: number, speed = 5) =>
      THREE.MathUtils.damp(current, next, speed, delta);

    if (root.current) {
      root.current.position.y = smooth(root.current.position.y, Math.sin(t * 1.25 + phase.current) * 0.018);
      root.current.rotation.z = smooth(root.current.rotation.z, Math.sin(t * 0.68 + phase.current) * 0.012, 2);
      root.current.rotation.y = smooth(root.current.rotation.y, Math.sin(t * 0.32) * 0.025, 2);
    }
    if (torso.current) {
      const breath = 1 + Math.sin(t * 1.7 + phase.current) * 0.009;
      torso.current.scale.y = smooth(torso.current.scale.y, breath, 2.5);
      torso.current.rotation.z = smooth(torso.current.rotation.z, Math.sin(t * 0.7 + phase.current) * 0.012, 2);
    }
    if (head.current) {
      const tilt = mood === 'thinking' ? 0.22 : mood === 'greeting' ? -0.1 : mood === 'listening' ? -0.07 : 0;
      const nod = mood === 'talking' ? Math.sin(t * 4.8) * 0.018 : mood === 'listening' ? Math.sin(t * 1.8) * 0.018 : 0;
      head.current.rotation.y = smooth(head.current.rotation.y, THREE.MathUtils.clamp(pointer.current.x, -1, 1) * 0.16, 2.6);
      head.current.rotation.x = smooth(head.current.rotation.x, -pointer.current.y * 0.055 + nod, 2.8);
      head.current.rotation.z = smooth(head.current.rotation.z, tilt + Math.sin(t * 0.5 + phase.current) * 0.014, 2.4);
    }
    if (eyes.current) {
      eyes.current.position.x = smooth(eyes.current.position.x, THREE.MathUtils.clamp(pointer.current.x, -1, 1) * 0.045, 8);
      eyes.current.position.y = smooth(eyes.current.position.y, 0.025 - pointer.current.y * 0.025, 8);
      if (t >= blink.current.next) {
        blink.current.start = t;
        blink.current.next = t + 2.8 + Math.random() * 3.1;
      }
      const age = t - blink.current.start;
      const blinkScale = age >= 0 && age < 0.18 ? 0.08 + 0.92 * Math.abs(age / 0.18 * 2 - 1) : 1;
      const expression = mood === 'thinking' ? 1.18 : mood === 'listening' ? 1.12 : mood === 'greeting' ? 1.16 : 1;
      eyes.current.scale.y = smooth(eyes.current.scale.y, blinkScale * expression, 17);
      eyes.current.scale.x = smooth(eyes.current.scale.x, mood === 'thinking' ? 0.88 : 1, 8);
    }

    const greeting = mood === 'greeting';
    const talk = mood === 'talking';
    if (leftArm.current) {
      const raise = greeting ? -1.22 + Math.sin(t * 8.5) * 0.28 : talk ? -0.28 + Math.sin(t * 4.2) * 0.09 : mood === 'listening' ? 0.12 : 0.04 + Math.sin(t * 0.9 + phase.current) * 0.018;
      leftArm.current.rotation.z = smooth(leftArm.current.rotation.z, raise, 4.5);
    }
    if (rightArm.current) {
      const pose = mood === 'thinking' ? 0.72 : talk ? 0.32 + Math.sin(t * 4.2 + 1) * 0.1 : mood === 'listening' ? -0.12 : -0.04 + Math.sin(t * 0.9 + phase.current + 1) * 0.018;
      rightArm.current.rotation.z = smooth(rightArm.current.rotation.z, pose, 4.2);
    }
    if (leftForearm.current) {
      const bend = greeting ? -0.28 + Math.sin(t * 8.5 + 0.5) * 0.12 : talk ? -0.18 : 0.08;
      leftForearm.current.rotation.z = smooth(leftForearm.current.rotation.z, bend, 5);
    }
    if (rightForearm.current) {
      const bend = mood === 'thinking' ? -0.95 : talk ? -0.18 : 0.08;
      rightForearm.current.rotation.z = smooth(rightForearm.current.rotation.z, bend, 4);
    }

    const glow = mood === 'thinking' ? '#b79aff' : mood === 'listening' ? '#f6d365' : mood === 'greeting' ? '#8df3c1' : '#48e8d5';
    const color = new THREE.Color(glow);
    if (leftEye.current) (leftEye.current.material as THREE.MeshBasicMaterial).color.lerp(color, 1 - Math.exp(-delta * 8));
    if (rightEye.current) (rightEye.current.material as THREE.MeshBasicMaterial).color.lerp(color, 1 - Math.exp(-delta * 8));
    if (mouth.current) {
      (mouth.current.material as THREE.MeshBasicMaterial).color.lerp(color, 1 - Math.exp(-delta * 8));
      mouth.current.scale.y = smooth(mouth.current.scale.y, talk ? 1 + Math.abs(Math.sin(t * 10)) * 4 : mood === 'thinking' ? 0.65 : 1, 12);
      mouth.current.scale.x = smooth(mouth.current.scale.x, talk ? 1.2 : 1, 10);
    }
    if (chestCore.current) {
      chestCore.current.emissive.lerp(color, 1 - Math.exp(-delta * 3));
      chestCore.current.emissiveIntensity = 1.7 + (Math.sin(t * 2.3) + 1) * 0.4;
    }
    if (chestRing.current) {
      chestRing.current.rotation.z = t * 0.48;
      chestRing.current.rotation.x = 0.25 + Math.sin(t * 0.7) * 0.08;
    }
    if (antennaRing.current) antennaRing.current.rotation.z = t * 1.25;
    if (antennaCore.current) antennaCore.current.emissiveIntensity = 1.5 + (Math.sin(t * 3) + 1) * 0.45;
  });

  const eyeColor = mood === 'thinking' ? '#b79aff' : mood === 'listening' ? '#f6d365' : mood === 'greeting' ? '#8df3c1' : '#48e8d5';

  return (
    <group ref={root}>
      {/* Floating hip assembly and articulated legs */}
      <group position={[0, -0.53, 0]}>
        <mesh position={[0, 0, 0]} scale={[0.34, 0.19, 0.25]}><sphereGeometry args={[1, 32, 24]} /><meshStandardMaterial color={material.titanium} metalness={0.8} roughness={0.24} /></mesh>
        {[-1, 1].map((side) => (
          <group key={side} position={[side * 0.2, -0.13, 0]}>
            <mesh position={[0, -0.17, 0]} castShadow><capsuleGeometry args={[0.095, 0.28, 6, 12]} /><meshStandardMaterial color={material.shell} metalness={0.68} roughness={0.25} /></mesh>
            <mesh position={[0, -0.34, 0.02]}><sphereGeometry args={[0.09, 20, 16]} /><meshStandardMaterial color={material.titanium} metalness={0.85} roughness={0.2} /></mesh>
            <mesh position={[0, -0.49, 0.09]} castShadow><boxGeometry args={[0.25, 0.12, 0.36]} /><meshStandardMaterial color={material.shell} metalness={0.62} roughness={0.28} /></mesh>
            <mesh position={[0, -0.49, 0.275]}><boxGeometry args={[0.12, 0.018, 0.012]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
          </group>
        ))}
      </group>

      {/* Sculpted torso, layered ceramic breastplate and reactor */}
      <group ref={torso}>
        <mesh position={[0, -0.19, 0]} scale={[0.39, 0.48, 0.29]} castShadow><sphereGeometry args={[1, 48, 32]} /><meshStandardMaterial color={material.shell} metalness={0.68} roughness={0.23} /></mesh>
        <mesh position={[0, -0.2, 0.245]} scale={[0.31, 0.37, 0.075]}><sphereGeometry args={[1, 40, 28]} /><meshStandardMaterial color="#f5fafb" metalness={0.52} roughness={0.2} /></mesh>
        <mesh position={[0, -0.2, 0.315]}><circleGeometry args={[0.145, 48]} /><meshStandardMaterial color="#122c39" metalness={0.72} roughness={0.2} /></mesh>
        <mesh position={[0, -0.2, 0.329]}><circleGeometry args={[0.112, 48]} /><meshStandardMaterial color="#0a2633" metalness={0.35} roughness={0.18} /></mesh>
        <mesh position={[0, -0.2, 0.345]}><circleGeometry args={[0.073, 48]} /><meshStandardMaterial ref={chestCore} color={material.teal} emissive={material.teal} emissiveIntensity={2} /></mesh>
        <mesh ref={chestRing} position={[0, -0.2, 0.355]} rotation={[0.25, 0.2, 0]}><torusGeometry args={[0.13, 0.009, 10, 72]} /><meshStandardMaterial color={material.teal} emissive={material.teal} emissiveIntensity={1.4} metalness={0.55} roughness={0.2} /></mesh>
        <mesh position={[0, -0.2, 0.36]}><torusGeometry args={[0.17, 0.004, 8, 72]} /><meshStandardMaterial color={material.pearl} metalness={0.9} roughness={0.18} /></mesh>
        <mesh position={[0, 0.12, 0.24]}><boxGeometry args={[0.2, 0.055, 0.025]} /><meshStandardMaterial color="#193b49" metalness={0.65} roughness={0.25} /></mesh>
        <mesh position={[0, 0.12, 0.257]}><boxGeometry args={[0.12, 0.012, 0.012]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
        <mesh position={[-0.22, -0.43, 0.18]}><boxGeometry args={[0.035, 0.13, 0.035]} /><meshStandardMaterial color={material.titanium} metalness={0.85} /></mesh>
        <mesh position={[0.22, -0.43, 0.18]}><boxGeometry args={[0.035, 0.13, 0.035]} /><meshStandardMaterial color={material.titanium} metalness={0.85} /></mesh>
      </group>

      {/* Shoulder shells, separate forearms and articulated hands */}
      <group ref={leftArm} position={[-0.39, 0.02, 0]}>
        <mesh position={[0, 0, 0]} scale={[0.17, 0.17, 0.16]}><sphereGeometry args={[1, 32, 24]} /><meshStandardMaterial color={material.pearl} metalness={0.85} roughness={0.2} /></mesh>
        <mesh position={[0, -0.19, 0]} castShadow><capsuleGeometry args={[0.105, 0.22, 6, 14]} /><meshStandardMaterial color={material.shell} metalness={0.72} roughness={0.24} /></mesh>
        <mesh position={[0, -0.34, 0.015]}><sphereGeometry args={[0.092, 24, 20]} /><meshStandardMaterial color={material.titanium} metalness={0.88} roughness={0.19} /></mesh>
        <group ref={leftForearm} position={[0, -0.36, 0]}>
          <mesh position={[0, -0.16, 0]} castShadow><capsuleGeometry args={[0.09, 0.22, 6, 14]} /><meshStandardMaterial color={material.shell} metalness={0.7} roughness={0.24} /></mesh>
          <mesh position={[0, -0.34, 0.025]}><sphereGeometry args={[0.09, 24, 18]} /><meshStandardMaterial color={material.pearl} metalness={0.78} roughness={0.22} /></mesh>
          {[-1, 0, 1].map((finger) => <mesh key={finger} position={[finger * 0.045, -0.4, 0.045]} rotation={[0, 0, finger * -0.12]}><capsuleGeometry args={[0.022, 0.075, 4, 8]} /><meshStandardMaterial color={material.shell} metalness={0.68} roughness={0.25} /></mesh>)}
          <mesh position={[0, -0.18, 0.075]}><torusGeometry args={[0.092, 0.012, 8, 24]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
        </group>
      </group>
      <group ref={rightArm} position={[0.39, 0.02, 0]}>
        <mesh scale={[0.17, 0.17, 0.16]}><sphereGeometry args={[1, 32, 24]} /><meshStandardMaterial color={material.pearl} metalness={0.85} roughness={0.2} /></mesh>
        <mesh position={[0, -0.19, 0]} castShadow><capsuleGeometry args={[0.105, 0.22, 6, 14]} /><meshStandardMaterial color={material.shell} metalness={0.72} roughness={0.24} /></mesh>
        <mesh position={[0, -0.34, 0.015]}><sphereGeometry args={[0.092, 24, 20]} /><meshStandardMaterial color={material.titanium} metalness={0.88} roughness={0.19} /></mesh>
        <group ref={rightForearm} position={[0, -0.36, 0]}>
          <mesh position={[0, -0.16, 0]} castShadow><capsuleGeometry args={[0.09, 0.22, 6, 14]} /><meshStandardMaterial color={material.shell} metalness={0.7} roughness={0.24} /></mesh>
          <mesh position={[0, -0.34, 0.025]}><sphereGeometry args={[0.09, 24, 18]} /><meshStandardMaterial color={material.pearl} metalness={0.78} roughness={0.22} /></mesh>
          {[-1, 0, 1].map((finger) => <mesh key={finger} position={[finger * 0.045, -0.4, 0.045]} rotation={[0, 0, finger * -0.12]}><capsuleGeometry args={[0.022, 0.075, 4, 8]} /><meshStandardMaterial color={material.shell} metalness={0.68} roughness={0.25} /></mesh>)}
          <mesh position={[0, -0.18, 0.075]}><torusGeometry args={[0.092, 0.012, 8, 24]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
        </group>
      </group>

      {/* Neck mechanics */}
      <mesh position={[0, 0.25, 0]}><cylinderGeometry args={[0.13, 0.16, 0.2, 32]} /><meshStandardMaterial color={material.titanium} metalness={0.9} roughness={0.2} /></mesh>
      <mesh position={[0, 0.25, 0.08]}><torusGeometry args={[0.13, 0.018, 8, 32]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>

      {/* New premium helmet: pearl shell, curved panoramic visor and cheek armour */}
      <group ref={head} position={[0, 0.61, 0]}>
        <mesh scale={[0.53, 0.45, 0.39]} castShadow><sphereGeometry args={[1, 64, 48]} /><meshStandardMaterial color={material.shell} metalness={0.66} roughness={0.19} /></mesh>
        <mesh position={[0, 0.29, 0.12]} rotation={[-0.2, 0, 0]} scale={[1, 0.75, 1]}><sphereGeometry args={[0.34, 40, 24, 0, Math.PI * 2, 0, Math.PI * 0.5]} /><meshStandardMaterial color="#f8fbfc" metalness={0.58} roughness={0.18} /></mesh>
        <mesh position={[-0.36, -0.2, 0.245]} rotation={[0, -0.2, -0.15]} scale={[1, 1.2, 0.8]}><sphereGeometry args={[0.14, 32, 24]} /><meshStandardMaterial color={material.pearl} metalness={0.82} roughness={0.2} /></mesh>
        <mesh position={[0.36, -0.2, 0.245]} rotation={[0, 0.2, 0.15]} scale={[1, 1.2, 0.8]}><sphereGeometry args={[0.14, 32, 24]} /><meshStandardMaterial color={material.pearl} metalness={0.82} roughness={0.2} /></mesh>
        <mesh position={[0, 0.005, 0.315]} scale={[0.98, 0.83, 0.36]}><sphereGeometry args={[0.42, 64, 40]} /><meshStandardMaterial color="#061923" metalness={0.42} roughness={0.12} /></mesh>
        <mesh position={[0, 0.005, 0.333]} scale={[0.91, 0.76, 0.34]}><sphereGeometry args={[0.42, 64, 40]} /><meshPhysicalMaterial color="#092634" metalness={0.28} roughness={0.16} clearcoat={1} clearcoatRoughness={0.08} /></mesh>
        <mesh position={[0, 0.27, 0.34]} rotation={[0, 0, 0]}><torusGeometry args={[0.28, 0.012, 8, 64, Math.PI]} /><meshStandardMaterial color={material.pearl} metalness={0.9} roughness={0.18} /></mesh>
        <group ref={eyes} position={[0, 0.025, 0.59]}>
          <mesh ref={leftEye} position={[-0.17, 0, 0]} scale={[1, 1.55, 0.42]}><sphereGeometry args={[0.07, 32, 24]} /><meshBasicMaterial color={eyeColor} toneMapped={false} /></mesh>
          <mesh ref={rightEye} position={[0.17, 0, 0]} scale={[1, 1.55, 0.42]}><sphereGeometry args={[0.07, 32, 24]} /><meshBasicMaterial color={eyeColor} toneMapped={false} /></mesh>
          <mesh ref={mouth} position={[0, -0.16, 0]} scale={[1, 1, 0.5]}><capsuleGeometry args={[0.012, 0.09, 4, 12]} /><meshBasicMaterial color={eyeColor} toneMapped={false} /></mesh>
        </group>
        {/* Side audio pods and illuminated signature strips */}
        <mesh position={[-0.5, -0.01, 0.02]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.12, 0.12, 0.1, 32]} /><meshStandardMaterial color={material.titanium} metalness={0.9} roughness={0.2} /></mesh>
        <mesh position={[0.5, -0.01, 0.02]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.12, 0.12, 0.1, 32]} /><meshStandardMaterial color={material.titanium} metalness={0.9} roughness={0.2} /></mesh>
        <mesh position={[-0.5, -0.01, 0.08]}><circleGeometry args={[0.065, 32]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
        <mesh position={[0.5, -0.01, 0.08]}><circleGeometry args={[0.065, 32]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
        <mesh position={[0, 0.47, 0]}><cylinderGeometry args={[0.018, 0.026, 0.15, 16]} /><meshStandardMaterial color={material.titanium} metalness={0.85} /></mesh>
        <mesh position={[0, 0.56, 0]}><sphereGeometry args={[0.052, 24, 20]} /><meshStandardMaterial ref={antennaCore} color={material.teal} emissive={material.teal} emissiveIntensity={2} /></mesh>
        <mesh ref={antennaRing} position={[0, 0.56, 0]}><torusGeometry args={[0.08, 0.008, 8, 48]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
        <mesh position={[0, -0.3, 0.29]}><boxGeometry args={[0.24, 0.025, 0.025]} /><meshBasicMaterial color={material.teal} toneMapped={false} /></mesh>
      </group>
    </group>
  );
}

export default function LumiRobot3D({ mood = 'idle', compact = false }: { mood?: RobotMood; compact?: boolean }) {
  return (
    <div className={compact ? 'h-12 w-12' : 'h-full w-full'} aria-label="Animated 3D LUMI robot" role="img">
      <Canvas camera={{ position: [0, 0, 3.55], fov: 38 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <hemisphereLight args={['#e8fbff', '#142431', 1.05]} />
        <ambientLight intensity={0.58} />
        <directionalLight position={[3, 4, 5]} intensity={1.8} />
        <directionalLight position={[-3, 1.5, -2]} intensity={1.05} color="#76dff0" />
        <pointLight position={[-1.8, 0.6, 2]} intensity={0.55} color="#47dccc" distance={5} decay={2} />
        <pointLight position={[1.7, -0.6, 1.5]} intensity={0.25} color="#8ab8ff" distance={4} decay={2} />
        <Suspense fallback={null}><RobotModel mood={mood} /></Suspense>
      </Canvas>
    </div>
  );
}
