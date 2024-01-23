import React from "react";
import MainHeader from "./header";
import MainFooter from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <MainHeader />
      <main className="main-body" id="main-body" role="main">
        <div className="content-area" id="main-content">
          <Outlet />
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default Layout;
