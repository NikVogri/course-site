import React, { useState, useEffect } from "react";

import useWindowDimensions from "./hooks/useWindowDimensions";

import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import PlaceholderPerson from "../images/placeholder-person.jpg";

const Navigation = ({ siteTitle }) => {
  const [navOpen, setNavOpeN] = useState(false);
  const [notifNum, setNotifNum] = useState(3);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 850) {
      setNavOpeN(true);
    } else {
      setNavOpeN(false);
    }
  }, [width]);

  const navToggle = () => {
    setNavOpeN(!navOpen);
  };

  console.log(notifNum);
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
      <div
        className={`nav-list ${navOpen ? "show" : "hidden"} ${
          width >= 850 ? "show" : ""
        }`}
      >
        {/* 
        /////
        //IF USER IS LOGGED IN DISPLAY THIS!! 
        ///// */}

        {/* <ul>
          <li className="user-bell">
            {notifNum > 0 && (
              <div className="notifications">
                <span>{notifNum}</span>
              </div>
            )}
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li className="user-profile">
            <img
              src={PlaceholderPerson}
              className="user-profile--image"
              alt="avatar"
            />
            {width >= 850 && "Hi,"} Nickolas
          </li>
          {
            // <li className="navigation-list-item">
            // <Link to="videoTemplate">DEV: video template</Link>
            // </li>
          }
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
        </ul> */}

        {/* 
        /////
        //IF USER IS --NOT-- LOGGED IN DISPLAY THIS!! 
        ///// */}
        <ul>
          <li>
            <div className="link-container">
              <Link to="login">Log in</Link>
              <Link to="register" class="btn btn-signup">
                Sign Up
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
