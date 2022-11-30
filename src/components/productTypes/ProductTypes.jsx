import React, {useState, useContext} from 'react'
import './ProductTypes.css'
import { productTypes } from '../../data/productTypes'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Link} from 'react-router-dom'
import { proType } from '../../App'

function ProductTypes() {
    const  {setMahsulotTuri} = useContext(proType)
    const [from, setFrom]= useState(0)
    const [to, setTo]= useState(4)
    
    const data = productTypes.slice(from , to)

    const next =()=>{
        setFrom(from+4)
        setTo(to+4)
    }
    const back=()=>{
        setFrom(from-4)
        setTo(to-4)
    }
    const dissable = productTypes.length <= to
    return (
        <div className='productTypes'>
            <div className="productTypes_caption">
                <h1>Mahsulotlarimiz turlari</h1>
                <p>Kompaniyamiz tomonidan ishlab chiqariladigan poyabzal turlari</p>
            </div>
            <div className="productTypes_container">
                <FiArrowLeft onClick={back}  style={ from === 0 ? {opacity:"0"} : {opacity:"1"}}/>
                {data?.map(({img, typeName,type}, index)=>
                <Link key={index} to="/catalog" onClick={()=>setMahsulotTuri(type)} className="container_item">
                    <img src={img} alt={typeName} />
                    <p>{typeName}</p>
                </Link>
                )}
                <FiArrowRight onClick={next} style={ dissable ? {opacity:"0"} : {opacity:"1"}}/>
            </div>
            <Link to="/catalog" className='linkBtn'>Katalogga o'tish <FiArrowRight/></Link>
        </div>
    )
}

export default ProductTypes