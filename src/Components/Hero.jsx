import Section from "./Section"
import { curve } from "../assets";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
const Hero = () => {
    const parallaxRef = useRef(null);


  return (
    <Section 
    className="pt-[12rem] -mt-[5.25]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    > 
    <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-10 lg:mb-[6.25rem] lg:mt-[6.25rem]" >
            <h1 className="h1 mb-4 mt-7">
                Welcome&nbsp;to&nbsp; {' '}
                <span className="inline-block relative bold italic text-pink-800">
                    Ignition
                    <img 
                    src={curve} 
                    className="absolute top-full left-0 w-full xl:-mt-2" 
                    width={624}
                    height={28}
                    alt="curve" />
                </span>
            </h1>
            
        
        </div>
        
                
                    

                    <ScrollParallax isAbsolutelyPositioned>
                    
                        <BackgroundCircles />
                    </ScrollParallax>

                    
                    
                </div>

                <Gradient />
                
            
            
            
    

        

    

    </Section> 
  )
}

export default Hero
