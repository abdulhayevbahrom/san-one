import React, {useState} from "react";
import "./Header.css";
import cart from "../../assets/cart.png";
import { NavLink } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import hdr_logo2 from "../../assets/hdr_logo_orange.png";
import {products} from '../../data/products'

function Header({ bg, logo }) {
  const [searchValue,setSearchValue] = useState('')

  const searched  = products.filter(({name})=>name.toLowerCase()===searchValue.toLowerCase()).slice(0,6)

  return (
    <div
      className="header"
      id="hdr"
      style={{ backgroundColor: bg ? bg : "#fff" }}
    >
      <Link to='/'>
        <img src={logo ? logo : hdr_logo2} alt="Logo" />
      </Link>
      <div className="header_links">
        <NavLink
          to="/catalog"
          className="header_links_item"
          activeStyle={{ textDecoration: "underline", color: "#DE821D" }}
        >
          KATALOG
        </NavLink>
        <NavLink
          to="/about"
          className="header_links_item"
          activeStyle={{ textDecoration: "underline", color: "#DE821D" }}
        >
          BIZ HAQIMIZDA
        </NavLink>

        <div className="header_searchbar">
          <input type="text" autoFocus onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} /> <GrSearch className="hdr_search" />
          {searched.length === 0 ? <></>:
          <div className="searched">
            {searched.map((item,index)=>
              <Link key={index} to={`products/${item.id}`}>{item.name}</Link>
            )}
          </div>
          }
        </div>

        <div className="header_language">
          <p>UZ</p>
        </div>
        <Link to="/cart" className="header_cart">
          <img src={cart} alt="" />
        </Link>
        <Link to="/profil" className="header_profil">
          <BiUser />
        </Link>
      </div>
    </div>
  );
}

export default Header;
