import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

const NotificationBar = ({ notifNum }) => {
  const [hideNotif, setHideNotif] = useState(true);

  return (
    <div className="user-bell">
      <div>
        <button onClick={() => setHideNotif(!hideNotif)}>
          {notifNum > 0 && (
            <div className="notifications" title="Notifications">
              <span>{notifNum}</span>
            </div>
          )}

          <FontAwesomeIcon icon={faBell} title="Notifications" />
        </button>
      </div>
      <div className={`notification-list ${hideNotif ? "hidden" : "shown"}`}>
        <button
          className="close-notifications"
          onClick={() => setHideNotif(true)}
        >
          <FontAwesomeIcon icon={faWindowClose} title="Close" />
        </button>
        {
          <>
            <div className="notification-list-item">
              <div className="notification-list-image"></div>
              <p>A new PHP course was released today!</p>
            </div>
            <div className="notification-list-item">
              <div className="notification-list-image"></div>
              <p>A new PHP course was released today!</p>
            </div>
            <div className="notification-list-item">
              <div className="notification-list-image"></div>
              <p>A new PHP course was released today!</p>
            </div>
            <div className="notification-list-item">
              <div className="notification-list-image"></div>
              <p>A new PHP course was released today!</p>
            </div>
            <div className="notification-list-item">
              <div className="notification-list-image"></div>
              <p>A new PHP course was released today!</p>
            </div>
          </>
        }
        {notifNum < 1 && <p>No new notifications</p>}
      </div>
    </div>
  );
};

export default NotificationBar;
