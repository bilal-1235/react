import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
import  './About.css'

const  About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
              <div className='about-left'>
                < img src={profile_img} alt=''/>
                </div> 
                <div className="about-right">
                  <div className="about-para">
                    <p>As an accomplished and versatile web developer, I offer a proven track record of delivering high-quality
solutions in both front-end and back-end development. With a strong foundation in front-end technologies
such as WordPress HTML, CSS, Bootstrap, JavaScript, and jQuery, React, Tailwind CSS. I have 3 years of
Experienced in Web Development</p>
<p><b>Major Responsibiltes</b><br/>
•Develop and maintain high-quality web applications using HTML, CSS, JavaScript, and React
<br/>•Implement design and functionality enhancements to improve user experience
<br/>•Utilize Material-UI to create visually appealing and consistent interfaces
<br/>•Ensure applications are optimized for performance, scalability, and responsiveness
<br/>•Collaborate with UX/UI designers to translate designs into functional web components
•Assist with troubleshooting and debugging to resolve issues promptly
</p>
                  </div>
                  <div className="about-skills">
                    <div className="about-skill"><p>HTML and CSS</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>WordPress Elementor </p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>Reactjs and Javascript</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p><b>Artificial Intelligence</b> Deep Learning And Machine Learning Python Language and Data Science Framework Scrikitlearn, Numpy, Scipy, Pandas, TensorFlow,pytorch etc</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p><b>Front End Designer</b> Figma,AdobeXD</p><hr style={{width:"50%"}} /></div>
                  </div>
                </div>
                </div>
                <div className="about-achievements">
                  <div className="about-achievement">
                    <h1>2+</h1>
                    <p>Years of Experience</p>
                  </div>
                  <hr />
                  <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects</p>
                  </div>
                  <hr />
                  <div className="about-achievement">
                    <h1>2+</h1>
                    <p>Comapany of Professional Experience</p>
                  </div>
                  <hr/>
                  
                </div>

    </div>
  )
}

export default About