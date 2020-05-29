/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
              fixed {
                base64
              }
            }
            courseImage {
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  `);
  createPage({
    path: `/courses/web-front-end`,
    component: path.resolve("./src/pages/courseListTemplate.js"),
    context: {
      data: data.allContentfulCourses.edges,
    },
  });
};
