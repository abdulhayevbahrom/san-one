import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import EngKopKorilgan from '../../components/eng_kop_korilgan/EngKopKorilgan'
import Footer from '../../components/footer/Footer'
import Kopsotilgan from '../../components/kopsotilgan/Kopsotilgan'
import NewProducts from '../../components/newProducts/NewProducts'
import ProductTypes from '../../components/productTypes/ProductTypes'

function Home() {
  return (
    <div className='home'>
        <Banner/>
        <NewProducts/>
        <EngKopKorilgan/>
        <Kopsotilgan/>
        <ProductTypes/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home