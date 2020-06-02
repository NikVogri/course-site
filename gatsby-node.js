/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const ytlist = require("youtube-playlist");
const path = require("path");
//creating all items
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query MyQuery {
      allContentfulCourses {
        edges {
          node {
            courseTitle
            courseLength
            courseAuthor
            contentful_id
            courseDifficulty
            courseDescription {
              courseDescription
            }
            courseAuthorImage {
              file {
                url
              }
            }
            courseImage {
              file {
                url
              }
            }
            courseVideoType
            courseSlug
            courseLink
            courseType
          }
        }
      }
    }
  `);

  data.allContentfulCourses.edges.forEach(async ({ node }) => {
    // check if playlist
    if (node.courseVideoType === "Playlist") {
      // fetch all playlist videos
      const url = `${node.courseLink}`;
      ytlist(url, ["id", "name"]).then(
        // save video id and name to node.
        res => (node.coursePlaylist = res.data.playlist)
      );
    } else if (node.courseVideoType === "Video") {
      // if there is a single video then just send the id and name of that video.
      const id = node.courseLink.split("=")[1]; // gets video id from youtube url
      node.coursePlaylist = [
        {
          name: node.courseTitle,
          id,
        },
      ];
    }

    // create course page
    createPage({
      path: `/course/${node.courseSlug}`,
      component: path.resolve("./src/pages/courseTemplate.js"),
      context: {
        data: node,
      },
    });
  });

  // pages info
  const pageInfo = [
    {
      title: "Front-end development",
      subtitle: "Start your programming journey here",
      url: "frontend",
    },
    {
      title: "Back-end development",
      subtitle: "Start your programming journey here",
      url: "backend",
    },
    {
      title: "Native mobile apps",
      subtitle: "Start your mobile programming journey here",
      url: "mobile",
    },
  ];

  // Create page for each course category(front end, back end...)
  pageInfo.forEach(page => {
    createPage({
      path: `/courses/${page.url}`,
      component: path.resolve("./src/pages/courseListTemplate.js"),
      context: {
        data: data.allContentfulCourses.edges.filter(
          ({ node }) => node.courseType === page.url
        ),
        info: {
          title: page.title,
          subtitle: page.subtitle,
        },
      },
    });
  });

  // Create page for all courses
  createPage({
    path: `/courses/all`,
    component: path.resolve("./src/pages/courseListTemplate.js"),
    context: {
      data: data.allContentfulCourses.edges,
      info: {
        title: "All available courses",
        subtitle: "Check out all available courses!",
      },
    },
  });
};
