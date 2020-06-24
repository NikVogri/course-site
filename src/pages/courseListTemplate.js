import React, { useState, useEffect } from "react";

// components import
import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

// sections import
import Spacer from "../components/spacer";
import Card from "../components/card";
import CourseHero from "../components/coursehero";
import SortCourses from "../components/sortCourses";
import Container from "react-bootstrap/Container";
import ViewAs from "../components/viewas";

import Modal from "../components/modal/modal";
import CourseStart from "../components/modal/coursestart";

// redux
import { connect } from "react-redux";
import { addCourseToUser } from "../redux/actions/actionCreator";

// TEMP DATA
import heroSvg from "../images/course-hero/front-dev-hero.svg";

const CourseListTemplate = ({ pageContext, addCourseToUser }) => {
  const [viewAs, setViewAs] = useState("grid");
  const [displayModal, setDisplayModal] = useState(false);
  const [courseData, setCourseData] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [info, setInfo] = useState({});

  const courseClickHandler = courseData => {
    setCourseData(courseData);
    setDisplayModal(true);
  };

  useEffect(() => {
    setCourseList(pageContext.data);
    setInfo(pageContext.info);
  }, []);

  const addToUserCoursesHandler = async (courseId, slug) => {
    await addCourseToUser(courseId);
    navigate(`/course/${slug}`);
  };

  return (
    <Layout className="courses" noFooter>
      <SEO title="Home" />
      {/* <CourseHero
        title={`${info && info.title}`}
        subtitle={`${info && info.subtitle}`}
        img={heroSvg}
      /> */}
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
        <Spacer size="md" />
        <SortCourses length={courseList.length} info={info} />
        <Spacer size="sm" />
        {!courseList || courseList.length < 1 ? <h4>No courses found</h4> : ""}
        <ViewAs view={viewAs} setView={setViewAs} />
        {/* <Spacer size="sm" /> */}
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
      <Spacer size="sm" />
    </Layout>
  );
};

const mapDispatchToProps = {
  addCourseToUser,
};

export default connect(null, mapDispatchToProps)(CourseListTemplate);
