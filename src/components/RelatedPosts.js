import React from 'react';
import { StyledLink } from './Commons';
import Flag from './Flag/Flag';
import useSiteMetadata from '../hooks/use-site-config';
import styled from 'styled-components';

const RelatedPostUl = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 780px) {
    margin: 0;
  }

  &:li:first-child: {
    text-align: right;
    color: #555;
  }
`;

const RelatedPostLi = styled.li`
  & > a {
    color: #555;
    border-bottom: 1px dotted #555;
    line-height: 1.5;
  }

  & > .previous-text,
  & > .next-text {
    line-height: 1.5;
    font-size: 12px;
  }

  &:nth-child(n + 3) {
    & > .next-text,
    & > .previous-text {
      display: none;
    }
  }

  &:nth-child(odd) {
    text-align: left;
    border-right: 1px solid #ececec;
    padding-right: 10px;

    & > .next-text {
      display: none;
    }
  }
  &:nth-child(even) {
    text-align: right;
    padding-left: 10px;

    & > .previous-text {
      display: none;
    }
  }
`;

const RelatedPosts = props => {
  const { posts } = props;
  const { multilangPosts } = useSiteMetadata();

  return (
    <RelatedPostUl>
      {posts.map(post => {
        const title = post.node.frontmatter.title;
        const slug = post.node.frontmatter.slug;
        const language = post.node.frontmatter.language || 'en';
        return (
          <RelatedPostLi key={slug}>
            <p class="previous-text">&lt;&lt; 이전글 </p>
            <p class="next-text">다음글 &gt;&gt;</p>
            <StyledLink to={`/${slug}`}>
              {multilangPosts && <Flag language={language} />}
              {title}
            </StyledLink>
          </RelatedPostLi>
        );
      })}
    </RelatedPostUl>
  );
};
export default RelatedPosts;
