import React from 'react';
import styled from 'styled-components';
import Bio from './Bio';
import Content from './Content';
// import { Link } from 'gatsby';

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`;

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ececec;
`;

class Article extends React.Component {
  render() {
    const { post } = this.props;
    // const tableOfContents = post.tableOfContents;

    return (
      <ArticleWrapper>
        <ul>
          {/*tableOfContents.items.map(item => {
            return (
              <li>
                <a href={`${item.url}`}>{item.title}</a>
              </li>
            );
          })*/}
        </ul>
        <Content content={post.body} date={post.frontmatter.date} tags={post.frontmatter.tags} />
        <ArticleFooter>
          <Bio />
        </ArticleFooter>
      </ArticleWrapper>
    );
  }
}

export default Article;
