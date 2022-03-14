import React from "react";
import Slider from "./Slider";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <div className="nav">
      <Slider />
      <NavigationMenu />
    </div>
  );
};

export default Header;
