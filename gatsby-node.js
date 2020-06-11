/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const ytpl = require("ytpl");
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
            createdAt
            id
          }
        }
      }
    }
  `);

  await data.allContentfulCourses.edges.forEach(async ({ node }, index) => {
    // check if playlist
    if (node.courseVideoType === "Playlist") {
      // fetch all playlist videos
      const url = `${node.courseLink}`;
      const options = {
        limit: 100,
      };

      await ytpl(url, options, function (err, playlist) {
        if (err) throw err;
        node.coursePlaylist = playlist.items;
        node.courseVideoLength = node.coursePlaylist.length;
        // extract time from playlist
        let durationTotal = 0;
        playlist.items.forEach((el, index) => {
          if (el.duration) {
            const [minutes, seconds] = el.duration.split(":");
            durationTotal += parseInt(minutes * 60) + parseInt(seconds);
          }
          if (el.title === "[Private video]") {
            playlist.items.splice(index, 1);
          }
        });

        node.courseLength = Math.ceil(durationTotal / 3600);
        durationTotal = 0;
      });
      if (node.courseLength < 1) {
        console.log(
          `${node.title} was removed because there was no playlist provided.`
        );
        data.allContentfulCourses.edges.splice(index, 1);
      }
    } else if (node.courseVideoType === "Video") {
      // if there is a single video then just send the id and name of that video.
      const id = node.courseLink.split("=")[1]; // gets video id from youtube url
      node.coursePlaylist = [
        {
          title: node.courseTitle,
          id,
        },
      ];
    }

    // check if course is older than 2 months
    const createdAt = node.createdAt;
    const createdAtTwoMonths = new Date(createdAt).getMonth() + 2;

    if (createdAtTwoMonths > new Date().getMonth()) {
      node.new = true;
    } else {
      node.new = false;
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

// FIREBASE BUILD FIX
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (
        context,
        request,
        callback
      ) {
        const regex = /^@?firebase(\/(.+))?/;
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, "umd " + request);
        }
        callback();
      }),
    });
  }
};
