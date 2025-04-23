import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const Bubble = ({ position, scale, color }) => {
  return (
    <Float speed={1.5} rotationIntensity={15} floatIntensity={2} floatingRange={[-1, 1]}>
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
          opacity={0.7} // Reduced opacity to better see background
          transparent={true}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
};

const BubblesBackground = () => {
  const texture = '/images/landingpict.jpg' // make sure it's inside /public/images

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

        {/* ✅ Use landing image as env background for bubble reflections */}
        <Environment background={true} files={texture} blur={0} envMapIntensity={5} />

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
      {/* Bubble background component */}
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