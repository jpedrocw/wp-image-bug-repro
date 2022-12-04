// handle self-certificate on source WP
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://sandbox.cnunes.cc/graphql`,
        schema: {
          perPage: 50,
          timeout: 60000,
        },
      },
    },
    /* `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, */
  ],
};
