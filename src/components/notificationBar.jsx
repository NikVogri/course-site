import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
import {
  faWindowClose,
  faCheckCircle,
  faBell,
} from "@fortawesome/free-regular-svg-icons";

const NotificationBar = ({ notifNum }) => {
  const [hideNotif, setHideNotif] = useState(true);

  const notificationHandler = () => {
    // clear notifications
  };

  return (
    <div className="user-bell">
      <div>
        <button onClick={() => setHideNotif(!hideNotif)}>
          {notifNum > 0 && (
            <div
              className={`notifications ${notifNum < 1 ? "empty" : ""}`}
              title="Notifications"
            >
              <span className="notification-number">{notifNum}</span>
            </div>
          )}

          <FontAwesomeIcon icon={faBell} title="Notifications" />
        </button>
      </div>
      <div className={`notification-list ${hideNotif ? "hidden" : "shown"}`}>
        {
          <>
            <div className="notification-header">
              <span>
                Notifications
                <button
                  className="clear-notifications"
                  title="Clear notifications"
                  onClick={notificationHandler}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
              </span>
              <button
                className="close-notifications"
                onClick={() => setHideNotif(true)}
              >
                <FontAwesomeIcon icon={faWindowClose} title="Close" />
              </button>
            </div>
            {/* <div className="notification-list-item">
              <div className="notification-list-image"></div>
              <p>A new PHP course was released today!</p>
            </div> */}
          </>
        }
        {notifNum < 1 && <p>No new notifications</p>}
      </div>
    </div>
  );
};

export default NotificationBar;
