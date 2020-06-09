import React, { useState, useEffect } from "react";

import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PlaceholderPerson from "../images/default.jpg";
import NotificationBar from "./notificationBar";

import { connect } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";

import {
  loginUserFromLocal,
  signoutUser,
} from "../redux/actions/actionCreator";

// auth
import firebase from "../firebase/firebase";

const Navigation = ({
  siteTitle,
  userName,
  isLoggedIn,
  loginUserFromLocal,
  signoutUser,
  userImage,
}) => {
  const [navOpen, setNavOpeN] = useState(false);
  const [notifNum, setNotifNum] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const { removeFromLocalStorage, getFromlocalStorage } = useLocalStorage();

  let width;

  if (typeof window !== `undefined`) {
    width = window.innerWidth;
  }

  useEffect(() => {
    checkIfUserIsSignedIn();
  }, []);

  console.log("hello world");

  const checkIfUserIsSignedIn = async () => {
    await firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const userData = getFromlocalStorage("user");
        if (userData) {
          loginUserFromLocal(userData);
        }
      } else if (!user) {
        removeFromLocalStorage("user");
      }
    });
  };

  useEffect(() => {
    width >= 850 ? setNavOpeN(true) : setNavOpeN(false);
  }, [width]);

  const navToggle = () => {
    setNavOpeN(!navOpen);
  };

  const signOutHandler = () => {
    signoutUser();
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
      <div className={`nav-list ${navOpen ? "show" : "hidden"} `}>
        {/* 
        /////
        //IF USER IS LOGGED IN DISPLAY THIS!! 
        ///// */}

        {isLoggedIn && (
          <>
            <ul className="authenticated">
              <li className="navigation-list-item dropdown-courses">
                <button className="btn-reset" to="/my-courses">
                  Courses
                </button>
                <ul className="dropdown-courses-list">
                  <li>
                    <Link to="/courses/frontend">Front end</Link>
                  </li>
                  <li>
                    <Link to="/courses/backend">Back end</Link>
                  </li>
                  <li>
                    <Link to="/courses/mobile">Mobile</Link>
                  </li>
                  <li>
                    <Link to="/courses/all">All</Link>
                  </li>
                </ul>
              </li>
              {/* <NotificationBar notifNum={notifNum} /> */}
              <li className="user-profile" title="User">
                <div className="user-profile-info">
                  <img
                    src={userImage || PlaceholderPerson}
                    className="user-profile--image"
                    alt="avatar"
                    title="Profile image"
                  />
                  Hi,{" "}
                  {userName
                    ? userName.charAt(0).toUpperCase() + userName.slice(1)
                    : "User"}
                </div>
                <ul className="user-dropdown">
                  <li className="navigation-list-item navigation-list-item--profile">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="navigation-list-item navigation-list-item--signout">
                    <button className="btn-reset" onClick={signOutHandler}>
                      Sign out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navigation-footer">
              <span>
                Created with
                <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> in
                Slovenia
              </span>
              <span>
                Copyright {siteTitle} &copy; {new Date().getFullYear()}
              </span>
            </div>
          </>
        )}

        {/* 
        /////
        //IF USER IS --NOT-- LOGGED IN DISPLAY THIS!! 
        ///// */}
        {!isLoggedIn && (
          <>
            <ul className="unauthenticated">
              <li className="item-left dropdown-courses">
                <button className="btn-reset" to="/courses/all">
                  Courses
                </button>
                <ul className="dropdown-courses-list">
                  <li>
                    <Link to="/courses/frontend">Front end</Link>
                  </li>
                  <li>
                    <Link to="/courses/backend">Back end</Link>
                  </li>
                  <li>
                    <Link to="/courses/mobile">Mobile</Link>
                  </li>
                  <li>
                    <Link to="/courses/all">All</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="link-container">
                  <Link to="/login">Log in</Link>
                  <Link to="/register" className="btn btn-signup">
                    Sign Up
                  </Link>
                </div>
              </li>
            </ul>
            <div className="navigation-footer">
              <span>
                Created with
                <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> in
                Slovenia
              </span>
              <span>
                Copyright {siteTitle} &copy; {new Date().getFullYear()}
              </span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  userName: state.user.userName,
  userImage: state.user.userImage,
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = {
  loginUserFromLocal,
  signoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
