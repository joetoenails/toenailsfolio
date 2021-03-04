module.exports = {
  siteMetadata: {
    title: "JoeToenails Says Hello",
  },
  pathPrefix: "/toenailsfolio",
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
