module.exports = {
  siteMetadata: {
    title: `Developer Portal (Couchbase)`,
    name: `Couchbase`,
    siteUrl: `https://dev.couchbase.com`,
    description: `A Couchbase developer portal for technologies surrounding our SDKs`,
    hero: {
      heading: `Find your path!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/couchbase`,
      },
      {
        name: `github`,
        url: `https://github.com/couchbase`,
      },
      {
        name: `github`,
        url: `https://github.com/couchbaselabs`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/couchbase/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
},
    },
  ],
};
