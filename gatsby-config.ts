import type { GatsbyConfig } from "gatsby";
import * as dotenv from 'dotenv';

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `BrianMorrison.me`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": process.env.WP_URL,
      auth: {
        htaccess: {
          username: process.env.WP_USERNAME,
          password: process.env.WP_PASSWORD
        }
      },
      html: {
        useGatsbyImage: false,
      },
      develop: {
        hardCacheMediaFiles: true,
      },
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", 'gatsby-plugin-postcss', {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
