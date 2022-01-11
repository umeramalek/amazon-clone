import React from 'react'
import './Header.css'
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header() {
    return (
        <div className = "header">
            <img className= "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                {/* <SearchIcon className="header__searchIcon" /> */}
            </div>

            <div className="header__nav">
                
                <div className="header__option"> 
                <span className="header__optionOne"> Hello Guest</span>
                <span className="header__optionTwo"> Sign In</span>
                </div>
                
                <div className="header__option">  
                <span className="header__optionOne"> Returns</span>
                <span className="header__optionTwo"> & Orders</span>
                </div>
                
                <div className="header__option"> 
                <span className="header__optionOne"> Your </span>
                <span className="header__optionTwo"> Prime </span>
                </div>

                <div className="header__shoppingCart">
                    {/* <ShoppingCartIcon /> */}
                    <span className="header__optionTwo header__cartCount">0</span>
                </div>

            </div>

        </div>
    )
}

export default Header


