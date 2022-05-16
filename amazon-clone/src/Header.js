import React from 'react'
import './Header.css'
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider'


function Header() {

    const [{basket,user }, dispatch] = useStateValue();

    return (
        <div className = "header">
            <Link to="/">
            <img className= "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>


            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                {/* <SearchIcon className="header__searchIcon" /> */}
            </div>

            <div className="header__nav">

                <Link to='/login'>
                    <div className="header__option"> 
                        <span className="header__optionOne"> Hello Guest</span>
                        <span className="header__optionTwo"> Sign In</span>
                    </div>
                </Link>
                
                <div className="header__option">  
                <span className="header__optionOne"> Returns</span>
                <span className="header__optionTwo"> & Orders</span>
                </div>
                
                <div className="header__option"> 
                <span className="header__optionOne"> Your </span>
                <span className="header__optionTwo"> Prime </span>
                </div>

            <Link to="/checkout">
                <div className="header__shoppingCart">
                    {/* <ShoppingCartIcon /> */}
                    <p>Cart</p>
                    <span className="header__optionTwo header__cartCount">{basket?.length}</span>
                    {/* the question mark is optional chaining (if you dont have the correct value, it will handle the error without freakign out) */}
                </div>
            </Link>

            </div>

        </div>
    )
}

export default Header


