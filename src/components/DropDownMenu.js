import React from "react";

import "../stylesheets/dropdown_menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DropdownMenu = () => {
  const angleDaily = true ? faAngleUp : faAngleDown;
  return (
    <div>
      <section>
        <div className="dropdown__header">
          <h3>DAILY</h3>
          <FontAwesomeIcon icon={angleDaily} className="angle__icon" />
        </div>
        <ul>
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
//  4. Ensure that when clicked on heading div1 li div2 should collapse
