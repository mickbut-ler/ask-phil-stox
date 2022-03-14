import React from "react";
import Slider from "./Slider";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <div className="header__section">
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
