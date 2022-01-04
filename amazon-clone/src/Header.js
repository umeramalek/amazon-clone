import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className = 'header'>
            <img className= "header_logo"  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className="header__search">
                <input className="header__input" type="text"></input>
                {/* Logo */}
            </div>
        </div>
    )
}

export default Header
