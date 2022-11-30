import React, { useState } from 'react'
import './Cart.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi'
import cartLogo from '../../assets/hdr_logo_orange.png'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_FROM_CART } from '../../context/action/actionTypes'

import Confirmation from '../../components/confirmation/Confirmation';
// import {ADD_ITEM} from '../../context/action/actionTypes'

function Cart() {
  const [confirmation, setConfirmation] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector(s => s.addToCart)

  function deleteFromCart(id) {
    dispatch({ type: DELETE_FROM_CART, payload: id })
  }

  function PLUS(item) {
    // dispatch({type:ADD_ITEM, payload: item.id})
  }

  return (
    <div className='cart'>
      <Header />
      {!confirmation ?
        <div>
          <div className="cart_title">Savatda {cart.length} ta tovar bor</div>
          <div className="cart_wrapper">
            <div className="cart_container">
              {
                cart.map((item, index) =>
                  <div key={index} className="cart_container_item">
                    <Link to={`/products/${item.id}`}>
                      <img src={item.images[0]} alt="" />
                    </Link>
                    <p className='name'>{item.name}</p>
                    <div className="addQty">
                      <FaMinus />
                      <span>1</span>
                      <FaPlus onClick={() => PLUS(item)} />
                    </div>
                    <h3 className='price'>{item.price}</h3>
                    <FiX className='deleteBtn' onClick={() => deleteFromCart(item.id)} />
                  </div>
                )
              }
            </div>
            {
              cart.length ? 
            
            <div className="cart_total_info">
              <img src={cartLogo} alt="" />
              <div className="total_info_price">
                <p>Narxi:</p>
                <p>{cart.reduce((a, b) => a + b.price, 0)}</p>
              </div>
              <div className="skidka">
                <p>Chegirma</p>
                <p>10%</p>
              </div>
              <div className="skidka">
                <p>Yetkazib berish</p>
                <p>15 000 so'm</p>
              </div>

              <div className="totalPrice">
                <p>Jami:</p>
                <p>{cart.reduce((a, b) => a + b.price, 0) * 10 / 100}</p>
              </div>
              <button className='confirmBtn' onClick={() => setConfirmation(true)}>BUYURTMANI TADIQLASH</button>
            </div>
            :
            <></>  
          }
          </div>
        </div>
        : <Confirmation cart={cart} setConfirmation={setConfirmation} />}
      <Footer />
    </div>
  )
}

export default Cart