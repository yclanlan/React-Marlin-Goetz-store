import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import { Link } from "react-router-dom";
import { useStateValue } from "../communicate/StateProvider";
import { auth } from "../database/firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {

      dispatch({
        type: 'SIGN_OUT'
      });

      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.malinandgoetz.com/media/logo/default/MG_Logo_NY_2022.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__category">
      <Link to='/order'>
          <div className="header__option">
        
            <span >face</span>
          </div>
      </Link>

      <Link to='/order'>
          <div className="header__option">
           
            <span >body</span>
          </div>
      </Link>

      <Link to='/order'>
          <div className="header__option">
          
            <span >fragrance</span>
          </div>
      </Link>

      <Link to='/order'>
          <div className="header__option">
           
            <span >candles</span>
          </div>
      </Link>
      </div>



      <div className="header__nav">

        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/order'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        



        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketOutlinedIcon  />
            <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
