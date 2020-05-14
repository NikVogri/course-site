import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ siteTitle }) => {
  const [navOpen, setNavOpeN] = useState(false);

  const navToggle = () => {
    setNavOpeN(!navOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="brand">
          <Link to="/">{siteTitle}</Link>
        </div>
        <button className="burger-menu btn-reset" onClick={navToggle}>
          <span className="burger"></span>
        </button>
      </div>
      <div className={`nav-list ${navOpen ? "show" : "hidden"}`}>
        <ul>
          <li className="user_profile">
            <div className="user_profile--image"></div>
            Nickolas
          </li>
          <li className="navigation-list-item">
            <Link to="videoTemplate">DEV: video template</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="profile">Profile</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="profile">Courses</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="profile">Sign out</Link>
          </li>
          <li className="navigation-footer">
            <span>
              Created with{" "}
              <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> in
              Slovenia
            </span>
            <span>
              Copyright {siteTitle} &copy; {new Date().getFullYear()}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
