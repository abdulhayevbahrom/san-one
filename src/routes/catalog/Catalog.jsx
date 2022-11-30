import React, { useState ,memo, useContext} from 'react'
import "./Catalog.css"
import Header from '../../components/header/Header'
import { catalogTypes, products } from '../../data/products'
import Footer from '../../components/footer/Footer'
import { GoSettings } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { MdShare } from 'react-icons/md'
import { proType } from '../../App'
// import {Link} from 'react-scroll'
import {useSelector,useDispatch} from 'react-redux'
import {ADD_TO_CART} from '../../context/action/actionTypes'


function Catalog() {
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
        // dispatch({type:ADD_TO_CART, payload:product})

    }
    const  {mahsulotTuri} = useContext(proType)
    const [productType, setProductType] = useState(mahsulotTuri !=='' ? mahsulotTuri : '')
    const [priceFrom, setPriceFrom] = useState(0)
    const [priceEnd, setPriceEnd] = useState('')
    const [color, setColor] = useState('qora')
    const [size, setSize] = useState('')
    const [season, setSeason] = useState('bahor')

    const data = products.filter(i => i.type === productType)
        .filter(i => i.price >= priceFrom)
        .filter(i => i.price <= (priceEnd === "" ? 1000000 : priceEnd))
        .filter(i => i.color.toLowerCase() === color)
        .filter(i => i.season.toLowerCase() === season)


    const colors = [
        { colorbg: "#171717", colorName: "qora" },
        { colorbg: "#A18B7F", colorName: "choco" },
        { colorbg: "#9F6233", colorName: "jigarrang" },
        { colorbg: "#D2D2D2", colorName: "kulrang" },
        { colorbg: "#A65252", colorName: "pushti" },
    ]
    const sizes = [39, 40, 41, 42, 43, 44, 45, 46, 47]
    const seasons = ['Bahor', 'Yoz', 'Kuz', "Qish"]

    function SHARE(images, price, name) {
        const shareData = {
            title: name,
            text: price,
            url: images[0]
        }
        navigator.share(shareData)
    }

    return (
        <div className='catalog'>
            <Header />
            <div className="catalog_caption">
                <h1>{productType ? productType : "Katalog"}</h1>
                <p>Mahsulot turlari bo'yicha ko'rib chiqing</p>
            </div>
            {productType === '' ?
                <div className="catalog_container">
                    {catalogTypes?.map(({ typeName, img, type }, index) =>
                        <div key={index} onClick={() => { setProductType(type) }} className="container_item">
                            <img src={img} alt="" />
                            <p>{typeName}</p>
                        </div>
                    )}
                </div>
                :
                <div className="catalog_main">
                    <div className="catalog_main_filter">
                        <div className="filter_bar">
                            <p>Filter</p>
                            <GoSettings />
                        </div>
                        <p className="filter_price">Narxi:</p>
                        <div className="filter_price_form">
                            <div className="price_from">
                                <p>Dan</p>
                                <input type="number" onChange={(e) => setPriceFrom(e.target.value)} value={priceFrom} />
                            </div>
                            <div className="price_from">
                                <p>Gacha</p>
                                <input type="number" onChange={(e) => setPriceEnd(e.target.value)} />
                            </div>
                        </div>
                        <p className='filter_type'>Turlari:</p>
                        <div className="filter_types">
                            {catalogTypes?.map(({ typeName, type }, index) =>
                                <p key={index} style={productType === type ? { background: "#FFF1BE", color: "#DE821D" } : { background: "none" }} onClick={() => { setProductType(type) }} className="typeName">{typeName}</p>
                            )}
                        </div>
                        <div className="filter_color">
                            <span className='filter_color_title'>Rangi:</span>
                            {colors.map(({ colorbg, colorName }, index) =>
                                <div key={index} className="color" onClick={() => setColor(colorName)} style={{border:color===colorName ? '4px solid #DE821D' : 'none'}}> <span style={{ background: colorbg}}></span> </div>
                            )}
                        </div>
                        <p className='filter_sizes_title'>Razmeri:</p>
                        <div className="filter_sizes">
                            {sizes.map((size, index) =>
                                <span onClick={() => setSize(size)} key={index}>{size}</span>
                            )}
                        </div>
                        <p className='filter_where_title'>Qayerga yuborish</p>
                        <div className="filter_where">
                            <GrLocation />
                            <select>
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
                        <p className="filter_season_title">Mavsumi:</p>
                        <div className="filter_season">
                            {seasons?.map((seasonName, index) =>
                                <span onClick={() => setSeason(seasonName.toLowerCase())} key={index}  style={{border:season===seasonName.toLowerCase() ? "1px solid #d0b470" : "1px solid #ddd"}}>{seasonName}</span>
                            )}
                        </div>
                        <Link className='filter_botom_link' to='/'>Eng ko'p sotilyotganlari</Link>
                        <Link className='filter_botom_link' to='/'>Eng ko'p ko'rilyotganlari</Link>
                        <Link className='filter_botom_link' to='/'>Eng ohirgilari</Link>
                    </div>
                    <div className="catalog_content">
                        {data.length===0 ? <h1>Bunday mahsulotlar yo'q</h1>:

                            data.map((item, index) =>
                            <div key={index} className="content_item">
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
                        )}
                        
                    </div>
                </div>
            }
            <Footer />
        </div >
    )
}

export default memo(Catalog)