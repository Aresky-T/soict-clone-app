import React, { useState } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import bannerImg from "../../assets/imgs/banner.png";
import { RiArrowDownSLine } from "react-icons/ri";
import SubMenu from "../../components/navbar/SubMenu";
import SidebarMenu from "../../components/sidebar";
import { FiMenu } from "react-icons/fi";

const menu = [
  { name: "Home", path: APP_ROUTES.HOME, position: "left" },
  {
    name: "Committees",
    icons: <RiArrowDownSLine />,
    position: "left",
    children: [
      {
        name: "Organizing Committee",
        path: APP_ROUTES.ORGANIZING_COMMITTEE,
      },
      {
        name: "Program Committees",
        path: APP_ROUTES.PROGRAM_COMMITTEES,
      },
    ],
  },
  { name: "Speakers", path: "#", position: "left" },
  { name: "Program", path: "#", position: "left" },
  {
    name: "Submission",
    icons: <RiArrowDownSLine />,
    position: "left",
    children: [{ name: "Camera-Ready submission" }],
  },
  { name: "Registration", path: "#", position: "left" },
  {
    name: "Travel information",
    icons: <RiArrowDownSLine />,
    position: "left",
    children: [
      {
        name: "Visa information",
      },
      {
        name: "Conference venue",
      },
      { name: "Accommodation" },
    ],
  },
  { name: "Call for papers", path: "#", position: "left" },
  { name: "Contact", path: APP_ROUTES.CONTACT, position: "left" },
  {
    name: "Previous conferences",
    icons: <RiArrowDownSLine />,
    position: "right",
    children: [
      { name: "SoICT 2022", path: "#" },
      { name: "SoICT 2021", path: "#" },
      { name: "SoICT 2020", path: "#" },
      { name: "SoICT 2019", path: "#" },
      { name: "SoICT 2018", path: "#" },
      { name: "SoICT 2017", path: "#" },
      { name: "SoICT 2016", path: "#" },
      { name: "SoICT 2015", path: "#" },
      { name: "SoICT 2014", path: "#" },
      { name: "SoICT 2013", path: "#" },
      { name: "SoICT 2012", path: "#" },
      { name: "SoICT 2011", path: "#" },
      { name: "SoICT 2010", path: "#" },
    ],
  },
];

const MenuItem = ({ name, icon, path, children }) => {
  const [isActiveSubMenu, setIsActiveSubMenu] = useState(false);

  const handleMouseOver = () => {
    children && setIsActiveSubMenu(true);
  };

  const handleMouseLeave = () => {
    children && setIsActiveSubMenu(false);
  };

  const handleHiddenSubmenu = () => {
    isActiveSubMenu && setIsActiveSubMenu(false);
  };

  return (
    <li
      className="nav-item"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={path || "#"}>
        <span>{name || ""}</span>
        <span>{icon || ""}</span>
      </Link>
      {children && (
        <SubMenu
          items={children}
          isActive={isActiveSubMenu}
          hiddenSubmenu={handleHiddenSubmenu}
        />
      )}
    </li>
  );
};

const MainHeader = (props) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const showSidebar = () => {
    setIsShowSidebar(true);
  };

  const hiddenSidebar = () => {
    setIsShowSidebar(false);
  };

  const renderLeftMenu = () => {
    return menu
      .filter((i) => i.position === "left")
      .map((item, index) => (
        <MenuItem
          name={item.name}
          icon={item.icons}
          path={item.path}
          children={item.children}
          key={index}
        />
      ));
  };

  const renderRightMenu = () => {
    return menu
      .filter((i) => i.position === "right")
      .map((item, index) => (
        <MenuItem
          name={item.name}
          icon={item.icons}
          path={item.path}
          children={item.children}
          key={index}
        />
      ));
  };

  return (
    <header className="main-header" id="main-header">
      <div className="main-header-wrapper">
        <div className="main-header__top">
          <Link to={APP_ROUTES.HOME}>
            <img src={bannerImg || ""} alt="SOICT 2023" />
          </Link>
          <div className="sidebar-container">
            <div className="sidebar-icon">
              {!isShowSidebar && (
                <button onClick={showSidebar}>
                  <FiMenu />
                </button>
              )}
            </div>
            <SidebarMenu
              menu={menu}
              hiddenSidebar={hiddenSidebar}
              isShowSidebar={isShowSidebar}
            />
          </div>
        </div>
        <div className="main-header__bottom">
          <div className="nav-container container">
            <ul className="nav left">{renderLeftMenu()}</ul>
            <ul className="nav right">{renderRightMenu()}</ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
