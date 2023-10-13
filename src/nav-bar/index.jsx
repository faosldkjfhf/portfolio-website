import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" border-gray-200 bg-gray-900 sticky top-0 z-20 transition-all">
      <div className="flex flex-wrap items-center justify-between p-4">
        <ul
          className="font-medium flex flex-row p-4 md:p-0 mt-4 border 
                    rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0
                     bg-slate-800 md:bg-slate-900
                     border-slate-700"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
