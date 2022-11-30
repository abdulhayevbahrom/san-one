import React, { useState } from 'react';
import './SingleFullInfo.css'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products'
import { TbBrandTelegram } from 'react-icons/tb'
import { FaTrash } from 'react-icons/fa'

function SingleFullInfo() {
    const [content, setContent] = useState(true)
    const [coment, setComent] = useState('')
    const id = useParams().id
    const product = products.find(i => +i.id === +id)

    let commnets_local = [];
    let comments = JSON.parse(localStorage.getItem("words"));

    function POSTCOMMENT(e) {
        e.preventDefault()
        if(coment ===''){
            alert('Izoh kiriting')
            return <></>
        }
        localStorage.removeItem("words");
        if (comments !== null) {
            commnets_local.push(...comments, coment);
            localStorage.setItem("words", JSON.stringify(commnets_local));
            setComent('')
        } else {
            commnets_local.push(coment);
            localStorage.setItem("words", JSON.stringify(commnets_local));
            setComent('')
        }
    }

    function deleteItem(index) {
        let rozilik = window.confirm('Rostdan shu izohni o\'chirmoqchimisiz?')
        if (!rozilik) {
            return <></>
        }
        comments.splice(index, 1)
        localStorage.setItem("words", JSON.stringify(comments));
    }

    return (
        <div className='singleFullInfo'>
            <div className="singleFullInfo_btns">
                <button onClick={() => setContent(true)} style={{ background: content ? "#dcbb45" : '#fff' }}>Malumotlar</button>
                <button onClick={() => setContent(false)} style={{ background: !content ? "#dcbb45" : '#fff' }}>Komentariya</button>
            </div>

            {content ?
                <ul className="full_info">
                    <li><span>Nomi</span> <span>{product.name}</span></li>
                    <li><span>Narxi</span> <span>{product.price} so'm</span></li>
                    <li><span>Olchamlari</span> <div>{product.size.map((i, index) => <span className='fullInfo_size_item' key={index}>{i}, </span>)}</div></li>
                    <li><span>Rangi</span> <span>{product.color}</span></li>
                    <li><span>Mavsumi</span> <span>{product.season}gi oyoq kiyim</span></li>
                </ul>
                : <div className="fullInfo_komentarya">
                    <form onSubmit={POSTCOMMENT} className="add_koment">
                        <input required type="text" onChange={(e) => setComent(e.target.value)} value={coment} placeholder='Izoh yozing' />
                        <TbBrandTelegram onClick={POSTCOMMENT} />
                    </form>
                    <ul className='comments'>
                        {/* {!comments.length ? <h1>Fikrlar yoq</h1> : */}
                           { comments?.map((item, index) =>
                                <li key={index}> <span>{item}</span> <FaTrash onClick={() => deleteItem(index)} /> </li>
                            )}
                    </ul>
                </div>
            }

        </div>
    )
}

export default SingleFullInfo