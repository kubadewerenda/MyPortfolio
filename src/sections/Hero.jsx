import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom.jsx'
import { Suspense, useEffect,useState } from 'react'
import CanvasLoader from '../components/CanvasLoader.jsx'
import {Leva, useControls} from 'leva'
import { useMediaQuery } from 'react-responsive'
import {calculateSizes} from '../constants/index.js'
import ReactLogo from '../components/ReactLogo.jsx'
import PythonLogo from '../components/PythonLogo.jsx'
import HeroCamera from '../components/HeroCamera.jsx'

const Hero = ({ texts,onCanvasLoaded, onAllLoaded, onLanguageSelected }) => {
    const isMobile=useMediaQuery({maxWidth: 768});
    const isTablet=useMediaQuery({minWidth: 768, maxWidth: 1024});
    const isSmall=useMediaQuery({maxWidth: 440});

    const sizes=calculateSizes(isSmall,isMobile,isTablet);
    
    const staticText=texts.w_static_text
    const dynamicTexts=[texts.w_dynamic_text_1,texts.w_dynamic_text_2]
    const [currentText,setCurrentText]=useState("")
    const [index,setIndex]=useState(0)
    const [isDeleting,setIsDeleting]=useState(false)
    const [isLoopFinished,setIsLoopFinished]=useState(false)
    const [hasDelayPassed,setHasDelayPassed]=useState(false)

    useEffect(()=>{
        if(onAllLoaded && onLanguageSelected){
            const delayTimeout=setTimeout(()=>(
                setHasDelayPassed(true)
            ),3000)
            return ()=>clearTimeout(delayTimeout)
        }
    },[onAllLoaded,onLanguageSelected])
        
    useEffect(()=>{
        if (!hasDelayPassed || !onAllLoaded || !onLanguageSelected || isLoopFinished) return;

        const typingSpeed=isDeleting?50:100

        const timeout=setTimeout(()=>{

            const fullText=dynamicTexts[index]

            if(!isDeleting){
                setCurrentText(fullText.slice(0,currentText.length+1))

                if(currentText==fullText){
                    setTimeout(()=>{
                        if(index<dynamicTexts.length-1){
                            setIsDeleting(true)
                        }else{
                            setIsLoopFinished(true)
                        }
                    }, 3000)
                }
            }else{
                setCurrentText(fullText.slice(0,currentText.length-1))

                if(currentText==""){
                    setIsDeleting(false)
                    setIndex(index+1)
                    setCurrentText("")
                }
            }
        },typingSpeed)
        return ()=>clearTimeout(timeout)
    },[currentText,index,isDeleting,onAllLoaded,onLanguageSelected,hasDelayPassed,isLoopFinished])


    
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full flex items-center sm:mt-28 mt-24 c-space gap-3">
                <p className="relative">
                    <span className="static-text">{staticText}</span>
                    <span className="dynamic-text">
                        {isLoopFinished?dynamicTexts[1]:currentText}
                    </span>                    
                </p>
            </div>
            <div className="w-full h-full absolute sm:top-1/2 top-[40%] transform -translate-y-1/2 inset-0 mt-10 max-h-[900px]">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader onLoaded={onCanvasLoaded} />}>
                                        
                    <PerspectiveCamera 
                        makeDefault 
                        position={[0, 0, 30]}
                    />

                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                            position={sizes.deskPosition}                             
                            scale={sizes.deskScale}
                        />
                    </HeroCamera>

                    <group>
                        <PythonLogo position={sizes.pythonLogoPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                    </group>

                    <ambientLight 
                        intensity={0.3} 
                    />

                    <directionalLight
                        position={[5, 10, 5]} 
                        intensity={1}
                        target-position={[0, 0, 0]}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />

                    
                    <Environment 
                        files="/textures/hdr/studio_light.hdr" 
                        background={false} 
                    />

                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute sm:bottom-5 bottom-32 left-0 right-0 flex justify-center w-full z-10 mt-10">
                <a href="#about" className="w-fit group">
                    <button className="button-anim flex justify-center sm:px-28 px-12 gap-5">
                        <span className="relative flex items-center justify-center h-6 w-6">
                            <span className="btn-ping"/>
                            <span className="btn-ping_dot"/>
                        </span>
                        <span className="button-a-glow"></span>
                        <span className="relative">{texts.w_button}</span>
                    </button>
                </a>
            </div>
        </section>
    )
}
export default Hero 