const path = require('path');
const config = require('./data/siteConfig');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.authorName,
    description: config.siteDescription,
    ...config
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: 'content/posts'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: 'content/pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: 'content/images'
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`)
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 940,
              linkImagesToOriginal: false,
              withWebp: true,
              showCaptions: true,
              quality: 100
            }
          },
          { resolve: 'gatsby-remark-prismjs' },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' }
          // { 헤더에 링크거는 것은데 필요없는 것 같아서 제거
          //   resolve: 'gatsby-remark-autolink-headers'
          // }
        ]
      }
    },
    // Reminder (https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-509405867)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
        options: {
          tableOfContents: {
            heading: null,
            maxDepth: 6
          }
          // maxWidth: 940,
          // showCaptions: true,
          // markdownCaptions: true
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.pathPrefix,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: config.display,
        icon: config.icon
      }
    },
    // https://www.gatsbyjs.org/docs/themes/converting-a-starter/#transpiling-your-theme-with-webpack
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-starter-morning-dew']
      }
    },
    // Add
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        sitemapSize: 10000,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ['/content/_draft', `/content/_todo`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            };
          })
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Pulsewings's RSS Feed"
          }
        ]
      }
    }
  ]
};
