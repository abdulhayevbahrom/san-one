import React from 'react'
import './Banner.css'
import Header from '../header/Header'
import banner_krasovka from '../../assets/banner_krasovka_cut.png'
import { Link } from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import logo from '../../assets/header_logo.png'

function Banner() {
  return (
    <div className='banner'>
      <Header bg={'#00000045'} logo={logo}/>
      <h1 className="bg_text">Yangi ko'rinish</h1>
      <h1 className="bg_text_bottom">Yangi ko'rinish</h1>
      <div className="banner_wrapper">
        <div className="banner_wrapper_text">
          <h1>Yozgi mavsum uchun <br /> <span>Yangi ko'rinish</span></h1>
          <p>Yangicha uslub va ko'rinishda ishlab chiqilgan, yangi poyabzallarimiz bilan yoz faslini yanada yorqinroq, yanada qulayroq o'tkazasiz!</p>
          <Link className='banner_btn' to='/catalog'>Ko'rish</Link>
          <Link className='banner_btn' to='/profil'>Royxatdan o'tish <FiArrowRight/></Link>
        </div>
        <div className="banner_wrapper_img">
          <img src={banner_krasovka} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner