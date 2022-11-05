import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import LOGO from "./images/logo.JPG";

function Header() {
  const [{ basket, user }] = useStateValue();

  //sign out
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src={LOGO} alt="Shawtee logo" />
      </Link>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionlineone">
              Hey {!user ? "Shawty" : user.email}
            </span>
            <span className="header__optionlinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">Account</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="basket">
            <ShoppingBasketIcon />
            <span className="header__optionlinetwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
