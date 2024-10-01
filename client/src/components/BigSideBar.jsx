import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../pages/DashboardLayout";


const BigSideBar = () => {

 const { showSideBar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <img
              src="/src/assets/images/logo.svg"
              alt="jobify"
              className="logo"
            />
          </header>
          <NavLinks isBigSideBar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSideBar;
