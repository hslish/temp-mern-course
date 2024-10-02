import Wrapper from "../assets/wrappers/Navbar";
import {FaAlignLeft} from 'react-icons/fa';
import React from "react";
import {useDashboardContext} from "../pages/DashboardLayout"
import LogoutContainer from "./LogoutContainer"; 
import ThemeToggle from "./ThemeToggle";


const NavBar = () => {
    const {toggleSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <img src="/assets/images/logo.svg" alt="jobify" className="logo" />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default NavBar;
