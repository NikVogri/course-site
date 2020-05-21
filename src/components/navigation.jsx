import React, { useState, useEffect } from "react";

import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PlaceholderPerson from "../images/placeholder-person.jpg";
import NotificationBar from "./notificationBar";

const Navigation = ({ siteTitle }) => {
  const [navOpen, setNavOpeN] = useState(false);
  const [notifNum, setNotifNum] = useState(1);

  let width;

  if (typeof window !== `undefined`) {
    width = window.innerWidth;
  }

  useEffect(() => {
    width >= 850 ? setNavOpeN(true) : setNavOpeN(false);
  }, [width]);

  const navToggle = () => {
    setNavOpeN(!navOpen);
  };
  console.log(navOpen);

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
      <div className={`nav-list ${navOpen ? "show" : "hidden"} `}>
        {/* 
        /////
        //IF USER IS LOGGED IN DISPLAY THIS!! 
        ///// */}

        <ul>
          <NotificationBar notifNum={notifNum} />
          <li className="user-profile" title="User">
            <img
              src={PlaceholderPerson}
              className="user-profile--image"
              alt="avatar"
              title="Profile image"
            />
            {width >= 850 && "Hi,"} Nickolas
          </li>
          {
            // <li className="navigation-list-item">
            //   <Link to="videoTemplate">DEV: video template</Link>
            // </li>
          }
          <li className="navigation-list-item">
            <Link to="profile">Profile</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="courses">Courses</Link>
          </li>
          <li className="navigation-list-item">
            <Link to="signout">Sign out</Link>
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

        {/* 
        /////
        //IF USER IS --NOT-- LOGGED IN DISPLAY THIS!! 
        ///// */}
        {/* <ul>
          <li>
            <div className="link-container">
              <Link to="login">Log in</Link>
              <Link to="register" class="btn btn-signup">
                Sign Up
              </Link>
            </div>
          </li>
          <li className="item-left">
            <Link to="profile">Courses</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navigation;
