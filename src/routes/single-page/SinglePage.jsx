import React, { useState } from 'react'
import "./SinglePage.css"
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {ADD_TO_CART} from '../../context/action/actionTypes'
import { products } from '../../data/products'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SingleFullInfo from '../../components/singleFullInfo/SingleFullInfo'


const SinglePage = () => {
    const [index, setIndex] = useState(0)
    const id = useParams().id
    const product = products.find(i => +i.id === +id)

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

    document.title = product.name
    return (
        <div className='singleWrapper'>
            <Header />
            <div className="single_container">
                <div className="single_container_img">
                    <div className="allImg">
                        {product.images?.map((i, index) => <img key={index} onClick={() => setIndex(index)} src={i} alt="" />)}
                    </div>
                    <img src={product.images[index]} className="single_container_img_single" alt={product.name} />
                </div>
                <div className="single_container_info">
                    <h1 className="container_info_title">{product.name}</h1>
                    <p className='container_info_color'>Rangi:{product.color}</p>
                    <p className="container_info_price">Narxi:</p>
                    <span className="single_price">{product.price}</span>
                    <strike className="single_chegirma">{product.price + 100000}</strike>
                    <p className='container_info_size'>O'lchamlar</p>
                    <div>{product.size.map((i, index) => <span className='single_size_item' key={index}>{i}</span>)}</div>
                    <div className="single_buy">
                        <button>Sotib olish</button>
                        <button className='toCart' onClick={()=>ADDTOCART(product)}>Savatga</button>
                    </div>
                </div>
            </div>

            <SingleFullInfo/>
            <Footer />
        </div>
    )
}

export default SinglePage