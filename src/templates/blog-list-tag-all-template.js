import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import AllPostsList from '../components/AllPostsList'
import SEO from '../components/SEO'

class BlogList extends React.Component {
  render() {
    const { title, description, siteTags } = this.props.data.site.siteMetadata
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO />
        <Hero title={title} subTitle={description} />

        <Wrapper>
          <AllPostsList posts={posts} siteTags={siteTags} />
        </Wrapper>
      </Layout>
    )
  }
}

// 아래 allMarkdownRemark 부분은 원래 allMdx 였다.
export default BlogList

export const pageQuery = graphql`
  query allBlogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        siteTags
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//content/posts//" } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            date(formatString: "YYYY-MM-DD ")
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`
