import React from "react"
import { about2} from "../assets"
import { Gradient} from "./design/Services"
import Section from "./Section"
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { curve } from "../assets"
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { gal1, gal2, gal3, gal4, gal5, gal7, gal8, gal9, gal10} from "../assets"

const About = () => {
    const images = [gal1, gal2, gal3, gal4, gal5, gal7, gal8, gal9, gal10]
  return (
    <Section id="about-us">
        <div className="="container>
            

            <div className="relative">
                <div className="relative z-1 flex items-center lg:h-[39rem] mb-5 p-8 border s
                border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] h-[19rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-5/5 xl:w-auto">
                    <Swiper className="rounded-[1rem]"
                modules={[Autoplay, A11y]}
                spaceBetween={30} 
                slidesPerView={1} 
                autoplay
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className="w-full h-full object-cover md:object-cover "
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
                    </div>

                    
                    
                </div>

                
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <video src={about2} className="h-full w-full object-cover" width={630} height={750} alt="Lang" autoPlay loop muted />
                    </div>
                    

                        
                    </div>

                    <div className="p-4 bg-n-8 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        

                        <div className="relative h-[34rem] bg-n-8 rounded-xl overflow-hidden md:h-[39rem]">
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/10 to-n-8/90 lg:p-15">
                        <h4 className="h4 mb-15 bold italic relative justify-center text-center text-pink-600">Ignition
                        <img 
                            src={curve} 
                            className="absolute top-full left-0 w-full xl:-mt-2 mt-4" 
                            width={624}
                            height={28}
                            alt="curve" />
                        </h4>
                        
                        <p className="body-2 mb-[0.5rem] mt-5 text-n-3" style={{lineHeight: '2.5'}}>
                        Imagine a place where the hustle of life melts away,
                        replaced by the soothing sounds of laughter and the gentle hum of nature. 
                        At Ignition, families and friends come together to create memories 
                        that last a lifetime—whether it’s lounging by the pool, sharing a meal in our
                        cozy restaurant, or simply enjoying the peaceful atmosphere that surrounds them. 
                        It’s more than just a venue; it’s a haven of comfort, joy, and togetherness—a place
                        where every visit feels like coming home.</p>
                        </div>

                            
                        </div>
                    
                    </div>
                </div>

                <Gradient />
                
            </div>
        </div>
    
    </Section>
)
}

export default About
