import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.jpg)] bg-cover bg-gray'
    style={{backgroundSize: "25%", backgroundPosition: "left 120px top 100px"}}
    >
          <Navbar />
          <div className='container grid lg:grid-cols-2 h-[calc(200vh-80px'>
            <div className='hidden lg:block'></div>
            <div className='text-[15px] sm:text-[70px] font leading-tight flex justify item-center'>
              <div>

                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">I am Farhan Siddiqui</p>

                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">A full Stack Developer</p>

                <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">& UI/UX Designer</p>

              </div>
              </div>
          </div>
    </div>
  )
}

export default Hero
