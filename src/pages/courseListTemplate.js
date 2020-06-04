import React, { useState, useEffect } from "react";

// components import
import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

// sections import
import Spacer from "../components/spacer";
import Card from "../components/card";
import CourseHero from "../components/coursehero";
import Container from "react-bootstrap/Container";
import ViewAs from "../components/viewas";

import Modal from "../components/modal/modal";
import CourseStart from "../components/modal/coursestart";

import firebase from "../components/auth/firebase";
import useLocalStorage from "../hooks/useLocalStorage";

// TEMP DATA
import heroSvg from "../images/course-hero/front-dev-hero.svg";

const CourseListTemplate = ({ pageContext }) => {
  const [viewAs, setViewAs] = useState("grid");
  const [displayModal, setDisplayModal] = useState(false);
  const [courseData, setCourseData] = useState({});
  const [courseList, setCourseList] = useState([]);

  const courseClickHandler = courseData => {
    setCourseData(courseData);
    setDisplayModal(true);
  };

  const { getFromlocalStorage } = useLocalStorage();

  const { data: courses, info } = pageContext;

  useEffect(() => {
    setCourseList(courses);
  }, []);

  const addToUserCoursesHandler = async (courseId, slug) => {
    // check if user is signed in
    const checkIfSignedIn = await firebase.auth().currentUser;

    let userLocal;
    if (!checkIfSignedIn) {
      return navigate(`/course/${slug}`);
    } else {
      userLocal = getFromlocalStorage("user");
    }

    // get reference to user
    const user = await firebase
      .database()
      .ref("users/" + userLocal.id)
      .once("value");

    // get user coures list
    let courseListDb = await user.val().courses;

    // check if course list exists, if not then create one
    if (!courseListDb) {
      await firebase
        .database()
        .ref("users/" + userLocal.id)
        .update({
          courses: [{ courseId, watched: [] }],
        });
    } else {
      // check if course is already in array
      if (!courseListDb.some(e => e.courseId === courseId)) {
        courseListDb.push({ courseId, watched: [] });
        await firebase
          .database()
          .ref("users/" + userLocal.id)
          .update({
            courses: courseListDb,
          });
      }
    }

    navigate(`/course/${slug}`);
  };

  return (
    <Layout className="courses" noFooter>
      <SEO title="Home" />
      <CourseHero
        title={`${info && info.title}`}
        subtitle={`${info && info.subtitle}`}
        img={heroSvg}
      />
      <Modal show={displayModal} hideModal={() => setDisplayModal(false)}>
        {displayModal && (
          <CourseStart
            img={courseData.courseImage.file.url}
            slug={courseData.courseSlug}
            title={courseData.courseTitle}
            id={courseData.id}
            description={courseData.courseDescription.courseDescription}
            addToUserCourses={addToUserCoursesHandler}
          />
        )}
      </Modal>
      <Container>
        <Spacer space="2" />
        <h3>Featured courses ({courseList.length})</h3>
        {!courses || courses.length < 1 ? <h4>No courses found</h4> : ""}
        <ViewAs view={viewAs} setView={setViewAs} />
        <Spacer space="1" />
        <section className="courses-list">
          {courseList.map(({ node }) => (
            <Card
              key={node.contentful_id}
              size="xlg"
              list={viewAs === "list" ? true : false}
              course={node}
              click={() => courseClickHandler(node)}
            />
          ))}
        </section>
      </Container>
      <Spacer space="2" />
    </Layout>
  );
};

export default CourseListTemplate;
