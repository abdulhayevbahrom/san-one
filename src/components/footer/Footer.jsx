import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/header_logo.png'
import { FiFacebook } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'
import { FaInstagram } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import click from '../../assets/uzcard.png'
import payme from '../../assets/humo.png'
import uzcard from '../../assets/click.png'
import {Link} from 'react-scroll'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="container_item">
                    <img src={footerlogo} alt="" className="footer_logo" />
                    <p>+998 (93) 911 95 72</p>
                </div>
                <div className="container_item">
                    <a href="https://t.me/bahromjon0207" rel="noreferrer" target="_blank"><FaInstagram /></a>
                    <a href="https://t.me/bahromjon0207" rel="noreferrer" target="_blank"><FiFacebook /></a>
                    <a href="https://t.me/bahromjon0207" rel="noreferrer" target="_blank"><TbBrandTelegram /></a>
                </div>
                <div className="container_item">
                    <Link to='/catalog'>CATALOG</Link>
                    <Link to='/about'>BIZ HAQIMIZDA</Link>
                </div>
                <div className="container_item">
                    <Link to='kopsotilgan' spy={true} smooth={true}>ENG KO'P SOTILGAN</Link>
                    <Link to='kopkorilgan' spy={true} smooth={true}>ENG KO'P KO'RILGAN</Link>
                    <Link to='hdr' spy={true} smooth={true}>YANGILIKLAR</Link>
                </div>
                <div className="container_item">
                    <a href="https://click.uz" rel="noreferrer" target="_blank"><img src={payme} alt="payme" /></a>
                    <a href="https://payme.uz" rel="noreferrer" target="_blank"><img src={click} alt="click" /></a>
                    <a href="https://humo.uz" rel="noreferrer" target="_blank" className='humo'>HUMO</a>
                    <a href="https://uzcard.uz" rel="noreferrer" target="_blank"><img src={uzcard} alt="cart" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer