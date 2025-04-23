import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const Bubble = ({ position, scale, color }) => {
  const meshRef = useRef();
  
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
        meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
      }
    });
    return (
      <Float speed={1} rotationIntensity={2} floatIntensity={1.5} floatingRange={[-0.5, 0.5]}>
        <mesh ref={meshRef} position={position} scale={scale}>
          <sphereGeometry args={[1, 128, 128]} />
          <meshPhysicalMaterial
            color={new THREE.Color(color)}
            transmission={0.96} 
            roughness={0.05} 
            thickness={0.5} 
            clearcoat={1}
            clearcoatRoughness={0.1} 
            reflectivity={0.8}
            ior={1.3} 
            specularIntensity={1.5}
            opacity={0.85} 
            transparent={true}
            envMapIntensity={2} 
            metalness={0.05} 
            attenuationColor={new THREE.Color("#ffffff")}
            attenuationDistance={0.5}
          />
        </mesh>
      </Float>
    );
  };
  

  const BubblesBackground = () => {
    const texture = '/images/landingpict.jpg' 
    return (
      <div className="bubble-container">
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
          camera={{ position: [0, 0, 8], fov: 50 }}
        >
          <ambientLight intensity={1} />

          <Environment files={texture} background={false} envMapIntensity={1.5} />
  
          <Bubble position={[-2, 0, 0]} scale={1.2} color="#aaccee" />
          <Bubble position={[0, 1, -1]} scale={1.5} color="#ccddff" />
          <Bubble position={[2, -1, 1]} scale={1.1} color="#bbddff" />
        </Canvas>
      </div>
    )
  }

const Hero = () => {
  const scrollToSection = (elementId, e) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="bg-home" style={{backgroundImage: "url('/images/landingpict.jpg')", backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} id="home">

      <BubblesBackground />
      
      {/* Semi-transparent overlay */}
      <div className="bg-overlay" style={{ zIndex: 2 }}></div>
      
      {/* Content */}
      <div className="home-center" style={{ position: "relative", zIndex: 3 }}>
        <div className="home-desc-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-heading text-center mt-5 pt-4" data-aos="fade-up">
                  <img src="/images/ReverionTechLogo-white.png" alt="Reverion Logo picture" 
                    className='titlePicture'
                  />
                  <p className="para-desc mx-auto text-light" style={{marginTop: '20px'}}>
                    Empower your business with <span className="words-color">Web3</span>, <span className="words-color">GenAI</span>, and <span className="words-color">Scalable</span> digital solutions
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px'}}>
                    <div className="mt-4 pt-2">
                      <a 
                        href="https://forms.clickup.com/9016503780/p/f/8cptvf4-496/BTYBZQ6D05CPYSPJKU/project-intake-form" 
                        className="btn btn-custom"
                        target="_blank" 
                        rel="noopener noreferrer" 
                      >
                       Start your project
                      </a>
                    </div>
                    <div className="mt-4 pt-2">
                      <a 
                        href="https://calendly.com/reveriontech" 
                        className="btn btn-custom1"
                        target="_blank" 
                        rel="noopener noreferrer" 
                      >
                        Let's talk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;