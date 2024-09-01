import { useState } from "react";

import productData from "../../assets/productData.json";

import "./DropDownMenu.css";

import { useNavigate } from "react-router-dom";

const DropDownMenu = ({ menuHeaderName, menuOptions }) => {
  const [dropDownOpen, setDropDownOpen] = useState("");

  const navigate = useNavigate();

  return (
    <div
      className="dropdown"
      onMouseOver={() => setDropDownOpen("show")}
      onMouseOut={() => setDropDownOpen("")}
    >
      <button
        className="btn dropdown-toggle dropdown-header"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
        onClick={() => navigate(`/catalog/${menuHeaderName}`)}
      >
        {productData.productsDisplayHeader[menuHeaderName]}
      </button>
      <ul
        className={`dropdown-menu ${dropDownOpen} dropdown-menu-options-container`}
      >
        {menuOptions.map((menuOption) => (
          <li
            key={menuOption.optionRef}
            onClick={() => navigate(`/details/${menuOption.optionRef}`)}
          >
            <div className="dropdown-menu-options">{menuOption.optionName}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
