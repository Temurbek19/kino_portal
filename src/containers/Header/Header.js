import { Link } from "react-router-dom";

import "./Header.scss";

const Header = ({ sidebarState, setSidebarState }) => {
  return (
    <div className="container">
      <div className="header">
        <Link
          to="/"
          onClick={() => setSidebarState("home")}
          className={`link home ${sidebarState === "home" ? "active" : ""}`}
        >
          Home Page
        </Link>
        <Link
          to="/populars"
          onClick={() => setSidebarState("populars")}
          className={`link populars ${
            sidebarState === "populars" ? "active" : ""
          }`}
        >
          Populars Page
        </Link>
        <Link
          to="/topFilms"
          onClick={() => setSidebarState("topFilms")}
          className={`link top-films ${
            sidebarState === "topFilms" ? "active" : ""
          }`}
        >
          Top Films Page
        </Link>
        <Link
          to="/trillerPage"
          onClick={() => setSidebarState("trillerPage")}
          className={`link triller-page ${
            sidebarState === "trillerPage" ? "active" : ""
          }`}
        >
          Triller Page
        </Link>
      </div>
    </div>
  );
};

export default Header;
