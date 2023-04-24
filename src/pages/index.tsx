import Cube from '@/components/Cube'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export default function Home() {
  return (
    <div className='w-full h-full absolute'>
      <Canvas className='w-full h-full'>
        <ambientLight intensity={0.5}/>
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Cube position={[0, 0, 0]} />
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>
  )
}
