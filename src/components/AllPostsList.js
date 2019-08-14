import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import AllPostsListItem from './AllPostsListItem';

const TagTitleLink = styled(Link)`
  color: #555;
`;

// 내가 추가
class AllPostsList extends React.Component {
  render() {
    const { posts, siteTags } = this.props;

    const H2Style = {
      margin: '30px 7px 15px 7px'
    };

    const getFilteredPosts = (posts, tag) => {
      return posts.filter(post => post.node.frontmatter.tags.indexOf(tag) > -1);
    };

    const getPostsByTag = (posts, tag) => {
      return (
        <Fragment>
          <h2 style={H2Style}>
            <TagTitleLink to={`/tags/${tag}`}>
              {tag} ({getFilteredPosts(posts, tag).length})
            </TagTitleLink>
          </h2>
          {getFilteredPosts(posts, tag).map(post => {
            const props = {
              title: post.node.frontmatter.title,
              excerpt: post.node.excerpt,
              slug: post.node.frontmatter.slug,
              date: post.node.frontmatter.date,
              language: post.node.frontmatter.language || 'fr',
              tags: post.node.frontmatter.tags || []
            };
            return <AllPostsListItem key={props.slug} {...props} />;
          })}
        </Fragment>
      );
    };

    return (
      <Fragment>
        {siteTags.map(tag => {
          return getPostsByTag(posts, tag);
        })}
      </Fragment>
    );
  }
}
export default AllPostsList;
