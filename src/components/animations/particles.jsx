"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import { Color, AdditiveBlending } from "three"

function ParticleLoader(){
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
      <div className="flex space-x-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: `hsl(${260 + i * 30}, 60%, 60%)`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function Flowing() {
  const particlesRef = useRef(null)

  const particleData = useMemo(() => {
    const count = 1200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      const colorVariant = Math.floor(Math.random() * 6)
      const color = new Color()

      if (colorVariant === 0) color.setHSL(0.75, 0.6, 0.5)
      else if (colorVariant === 1) color.setHSL(0.85, 0.7, 0.6)
      else if (colorVariant === 2) color.setHSL(0.55, 0.8, 0.6)
      else if (colorVariant === 3) color.setHSL(0.15, 0.7, 0.5)
      else if (colorVariant === 4) color.setHSL(0.3, 0.6, 0.4)
      else color.setHSL(0.65, 0.5, 0.7)

      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 0.4 + 0.05

      velocities[i * 3] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008
    }

    return { positions, colors, sizes, velocities, count }
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return

    const time = state.clock.getElapsedTime()
    const positions = particlesRef.current.geometry.attributes.position.array
    const sizes = particlesRef.current.geometry.attributes.size.array

    for (let i = 0; i < particleData.count; i++) {
      const i3 = i * 3

      positions[i3] += particleData.velocities[i3]
      positions[i3 + 1] += particleData.velocities[i3 + 1] + Math.sin(time * 0.3 + i * 0.01) * 0.002
      positions[i3 + 2] += particleData.velocities[i3 + 2]

      sizes[i] = particleData.sizes[i] * (1 + Math.sin(time * 1.5 + i * 0.15) * 0.2)

      if (positions[i3] > 10) positions[i3] = -10
      if (positions[i3] < -10) positions[i3] = 10
      if (positions[i3 + 1] > 4) positions[i3 + 1] = -4
      if (positions[i3 + 1] < -4) positions[i3 + 1] = 4
      if (positions[i3 + 2] > 5) positions[i3 + 2] = -5
      if (positions[i3 + 2] < -5) positions[i3 + 2] = 5
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.geometry.attributes.size.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleData.count}
          array={particleData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleData.count}
          array={particleData.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleData.count}
          array={particleData.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={AdditiveBlending}
      />
    </points>
  )
}

function BackgroundParticles() {
  const bgRef = useRef(null)

  const bgData = useMemo(() => {
    const count = 800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      const color = new Color()
      color.setHSL(0.7 + Math.random() * 0.2, 0.3, 0.2)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 0.15 + 0.02
    }

    return { positions, colors, sizes, count }
  }, [])

  useFrame((state) => {
    if (!bgRef.current) return

    const time = state.clock.getElapsedTime()
    const positions = bgRef.current.geometry.attributes.position.array

    for (let i = 0; i < bgData.count; i++) {
      const i3 = i * 3

      positions[i3] += Math.sin(time * 0.02 + i) * 0.0005
      positions[i3 + 1] += Math.cos(time * 0.015 + i) * 0.0003

      if (positions[i3] > 15) positions[i3] = -15
      if (positions[i3] < -15) positions[i3] = 15
      if (positions[i3 + 1] > 6) positions[i3 + 1] = -6
      if (positions[i3 + 1] < -6) positions[i3 + 1] = 6
    }

    bgRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={bgRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={bgData.count}
          array={bgData.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={bgData.count}
          array={bgData.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={bgData.count}
          array={bgData.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={AdditiveBlending}
      />
    </points>
  )
}

export default function Particles() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 70 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.9} />
        <Flowing />
        <BackgroundParticles />
      </Canvas>
    </div>
  )
}