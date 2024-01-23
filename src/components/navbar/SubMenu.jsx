import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ items, isActive, hiddenSubmenu }) => {
  return (
    <ul className={`sub-menu ${isActive ? "active" : ""}`}>
      {items.map((item, index) => (
        <li className="sub-menu-item" key={index}>
          <Link to={item?.path || ""} onClick={hiddenSubmenu} key={index}>
            {item?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
