import React, { useState } from 'react'
import './EngkopKorilgan.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { products } from '../../data/products'
import { Link } from 'react-router-dom'

function EngKopKorilgan() {
    const [index, setIndex] = useState(0)
    const [from, setFrom] = useState(1)
    const [to, setTo] = useState(3)
    // eng koplari
    const filtered = products.slice(0, 10)
    const data = filtered.slice(from, to)
    const main = filtered[index]

    let paginationCount = []
    for (let i = 1; i <= filtered.length; i++) {
        paginationCount.push(1)
    }

    const next = () => {
        setIndex(index + 1)
        setFrom(from + 1)
        setTo(to + 1)
    }
    const back = () => {
        setIndex(index - 1)
        setFrom(from - 1)
        setTo(to - 1)
    }

    return (
        <div className='engKop' id='kopkorilgan'>
            <div className="engKop_caption">
                <h1>Eng ko'p ko'rilgan mahsulotlar</h1>
                <p>Mijozlarimiz tanlovlariga eng loyiq bo'lgan mahsulotlarimiz</p>
            </div>

            <div className="engKop_container">
                <div className="engKop_container_img">
                    <img src={main.images[0]} alt={main.name} />
                </div>
                <div className="engKop_container_info">
                    <div>
                        <h1>{main.name}</h1>
                        <p>Materiali sifatli {main.material} dan</p>
                    </div>
                    <div className="engKop_container_info_imgs">
                        {data?.map(({ images }, index) =>
                            <img key={index} src={images[0]} alt="" />
                        )}
                    </div>
                    <div className="engKop_container_info_buy">
                        <div className="engKop_container_pagination">
                            <Link to="/">Sotib olish <FiArrowRight /> </Link>
                            <FiArrowLeft style={{ display: index === 0 ? 'none' : 'block' }} className="paginBtn" onClick={back} />
                            <FiArrowRight style={{ display: index === filtered.length - 1 ? 'none' : 'block' }} className="paginBtn" onClick={next} />
                            {/* {paginationCount.map((i, index) => <div key={index} className="circle"></div>)} */}
                            <h1>{index + 1}/{filtered.length}</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EngKopKorilgan