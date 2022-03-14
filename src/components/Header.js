import React from "react";
import Slider from "./Slider";
import NavigationMenu from "./NavigationMenu";

import "../stylesheets/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let clicked = false;
  let burgerMenu = (clicked = true ? (
    <FontAwesomeIcon icon={faBars} />
  ) : (
    <FontAwesomeIcon icon={faXmark} />
  ));

  // const logo

  return (
    <div className="">
      <div className="header__section">
        <div className="header__left">
          {burgerMenu}
          <img src="stox_logo.png" className="stox__logo" alt="" />
        </div>
        <div className="header__right">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
      </div>

      <Slider />
      <NavigationMenu />
    </div>
  );
};

export default Header;

// Workflow header section:
//  1. Set height and with of the header and set all div elements:
//    1.1 Burger menu, STOX logo, shopping basket(FontAwesome)
//  2. Organize div
//  3. Burger menu when clicked show X menu
//  4. When clicked is active show "Slider & NavigationMenu"
