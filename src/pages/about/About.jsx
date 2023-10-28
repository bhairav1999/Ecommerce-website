import React from 'react'
import HeroSection from '../home/pages/herosection/HeroSection'

const About = () => {
  const data ={
    name:"Altra Ecommerce"
  }
  return (
   <>
   <HeroSection myData={data}/>
   </>
  )
}

export default About
