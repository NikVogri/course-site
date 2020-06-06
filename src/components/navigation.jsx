import React, { useState, useEffect } from "react";

import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PlaceholderPerson from "../images/placeholder-person.jpg";
import NotificationBar from "./notificationBar";

import { connect } from "react-redux";
import useLocalStorage from "../hooks/useLocalStorage";

import { loginUserFromLocal } from "../redux/actions/actionCreator";

// auth
import firebase from "../firebase/firebase";

const Navigation = ({
  siteTitle,
  userName,
  isLoggedIn,
  loginUserFromLocal,
}) => {
  const [navOpen, setNavOpeN] = useState(false);
  const [notifNum, setNotifNum] = useState(0);

  const { removeFromLocalStorage, getFromlocalStorage } = useLocalStorage();

  let width;

  if (typeof window !== `undefined`) {
    width = window.innerWidth;
  }

  useEffect(() => {
    checkIfUserIsSignedIn();
  }, []);

  const checkIfUserIsSignedIn = async () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const userData = getFromlocalStorage("user");
        loginUserFromLocal(userData);
        if (userData) {
        } else {
          firebase.auth().signOut();
        }
      } else {
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
    firebase.auth().signOut();
    removeFromLocalStorage("user");
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
          <ul>
            <NotificationBar notifNum={notifNum} />
            <li className="user-profile" title="User">
              <img
                src={PlaceholderPerson}
                className="user-profile--image"
                alt="avatar"
                title="Profile image"
              />
              {userName ? userName : "User"}
            </li>
            {
              // <li className="navigation-list-item">
              //   <Link to="/courseTemplate">DEV: video template</Link>
              // </li>
            }
            <li className="navigation-list-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="navigation-list-item">
              <Link to="/my-courses">My Courses</Link>
            </li>
            <li className="navigation-list-item">
              <button className="btn-reset" onClick={signOutHandler}>
                Sign out
              </button>
            </li>
            <li className="navigation-footer">
              <span>
                Created with
                <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> in
                Slovenia
              </span>
              <span>
                Copyright {siteTitle} &copy; {new Date().getFullYear()}
              </span>
            </li>
          </ul>
        )}

        {/* 
        /////
        //IF USER IS --NOT-- LOGGED IN DISPLAY THIS!! 
        ///// */}
        {!isLoggedIn && (
          <ul className="unauthenticated">
            <li className="item-left">
              <Link to="/courses/all">View Courses</Link>
            </li>
            <li>
              <div className="link-container">
                <Link to="/login">Log in</Link>
                <Link to="/register" className="btn btn-signup">
                  Sign Up
                </Link>
              </div>
            </li>
            <li className="navigation-footer">
              <span>
                Created with
                <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> in
                Slovenia
              </span>
              <span>
                Copyright {siteTitle} &copy; {new Date().getFullYear()}
              </span>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  userName: state.user.userName,
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = {
  loginUserFromLocal,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
