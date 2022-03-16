import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = () => {
  const angleDaily = true ? faAngleUp : faAngleDown;
  return (
    <div>
      <div className="dropdown__header">
        <h3>Daily</h3>
        <FontAwesomeIcon icon={angleDaily} className="close__header" />
      </div>
      <ul>
        <li>test</li>
      </ul>
      {/* <div className="dropdown__header">
        <h3>Sports</h3>
      </div>
      <ul>
        <li>test</li>
      </ul> */}
    </div>
  );
};

export default DropDownMenu;

// Workflow DropdownMenu section:
//  1. Create two divs with header and li items
//  2. Style li items and header
//  3. onCLick() function to toggle li of div
//  4. Ensure that when clicked on heading div1 li div2 should collapse
