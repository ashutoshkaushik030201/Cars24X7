import React from "react";
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {

  useEffect(() => {
    let moreButton = document.getElementById("button-more")
    let moreMenu = document.getElementById("menu-more")
    moreMenu?.setAttribute("style", "transform: translateX(calc(-200px + " + moreButton?.offsetWidth + "px))")
  }, [])

  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo"></div>
        <div className="btnLogo">CARS24X7</div>
      </div>

      <form className="search-bar">
        <input type="text" placeholder="Search Cars or Brands" />
        <button className="search-btn"><SearchIcon className="search-icon" /></button>
      </form>

      <div className="nav-section">
        <div className="nav-section-items more">
          <div className="more-button" id="button-more">
            <div>
              More
            </div>
            <div>
              <ArrowDropDownIcon />
            </div>
          </div>
          <div className="more-menu" id="menu-more">
            <div className="more-menu-items">
              About Us
            </div>
            <div className="more-menu-items">
              Contact Us
            </div>
            <div className="more-menu-items">
              FAQ's
            </div>
            <div className="more-menu-items">
              How It Works
            </div>
            <div className="more-menu-items">
              Value Your Car
            </div>
          </div>
        </div>

        <div className="nav-section-items profile">
          <div className="user-details-button">
            <div className="username-container">
              <div className="username">
                Hello, Sign In
              </div>
              <div className="username-bottom">
                Account
              </div>
            </div>
            <AccountCircleIcon className="profile-icon" />
          </div>

          <div className="user-details-menu">
            <div className="user-details-menu-items">
              Profile
            </div>
            <div className="user-details-menu-items">
              Wishlist
            </div>
            <div className="user-details-menu-items">
              Login/Signup
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
