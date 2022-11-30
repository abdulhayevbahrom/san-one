import React, { useState } from 'react'
import './NewProducts.css'
import { products } from '../../data/products'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { MdShare } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {ADD_TO_CART} from '../../context/action/actionTypes'

function NewProducts() {
    const dispatch = useDispatch()
    const cart = useSelector(s => s.addToCart)

    const ADDTOCART = (product) =>{
        const index = cart.findIndex((item) => item.id === product.id)
        if(index>-1){
            cart[index].price +=cart[index].price 
        }
        else(
            dispatch({type:ADD_TO_CART, payload:product})
        )
    }

    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(8)

    const next = () => {
        setFrom(from + 8)
        setTo(to + 8)
    }
    const back = () => {
        setFrom(from - 8)
        setTo(to - 8)
    }
    const data = products.slice(from, to)

    const pagination = Math.ceil(products.length / 8)
    let paginationCount = []
    for (let i = 1; i <= pagination; i++) {
        paginationCount.push(1)
    }

    const dissable = products.length < to

    function SHARE(images, price, name) {
        const shareData = {
            title: name,
            text: price,
            url: images[0]
        }
        navigator.share(shareData)
    }
    return (
        <div className='newProducts'>
            <div className="newProducts_caption">
                <h1>Yangi mahsulotlar</h1>
                <p>Eng so'ngi mahsultolarimizni ko;rib chiqing va tanlang</p>
            </div>
            <div className="newProducts_container">
                {
                    data?.map((item, index) =>
                        <div key={index} className="container_item">
                            <Link to={`/products/${item.id}`}>
                                <img src={item.images[0]} alt="" />
                            </Link>
                            <p className='name'>{item.name}</p>
                            <p className='price'>{item.price}</p>
                            <strike>{item.price + 100000}</strike>
                            <div className="container_item_buy">
                                <div>
                                    <button>Sotib olish</button>
                                    <button className='toCart' onClick={()=>ADDTOCART(item)} >Savatga</button>
                                </div>
                                <MdShare onClick={() => SHARE(item.images, item.name, item.price)} />
                            </div>
                        </div>
                    )
                }
            </div>
            {pagination === 1 ? <></> :
                <div className="newProducts_pagination">
                    <FiArrowLeft onClick={back} style={from === 0 ? { display: "none" } : { display: "block" }} />
                    {paginationCount.map((i, index) => <div key={index} className="circle"></div>)}
                    <FiArrowRight onClick={next} style={dissable ? { display: "none" } : { display: "block" }} />
                </div>
            }
        </div>
    )
}

export default NewProducts