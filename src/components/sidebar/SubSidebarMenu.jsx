import React from "react";
import { Link } from "react-router-dom";

const SubSidebarMenu = ({ items, isActive, hiddenSubmenu }) => {
  return (
    <ul className={`sub-sidebar-menu ${isActive ? "active" : ""}`}>
      {items.map((item, index) => (
        <li className="sub-sidebar-menu-item" key={index}>
          <Link to={item?.path || ""} onClick={hiddenSubmenu} key={index}>
            {item?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubSidebarMenu;
