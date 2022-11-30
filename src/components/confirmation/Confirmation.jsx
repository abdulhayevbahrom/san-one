import React from 'react'
import '../../routes/cart/Cart.css'
import click from '../../assets/humo.png'
import payme from '../../assets/uzcard.png'
import {FiArrowLeft} from 'react-icons/fi'
import {MdLocationPin} from 'react-icons/md'  
import {useDispatch} from 'react-redux'
import { USER_BUY, CLEAR_CART } from '../../context/action/actionTypes'

function Confirmation({ cart ,setConfirmation}) {
    const dispatch = useDispatch()
    const my_text = `Zakaz:%0A  Mahsulotlar soni: ${cart.length} %0A  Chegirma:10%  %0A  Jami narxi: ${cart.reduce((a, b) => a + b.price, 0) * 10 / 100}`

    const token = "5688573266:AAG7OHZKgplyegkzRk2tsUI9Agmiir9PRIk";
    const chat_id = -875804785;
    const url = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${chat_id}&text=${my_text}`
    
    const sendToBot = (e) => {
        e.preventDefault()
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send()
        
        console.log("Xabar Muvofaqqiyatli Ketti!");
        cart.map(i=>i.date= new Date())
        dispatch({type:USER_BUY, payload:cart})
        dispatch({type:CLEAR_CART})
    }
    return (
        <div className="confimation">
            <div className="confirmation_info">
                <div className="product_Qty">
                    <span>Mahsulotlar soni:</span>
                    <span>{cart.length} dona</span>
                </div>
                <div className="product_Qty">
                    <span>Narxi:</span>
                    <span>{cart.reduce((a, b) => a + b.price, 0) * 10 / 100}so'm</span>
                </div>
            </div>
            <div className="pay_cart">
                <div className="cartType">
                    <div>
                        <MdLocationPin /> <input type="text" placeholder='Manzilni toliq kiriting' />
                    </div>
                    <img src={click} alt="" />
                    <img src={payme} alt="" />
                </div>
                <div className="cart_information">
                    <div className="cardNumber">
                        <p>Karta raqamini kiriting</p>
                        <input type="text" placeholder='1111222233334444' maxLength={16} minLength={16} />
                    </div>
                    <div className="cardNumber">
                        <p>Amal qilish muddati</p>
                        <input type="text" placeholder='12/06' maxLength={4} minLength={4} />
                    </div>
                    <div className="cardNumber">
                        <p>Kod</p>
                        <input type="text" placeholder='1111' maxLength={4} minLength={4} />
                    </div>
                </div>
                <div className="tasdiqlash">
                    <button onClick={() => setConfirmation(false)}><FiArrowLeft /> ortga</button>
                    <button onClick={sendToBot}>Tasdiqlash</button>
                </div>
            </div>

        </div>
    )
}

export default Confirmation