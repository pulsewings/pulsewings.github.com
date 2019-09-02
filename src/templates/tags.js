import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import PostsList from '../components/PostsList';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

class Tags extends React.Component {
  render() {
    const pageTitle = `#${this.props.pageContext.tag}`;
    const posts = get(this, 'props.data.posts.edges');

    const itemCount = get(this, 'props.data.posts.pageInfo.itemCount');

    return (
      <Layout location={this.props.location} title={pageTitle}>
        <SEO title={pageTitle} />
        <Hero title={pageTitle} />

        <Wrapper>
          <h1>
            "{this.props.pageContext.tag}" ({itemCount}) 태그 포스트
          </h1>
          <PostsList posts={posts} />
        </Wrapper>
      </Layout>
    );
  }
}

export default Tags;

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
            language
            slug
          }
        }
      }
      pageInfo {
        itemCount
      }
    }
  }
`;
