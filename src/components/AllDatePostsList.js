import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import AllPostsListItem from './AllPostsListItem';

const YearTitleLink = styled(Link)`
  color: #555;
`;
/*
const AnchorContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-bottom: 15px;
`;

const AnchorTitle = styled.li`
  display: inline-block;
  font-size: 16px;
  & > a {
    color: #555;
  }
`;*/

// 내가 추가 : 연도별 정렬 페이지
class AllDatePostsList extends React.Component {
  render() {
    const { posts, siteYears } = this.props;

    const H2Style = {
      margin: '30px 7px 15px 7px'
    };
    const DivStyle = {
      'padding-top': '10px'
    };

    const getFilteredPosts = (posts, year) => {
      return posts.filter(post => post.node.frontmatter.date.split('-')[0] === year);
    };

    const getPostsByYear = (posts, year) => {
      return (
        <Fragment>
          <div id={year} style={DivStyle}>
            <h2 style={H2Style}>
              <YearTitleLink to={`/years/${year}`}>
                {year}년 ({getFilteredPosts(posts, year).length})
              </YearTitleLink>
            </h2>
            {getFilteredPosts(posts, year).map(post => {
              const props = {
                title: post.node.frontmatter.title,
                excerpt: post.node.excerpt,
                slug: post.node.frontmatter.slug,
                date:
                  post.node.frontmatter.date.split('-')[1] +
                  '-' +
                  post.node.frontmatter.date.split('-')[2],
                language: post.node.frontmatter.language || 'fr',
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
        {/*
          <AnchorContainer>
          {siteYears.map(year => {
            return (
              <AnchorTitle>
                <AnchorLink href={`#${year}`}>
                  {year} ({getFilteredPosts(posts, year).length})
                </AnchorLink>
              </AnchorTitle>
            );
          })}
        </AnchorContainer>
        <hr></hr>
        */}
        {siteYears.map(year => {
          return getPostsByYear(posts, year);
        })}
      </Fragment>
    );
  }
}
export default AllDatePostsList;
