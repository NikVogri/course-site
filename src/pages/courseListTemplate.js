import React from "react";

// components import
import Layout from "../components/layout";
import SEO from "../components/seo";

// sections import
import Offers from "../components/offers";

import Spacer from "../components/spacer";
import Card from "../components/card";
import CourseHero from "../components/coursehero";
import Container from "react-bootstrap/Container";

// TEMP DATA
import heroSvg from "../images/course-hero/front-dev-hero.svg";
const tempData = {
  title: "Front-end development",
  subtitle: "Start your programming journey here",
  svgImage: "front-end.svg",
  courseCount: 3,
  courses: [
    {
      img: "",
      title: "HTML & CSS From Scratch",
      description:
        "Learn the basics of HTML, CSS and create your very first website from scratch!",
      length: 11,
      leactures: 3,
      level: "Begginer",
      rating: 3,
      ratingCount: 2321,
      creator: "freeCodeCamp.org",
      creatorImg: "freeCodeCamp.png",
    },
    {
      img: "",
      title: "Javascript Crash Course For Begginers",
      description:
        "In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.",
      length: 2,
      leactures: 3,
      level: "Begginer",
      rating: 4,
      ratingCount: 35753,
      creator: "Traversy Media",
      creatorImg: "traversy-media.png",
    },
    {
      img: "",
      title:
        "The 2019 Frontend Developer Crash Course - HTML & CSS Tutorial for Beginners",
      description:
        "Welcome to this lengthy crash course to Frontend Development here in 2019. This course assumes you have never touched HTML, CSS or JavaScript. ",
      length: 4,
      leactures: 5,
      level: "Begginer",
      rating: 0.5,
      ratingCount: 132,
      creator: "DesignCourse",
      creatorImg: "design-course.png",
    },
  ],
};

const courseListTemplate = () => {
  return (
    <Layout className="courses">
      <SEO title="Home" />
      <CourseHero
        title={tempData.title}
        subtitle={tempData.subtitle}
        img={heroSvg}
      />
      <Container>
        <Spacer space="2" />
        <h3>Featured courses (3)</h3>
        <Spacer space="1" />
        <section className="courses-list">
          {tempData &&
            tempData.courses.map(data => (
              <Card size="xlg" key={data.title} course={data} />
            ))}
        </section>
      </Container>
      <Spacer space="2" />
    </Layout>
  );
};

export default courseListTemplate;
