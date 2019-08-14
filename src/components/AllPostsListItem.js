import React from 'react';
import { Link } from 'gatsby';
import Flag from './Flag/Flag';
import useSiteMetadata from '../hooks/use-site-config';
import styled from 'styled-components';
import { colors } from '../tokens';

// 내가 추가
const Post = styled.article`
  padding: 5px;

  & > header {
    padding: 0;
  }
`;

const PostDate = styled.time`
  color: ${colors.textLight};
  display: inline-block;
  margin-right: 10px;

  &:before {
    content: '';
    margin-right: 0.2rem;
  }
`;

const PostHeader = styled.header`
  padding: 1em 0;
`;

const PostTitleLink = styled(Link)`
  font-size: 17px;
  display: inline-block;
  color: ${colors.primary};
  margin-right: 5px;

  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`;

const H2Style = {
  display: 'inline-block'
};

const AllPostsListItem = props => {
  const { title, excerpt, slug, date, language, tags } = props;
  const { multilangPosts } = useSiteMetadata();

  return (
    <Post>
      <PostHeader>
        <PostDate>{date}</PostDate>
        <h2 style={H2Style}>
          <PostTitleLink to={`/${slug}`}>
            {multilangPosts && <Flag language={language} />}
            {title}
          </PostTitleLink>
        </h2>
        {/*<TagList tags={tags} icon={true} />*/}
      </PostHeader>
      <footer></footer>
    </Post>
  );
};
export default AllPostsListItem;
