import React from 'react'
import './About.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { aboutData } from '../../data/aboutData'
import line from '../../assets/Line 10.png'
import aboutLogo from '../../assets/aboutLogo.png'
import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

function About() {
  return (
    <div className='about'>
        <Header/>
        <div className="about_caption">
          <h1>Biz haqimizda</h1>
          <p>Kompaniyamiz haqida batafsil bilib olishingiz mumkin</p>
        </div>
        <div className="aboutContainer">
          {
            aboutData.map((item,index)=>
                <div key={index} className="about_container_item">
                  <div className='about_text'>
                  <h1>{item.title}</h1>
                  <p>{item.info}</p>
                  </div>
                  <div className='about_img'>
                  <img src={item.img} alt="" />
                  <img src={line} alt="" />
                  </div>
                </div>   
            )
          }
        </div>
        <div className="aboutLogo">
          <img src={aboutLogo} alt="" />
        </div>
        <div className="about_bottom_content">
          <Link to='/'><FiArrowLeft/> Bosh sahifa</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default About