import React, { useState } from 'react'
import '../../components/register/Register.css'
import './Profil.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'
import avatarLogo from '../../assets/image 19.png'
import { useSelector, useDispatch } from 'react-redux'
import {PROFIL_EDIT} from '../../context/action/actionTypes'

function Profil() {
    const dispatch = useDispatch() 
    const [myProfil, setMyProfil] = useState(false)
    const user_buys = useSelector(s => s.userBuy)
    const register = useSelector(s => s.register)
    const user = useSelector(s => s.register)
    const [name, setName] = useState(user !==null ? user.name : '' )
    const [familiya, setFamiliya] = useState(user !== null ?user.familiya:'')
    const [email, setEmail] = useState(user !== null ?user.email:'')
    const [phoneNumber, setPhoneNumber] = useState(user !== null ?user.phoneNumber:'')
    const [location, setLocation] = useState(user !== null ?user.location:'')
    const [kocha, setKocha] = useState(user !== null ?user.kocha:'')

    // const [edit,setEdit]= useState(false) 

    function EDIT (){
        dispatch({ type: PROFIL_EDIT, payload: {name,familiya,email,phoneNumber,location,kocha} })
    }

    return (
        <div className='profil'>
            <Header />
            {
                register === null ?
                <Register />      :
                <Login setMyProfil={setMyProfil}/> 
            }

            {myProfil ?
                <div className="myProfil">
                    <div className="profilAvatar">
                        <img src={avatarLogo} alt="Avatar" />
                        <label>
                            <input type="file" name="" />
                            Rasm yuklash
                        </label>
                    </div>

                    <form className="myProfil_info" onSubmit={EDIT}>
                        <div className="user_names">
                            <div className="user_name">
                                <FaUser />
                                <input value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder='Ism' />
                            </div>
                            <div className="user_name">
                                <FaUser />
                                <input value={familiya} onChange={(e)=>setFamiliya(e.target.value)} type="text" placeholder='Familiya' />
                            </div>
                        </div>
                        <div className="user_email_with_phone">
                            <div className="user_name">
                                <MdEmail />
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Elektron pochta' />
                            </div>
                            <div className="user_name">
                                <FaPhoneAlt />
                                <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="text" placeholder='Telefon raqam' />
                            </div>
                        </div>
                        <div className="user_email_with_phone">
                            <div className="user_name">
                                <MdLocationPin />
                                <input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder='Location' />
                            </div>
                            <div className="user_name">
                                <MdLocationPin />
                                <input value={kocha} onChange={(e)=>setKocha(e.target.value)} type="text" placeholder='MFY' />
                            </div>
                        </div>
                        <button type='submit'>Tahrirlash</button>
                    </form>

                    <ol className="user_buy_products">
                        {user_buys.length ? <h1>Barcha xaridlar tarixi</h1> : <></>}
                        {
                            user_buys?.map((item, index) =>
                                <li key={index} className="buy_products_item">
                                    <img src={item.images[0]} alt={item.name} />
                                    <div>
                                        <p>{item.name}</p>
                                        <span>{item.date.slice(0, 10)}</span>
                                    </div>
                                    <b>{item.price}</b>
                                </li>
                            )
                        }
                    </ol>

                </div>
                : <></>
            }
            <Footer />
        </div>
    )
}

export default Profil