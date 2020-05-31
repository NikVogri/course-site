/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const ytlist = require("youtube-playlist");
const path = require("path");
const { YouTube } = require("popyt");
const youtube = new YouTube("AIzaSyAKj6_jLy8KeRuqU5h05c-AUesWDqIrIoY");

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
          }
        }
      }
    }
  `);

  // MOVE THIS TO COMPONENT !!!
  // MOVE THIS TO COMPONENT !!!
  // MOVE THIS TO COMPONENT !!!
  // MOVE THIS TO COMPONENT !!!

  // check if course is a single video or a playlist
  data.allContentfulCourses.edges.forEach(async ({ node }) => {
    // check if playlist
    if (node.courseVideoType === "Playlist") {
      // fetch all playlist urls
      const url = `${node.courseLink}`;
      ytlist(url, ["id", "name"]).then(
        res => (node.coursePlaylist = res.data.playlist)
      );

      createPage({
        path: `/course/${node.courseSlug}`,
        component: path.resolve("./src/pages/courseTemplate.js"),
        context: {
          data: node,
        },
      });
    }
    //  else if (node.courseVideoType === "Video") {
    //   const id = node.courseLink.split("=")[1];
    //   console.log(id);
    //   // const name = await youtube.getVideo(id).data.snippet.title;
    //   // console.log(name);
    //   // node.coursePlaylist = [{ id, name }];
    // }
  });

  // site info
  const siteInfo = {
    title: "Front-end development",
    subtitle: "Start your programming journey here",
  };
  createPage({
    path: `/courses/front-web-dev`,
    component: path.resolve("./src/pages/courseListTemplate.js"),
    context: {
      data: data.allContentfulCourses.edges,
      info: siteInfo,
    },
  });
};
