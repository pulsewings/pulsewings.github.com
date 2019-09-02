import React, { Fragment } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AllPostsListItem from "./AllPostsListItem";

const TagTitleLink = styled(Link)`
  color: #555;
`;

const AnchorContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-bottom: 15px;

  @media (max-width: 780px) {
    display: inline-block;
  }
`;

const AnchorTitle = styled.li`
  display: inline-block;
  font-size: 16px;
  & > a {
    color: #555;
    padding: 5px 10px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    vertical-align: middle;
    background-color: #fafafa;
    color: #1e1e1e;
    font-size: 12px;
    line-height: 24px;
  }
  @media (max-width: 780px) {
    margin-right: 5px;
    margin-bottom: 8px;
  }
`;

// 내가 추가
class AllPostsList extends React.Component {
  render() {
    const { posts, siteTags } = this.props;

    const H2Style = {
      margin: "30px 7px 15px 7px"
    };
    const DivStyle = {
      "padding-top": "55px"
    };

    const getFilteredPosts = (posts, tag) => {
      return posts.filter(post => post.node.frontmatter.tags.indexOf(tag) > -1);
    };

    const getPostsByTag = (posts, tag) => {
      return (
        <Fragment>
          <div id={tag} style={DivStyle}>
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
                language: post.node.frontmatter.language || "fr",
                tags: post.node.frontmatter.tags || []
              };
              return <AllPostsListItem key={props.slug} {...props} />;
            })}
          </div>
        </Fragment>
      );
    };

    return (
      <Fragment>
        <AnchorContainer>
          {siteTags.map(tag => {
            return (
              <AnchorTitle>
                <AnchorLink href={`#${tag}`}>
                  {tag} ({getFilteredPosts(posts, tag).length})
                </AnchorLink>
              </AnchorTitle>
            );
          })}
        </AnchorContainer>
        <hr></hr>
        {siteTags.map(tag => {
          return getPostsByTag(posts, tag);
        })}
      </Fragment>
    );
  }
}
export default AllPostsList;
