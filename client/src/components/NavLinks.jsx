import{useDashboardContext} from '../pages/DashboardLayout';
import links from '../utils/Links';
import { NavLink } from "react-router-dom";

const NavLinks = ({isBigSideBar}) => {
 const {user, toggleSideBar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (role !== "admin" && path === "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSideBar? null :toggleSideBar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}
export default NavLinks