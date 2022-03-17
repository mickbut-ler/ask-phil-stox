import React, { useState } from "react";
import Slider from "./Slider";
import DropdownMenu from "./DropdownMenu";

import "../stylesheets/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function magnifyNavbar() {
    setIsClicked(!isClicked);
  }

  const burgerMenu = isClicked ? faXmark : faBars;
  // Check for inline statement
  const dropDownMenu =
    isClicked == false ? null : (
      <div>
        <Slider /> <DropdownMenu />
      </div>
    );

  return (
    <div className="">
      <div className="header__section">
        <div className="header__left">
          <div className="burger__menu">
            <FontAwesomeIcon
              icon={burgerMenu}
              onClick={magnifyNavbar}
              className="close__header"
            />
          </div>
          <img src="stox_logo 1.svg" className="stox__logo" alt="" />
        </div>
        <div className="header__right">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
      </div>
      {dropDownMenu}
    </div>
  );
}

export default Header;

// Workflow header section:
//  1. Set height and with of the header and set all div elements:
//    1.1 Burger menu, STOX logo, shopping basket(FontAwesome)
//  2. Organize div
//  3. Burger menu when clicked show X menu
//  4. When clicked is active show "Slider & NavigationMenu "
