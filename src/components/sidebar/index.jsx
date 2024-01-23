import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import SubSidebarMenu from "./SubSidebarMenu";

const MenuBarItem = ({ name, icon, path, children, hiddenSidebar }) => {
  const [isActiveSubMenu, setIsActiveSubMenu] = useState(false);

  const handleHiddenSubmenu = () => {
    isActiveSubMenu && setIsActiveSubMenu(false);
    hiddenSidebar();
  };

  return (
    <li className="sidebar-menu-item">
      <Link
        to={path || "#"}
        onClick={() => {
          setIsActiveSubMenu(!isActiveSubMenu);
          path && hiddenSidebar();
        }}
      >
        <span>{name || ""}</span>
        <span>{icon || ""}</span>
      </Link>
      {children && (
        <SubSidebarMenu
          items={children}
          isActive={isActiveSubMenu}
          hiddenSubmenu={handleHiddenSubmenu}
        />
      )}
    </li>
  );
};

const SidebarMenu = ({ menu, hiddenSidebar, isShowSidebar }) => {
  const renderMenu = () => {
    return menu.map((item, index) => (
      <MenuBarItem
        name={item.name}
        icon={item.icons}
        path={item.path}
        children={item.children}
        hiddenSidebar={hiddenSidebar}
        key={index}
      />
    ));
  };

  return (
    <div className={`sidebar-menu ${isShowSidebar ? "active" : ""}`}>
      <div className="sidebar-menu-close">
        <button onClick={hiddenSidebar}>
          <IoMdClose />
        </button>
      </div>
      <div className="sidebar-menu-main">
        <ul>{renderMenu()}</ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
