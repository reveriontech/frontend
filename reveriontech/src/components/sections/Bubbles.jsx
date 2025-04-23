import React from "react"
import { Float, Environment, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"

function Bubble({ position, scale = 1, color = "#aaccff" }) {
    return (
        <Float speed={1.5} rotationIntensity={15} floatIntensity={2.5} floatingRange={[-1.5, 1.5]}>
        <mesh position={position} scale={scale}>
            <sphereGeometry args={[1, 128, 128]} />
            <meshPhysicalMaterial
            color={new THREE.Color(color)}
            transmission={1} // Glass refraction
            roughness={0}
            thickness={10} // thicker bubble wall
            clearcoat={1}
            clearcoatRoughness={0}
            reflectivity={1}
            ior={1} // closer to water
            specularIntensity={1}
            opacity={1}
            transparent={true}
            envMapIntensity={1.5}
            />
        </mesh>
        </Float>
    )
    }

    export default function Bubbles() {

    const texture = '/images/landingpict.jpg'

    return (
        <Canvas
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            height: "100vh",
            width: "100vw",
        }}
        camera={{ position: [0, 0, 8], fov: 50 }}
        >
        <ambientLight intensity={0.3} />
        <Environment background={true} files={texture} blur={1} envMapIntensity={0.7} />
        <Bubble position={[-2, 0, 0]} scale={1.2} color="#aaccee" />
        <Bubble position={[0, 1, -1]} scale={1.5} color="#ccddff" />
        <Bubble position={[2, -1, 1]} scale={1.1} color="#bbddff" />
        </Canvas>
    )
}
