import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";



const SmallSideBar = () => {
  const {showSideBar, toggleSideBar} = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <img
              src="/src/assets/images/logo.svg"
              alt="jobify"
              className="logo"
            />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
   
};
export default SmallSideBar;
