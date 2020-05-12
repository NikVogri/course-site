import React, { useState } from "react";
import { Link } from "gatsby";

export default function Navigation({ siteTitle }) {
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
        <div className="burger-menu" onClick={navToggle}>
          <span className="burger"></span>
        </div>
      </div>
      <div className={`nav-list ${navOpen ? "show" : "hidden"}`}>
        <ul>
          <li className="user_profile">
            <div className="user_profile--image"></div>
            Nickolas
          </li>
          {/* <li className="navigation-list-item">
            <Link to="login">Login</Link>
          </li> */}
          <li className="navigation-list-item">
            <Link to="profile">Profile</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="profile">Courses</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="profile">Sign out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
