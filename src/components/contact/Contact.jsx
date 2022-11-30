import React from 'react'
import './Contact.css'
import {FaInstagram} from 'react-icons/fa'
import {FiFacebook, FiArrowRight} from 'react-icons/fi'
import {TbBrandTelegram} from 'react-icons/tb'
import { Link } from 'react-router-dom'
// import bg_fon from '../../assets/image 19.png'

function Contact() {
    return (
        <div className='contact'>
            {/* <img className='bg_fon' src={bg_fon} alt="" /> */}
            <h1>Siz bilan bog'lanishdan mamnunmiz!</h1>
            <div className="location">
                <p>Manzilimiz:</p>
                <p>Toshkent Shahar, Birnarsa tumani, Birnarsa ko'cha 12-uy.</p>
            </div>
            <div className="phoneNumber">
                <p>Murojaat uchun telefon:</p>
                <a href="tel:+998939119572">+998 (93) 911 95 72</a>
            </div>
            <div className="socialNetwork">
                <p>Ijtimoiy tarmoqlarda bizni toping</p>
                <a href="https://t.me/bahromjon0207" rel="noreferrer" target="_blank"><FaInstagram/></a>
                <a href="https://t.me/bahromjon0207" rel="noreferrer" target="_blank"><FiFacebook/></a>
                <a href="https://t.me/bahromjon0207" rel="noreferrer" target="_blank"><TbBrandTelegram/></a>
            </div>
            <Link to="/register" className='linkBtn'>Royxatdan o'tish <FiArrowRight/></Link>
        </div>
    )
}

export default Contact