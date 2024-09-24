import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'


const  Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
    <h1> <span>I m Muhammad Bilal</span> , Frontend Developer based in KSA</h1>
    <p> I am frontend Developer from KSA with 2 Years of Experience</p>
    <div className="Hero-action">
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume"> My Resume</div>
    </div>




    </div>
  )
}

export default Hero