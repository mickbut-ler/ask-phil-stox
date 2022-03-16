import React, { useState } from "react";

import "../stylesheets/dropdown_menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  const [toggleDaily, setToggleDaily] = useState(false);
  const [toggleSport, setToggleSport] = useState(false);
  console.log(toggleDaily);

  const angleDaily = true ? faAngleUp : faAngleDown;

  // This should be one function
  function toggleDailyItems(e) {
    setToggleDaily(!toggleDaily);
    setToggleSport(false);
  }
  function toggleSportItems(e) {
    setToggleSport(!toggleSport);
    setToggleDaily(false);
  }
  return (
    <div>
      <section>
        <div onClick={toggleDailyItems} className="dropdown__header">
          <h3>DAILY</h3>
          <FontAwesomeIcon icon={angleDaily} className="angle__icon" />
        </div>
        <ul className={toggleDaily ? null : "hide"}>
          <li className="findElement">
            <p className="product__li">SPORT</p>
            <p className="quantity__li">25 products</p>
          </li>
        </ul>
      </section>
      <section>
        <div onClick={toggleSportItems} className="dropdown__header">
          <h3>SPORT</h3>
          <FontAwesomeIcon icon={angleDaily} className="angle__icon" />
        </div>
        <ul className={toggleSport ? null : "hide"}>
          <li>
            <p className="product__li">SPORT</p>
            <p className="quantity__li">25 products</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DropdownMenu;

// Workflow DropdownMenu section:
//  1. Create two divs with header and li items
//  2. Style li items and header
//  3. onCLick() function to toggle li of div
//    3.1 one function plays with two variables toggleDaily and toggleSports
//    3.2 start both false
//    3.3 If toggleDaily == true ToggleSports == false
//    3.4 visa versa
//  4. Ensure that when clicked on heading div1 li div2 should collapse
