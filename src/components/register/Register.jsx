import React from 'react'
import './Register.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { useDispatch,} from 'react-redux'
import { USER } from '../../context/action/actionTypes'

function Register() {
    const dispatch = useDispatch()

    function REGISTER(e) {
        e.preventDefault()
        const userData = {
            name: e.target.name.value,
            familiya: e.target.familiya.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            location: e.target.location.value,
            mfy: e.target.mfy.value,
            kocha: e.target.kocha.value,
        }

        if(userData.name ==="" || 
            userData.familiya==="" ||
            userData.email==="" ||
            userData.phoneNumber==="" ||
            userData.location===""||
            userData.kocha===""||
            userData.mfy===""){
                alert("Malumotlarni kiriting!")
                return <></>
            }

        dispatch({ type: USER, payload: userData })

    }
    return (
            <div className="register_wrapper">
                <div className="register_logo">
                    <BiUser />
                </div>
                <form onSubmit={REGISTER}>
                    <div className="user_names">
                        <div className="user_name">
                            <BiUser />
                            <input reqired  type="text" name='name' placeholder='Ism' />
                        </div>
                        <div className="user_name">
                            <BiUser />
                            <input reqired  type="text" name='familiya' placeholder='Familiya' />
                        </div>
                    </div>
                    <div className="user_email_with_phone">
                        <div className="user_email">
                            <MdEmail />
                            <input  reqired type="text" name='email' placeholder='Elektron pochta' />
                        </div>
                        <div className="user_email">
                            <FaPhoneAlt />
                            <input  reqired type="text" name='phoneNumber' placeholder='Telefon raqam' />
                        </div>
                    </div>
                    <div className="user_location">
                        <MdLocationPin />
                        <select  reqired name='location'>
                            <option value="Namangan">Namangan</option>
                            <option value="Andijon">Andijon</option>
                            <option value="Fargona">Fargona</option>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Samarqand">Samarqand</option>
                            <option value="Jizzax">Jizzax</option>
                            <option value="Xorazm">Xorazm</option>
                            <option value="Sirdaryo">Sirdaryo</option>
                            <option value="Guliston">Guliston</option>
                            <option value="Qoraqalpogiston">Qoraqalpogiston</option>
                            <option value="Navoiy">Navoiy</option>
                            <option value="Qarshi">Qarshi</option>
                        </select>
                    </div>
                    <div className="user_street">
                        <input reqired  type="text" name='mfy' placeholder='MFY' />
                        <input reqired  type="text" name='kocha' placeholder='Kocha' />
                    </div>
                    <button type='submit'>Kirish</button>
                </form>
            </div>
    )
}

export default Register