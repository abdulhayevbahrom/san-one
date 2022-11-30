import React, {useState} from 'react'
import { BiUser } from 'react-icons/bi'
import {useSelector} from 'react-redux'

function Login({setMyProfil}) {
    const [aa, setAa] =useState(true)
    const user = useSelector(s => s.register)
    function LOGIN(e){
        e.preventDefault()
        if(user.email === e.target.login_email.value && user.phoneNumber === e.target.login_phoneNumber.value){
            setMyProfil(true)
            setAa(false)
        }
        else{
            alert('Email yoki PhoneNumber xato!')
        }
    }
    return (
        <div className="login" style={{display:aa? "block" : "none" }}>
            <div className="register_logo">
                <BiUser />
            </div>
            <form onSubmit={LOGIN} className='login_form'>
                <div className="user_name">
                    <BiUser />
                    <input type="email" name="login_email" placeholder='email' />
                </div>
                <div className="user_name">
                    <BiUser />
                    <input type="number" name="login_phoneNumber" placeholder='phone number' />
                </div>
                <button type='submit'>Kirish</button>
            </form>
        </div>
    )
}

export default Login