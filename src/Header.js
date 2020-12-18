import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className= "header">
            <Link to="/">
            <img className="header_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="amazon logo"/></Link>
            <div className= "header_search">
                <input className= "header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLine1">Hello user</span>
                    <span className="header_optionLine2">Sign In</span>
                </div>
                <div className="header_option">
                <span className="header_optionLine1">Returns</span>
                    <span className="header_optionLine2">& orders</span>
                </div>
                <div className="header_option">
                <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLine2 header_basketCount">0</span>
                </div></Link>

            </div>
        </div>
        
    )
}

export default Header
