import React from "react";
import PlaylistItem from "./playlistItem";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import firebase from "../firebase/firebase";

const playlist = ({
  playlist,
  currentVideo,
  togglePlaylist,
  url,
  shrink,
  courseId,
}) => {
  const addToWatchedHandler = async (videoId, removeFromWatched) => {
    // get userId
    const { uid } = await firebase.auth().currentUser;

    if (uid) {
      // get reference to user
      const user = await firebase
        .database()
        .ref("users/" + uid)
        .once("value");
      // get all courses
      const courseListDb = await user.val().courses;

      if (removeFromWatched) {
        // remove from watched list
        courseListDb.forEach(async course => {
          if (course.courseId === courseId) {
            await firebase
              .database()
              .ref("users/" + uid)
              .update({
                courses: [
                  {
                    courseId,
                    watched: course.watched.filter(el => el !== videoId),
                  },
                ],
              });
          }
        });
      }

      // find the correct course
      courseListDb.forEach(async course => {
        // if watched is added for the first time
        if (course.courseId === courseId && !course.watched) {
          courseListDb[courseListDb.indexOf(course)] = {
            courseId,
            watched: [videoId],
          };
          await firebase
            .database()
            .ref("users/" + uid)
            .update({
              courses: courseListDb,
            });
          return;
        } else if (course.courseId === courseId && course.watched) {
          // if user added to watch before

          const watchedArr = course.watched;
          if (watchedArr.includes(videoId)) {
            return;
          }

          watchedArr.push(videoId);

          courseListDb[courseListDb.indexOf(course)] = {
            courseId,
            watched: watchedArr,
          };

          await firebase
            .database()
            .ref("users/" + uid)
            .update({
              courses: courseListDb,
            });
        }
      });
    } else {
      return;
    }
  };

  return (
    <section className={`playlist ${shrink ? "shrink" : ""}`}>
      <button
        onClick={togglePlaylist}
        className="playlist-shrink btn-reset"
        title="Shrink"
      >
        <FontAwesomeIcon
          onClick={() => togglePlaylist(true)}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          onClick={() => togglePlaylist(true)}
          icon={faChevronRight}
        />
      </button>
      {playlist &&
        playlist.map(content => {
          return (
            <PlaylistItem
              url={url}
              title={content.title || content.courseTitle}
              videoId={content.id}
              active={currentVideo === content.id}
              key={content.id}
              addToWatched={addToWatchedHandler}
              watched={false}
            />
          );
        })}
    </section>
  );
};

export default playlist;
