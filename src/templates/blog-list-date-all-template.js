import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Wrapper from '../components/Wrapper';
import Hero from '../components/Hero';
import AllDatePostsList from '../components/AllDatePostsList';
import SEO from '../components/SEO';

class BlogList extends React.Component {
  render() {
    const { title, description, siteYears } = this.props.data.site.siteMetadata;
    const posts = this.props.data.posts.edges;
    const { pageContext } = this.props;

    return (
      <Layout location={this.props.location}>
        <SEO />
        <Hero title={title} subTitle={description} />

        <Wrapper>
          <AllDatePostsList posts={posts} siteYears={siteYears} />
        </Wrapper>
      </Layout>
    );
  }
}

// 아래 allMarkdownRemark 부분은 원래 allMdx 였다.
export default BlogList;

export const pageQuery = graphql`
  query allDateBlogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        siteYears
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
`;
