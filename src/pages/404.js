import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';
import RelatedPosts from '../components/RelatedPosts';
import { Text } from '../components/Commons';

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`;
/*
const Ghost = styled.p`
  line-height: 1.5;
  text-align: center;
  font-size: 7rem;
`;*/

const SubTitle = styled.h2`
  padding-top: 40px;
  line-height: 1.2;
  border-top: 1px solid #ececec;
  margin-top: 44px;
`;

const NotFoundPage = props => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "//content/posts//" } }
        limit: 5
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              tags
              language
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.posts.edges;

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="Page Not Found" />
      <Wrapper>
        <MainTitle>404 페이지를 찾을 수 없어요.</MainTitle>
        {/*<Ghost>👻</Ghost>*/}
        <Text style={{ textAlign: 'center' }}>
          존재하지 않는 URL입니다. <br /> 페이지를 찾을 수 없네요 ㅠ_ㅠ
        </Text>

        <SubTitle>Recent Posts</SubTitle>

        <RelatedPosts posts={posts} />
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
