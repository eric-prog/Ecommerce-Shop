import * as THREE from 'three'
import React, { useRef } from 'react'
import AuthorImg from "../assets/author.jpeg"
import AuthorStoryImg from "../assets/authorStory.png"
import { ThreeElements, useLoader } from '@react-three/fiber'
import { Edges } from "@react-three/drei"


export default function Cube(props: ThreeElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)

    const authorImg = useLoader(THREE.TextureLoader, AuthorImg.src);
    const authorStory = useLoader(THREE.TextureLoader, AuthorStoryImg.src);
        
    return (
        <mesh
            {...props}
            ref={ref}
            >
            <boxGeometry args={[3, 3, 3]} attach="geometry" />
            <meshStandardMaterial color={"yellow"} attach="material-0" />
            <meshStandardMaterial color={"yellow"} attach="material-1" />
            <meshStandardMaterial color={"yellow"} attach="material-2" />
            <meshStandardMaterial color={"yellow"} attach="material-3" />
            <meshStandardMaterial map={authorImg} attach="material-4" />
            <meshStandardMaterial map={authorStory} attach="material-5" />
            <Edges />
        </mesh>
    )
}