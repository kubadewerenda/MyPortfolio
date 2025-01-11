import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const PythonLogo=(props)=>{
  const { nodes, materials } = useGLTF('/models/python_logo.glb')

  const pythonRef = useRef();

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.7,
      })
      .to(pythonRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        x:`-=${Math.PI * 2}`,
        duration: 5.5,
        ease: "linear",
      });
  });
  return (
    <Float floatIntensity={2}>
        <group {...props} dispose={null}>
            <group scale={0.01} rotation={[2.6, 0.8, 0.5]}>
                <mesh
                ref={pythonRef}
                castShadow
                receiveShadow
                geometry={nodes.Python_Python_0.geometry}
                material={materials.Python}
                scale={4}
                />
            </group>
        </group>
    </Float>
  )
}

useGLTF.preload('/models/python_logo.glb')

export default PythonLogo