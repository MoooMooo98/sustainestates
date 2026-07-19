'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float } from '@react-three/drei'
import type { MotionValue } from 'framer-motion'
import type { Group } from 'three'

const GLASS = '#17281f'
const FRAME = '#0b120d'
const ACCENT = '#3f9d6a'
const LIGHT = '#dfe8e2'

function Building({ progress }: { progress: MotionValue<number> }) {
  const group = useRef<Group>(null)

  useFrame(() => {
    if (!group.current) return
    const target = progress.get() * Math.PI * 2 * 1.25
    // smooth follow for a cinematic feel
    group.current.rotation.y += (target - group.current.rotation.y) * 0.1
  })

  const floors = Array.from({ length: 11 })
  const terraces = [
    { y: 1.4, z: 1.05, x: 0 },
    { y: 3.0, z: -1.05, x: 0 },
    { y: 4.4, z: 0, x: 1.05 },
  ]

  return (
    <group ref={group} position={[0, -1.4, 0]}>
      {/* base platform */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[3.6, 0.3, 3.6]} />
        <meshStandardMaterial color={FRAME} roughness={0.6} metalness={0.2} />
      </mesh>

      {/* main glass tower */}
      <mesh position={[0, 2.7, 0]} castShadow>
        <boxGeometry args={[2, 5.4, 2]} />
        <meshStandardMaterial
          color={GLASS}
          roughness={0.15}
          metalness={0.6}
          emissive={ACCENT}
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* floor divider lines */}
      {floors.map((_, i) => (
        <mesh key={i} position={[0, 0.45 + i * 0.46, 0]}>
          <boxGeometry args={[2.04, 0.04, 2.04]} />
          <meshStandardMaterial color={FRAME} roughness={0.5} metalness={0.3} />
        </mesh>
      ))}

      {/* vertical mullions */}
      {[-0.66, 0, 0.66].map((x) => (
        <mesh key={`v${x}`} position={[x, 2.7, 1.0]}>
          <boxGeometry args={[0.03, 5.4, 0.03]} />
          <meshStandardMaterial color={FRAME} />
        </mesh>
      ))}

      {/* green planted terraces */}
      {terraces.map((t, i) => (
        <group key={i} position={[t.x, t.y, t.z]}>
          <mesh>
            <boxGeometry args={[t.x !== 0 ? 0.5 : 2.1, 0.14, t.x !== 0 ? 2.1 : 0.5]} />
            <meshStandardMaterial color={ACCENT} roughness={0.8} />
          </mesh>
        </group>
      ))}

      {/* rooftop garden + solar array */}
      <mesh position={[0, 5.5, 0]}>
        <boxGeometry args={[2.1, 0.16, 2.1]} />
        <meshStandardMaterial color={FRAME} roughness={0.5} />
      </mesh>
      <mesh position={[-0.5, 5.7, 0.3]} rotation={[-0.35, 0, 0]}>
        <boxGeometry args={[0.9, 0.03, 0.6]} />
        <meshStandardMaterial color="#1a2c4a" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0.55, 5.66, -0.4]}>
        <boxGeometry args={[0.7, 0.12, 0.7]} />
        <meshStandardMaterial color={ACCENT} roughness={0.85} />
      </mesh>
    </group>
  )
}

export function ShowcaseBuilding({ progress }: { progress: MotionValue<number> }) {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 9], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 10, 6]} intensity={2.4} color={LIGHT} castShadow />
      <directionalLight position={[-8, 4, -6]} intensity={1.1} color={ACCENT} />
      <pointLight position={[0, 3, 6]} intensity={20} color={LIGHT} distance={20} />

      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4} floatingRange={[-0.1, 0.1]}>
        <Building progress={progress} />
      </Float>

      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.5}
        scale={12}
        blur={2.6}
        far={5}
        color="#000000"
      />
    </Canvas>
  )
}
