import React from 'react';
import styled from 'styled-components';
import ContentHeader from './ContentHeader';
import { colors } from '../tokens';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

const ContentBody = styled.div`
  line-height: 1.6;

  & > h1 {
    font-size: 1.8em;
    padding-top: 3rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  & > h2 {
    padding-top: 3rem;
    /*margin-top: 3rem;*/
    /*border-top: 1px solid #ececec;*/
    margin-top: 1rem;
    padding-top: 1rem;
  }

  & > h3 {
    padding-top: 1.5rem;
  }

  & > h4 {
    padding-top: 1.5rem;
  }

  & > p {
    margin: 1em 0 0 0;
    font-size: 16px;
    line-height: 28px;
    text-align: justify;
  }

  & > hr {
    margin: 30px 0;
  }

  & .gatsby-resp-image-wrapper {
    max-width: 940px !important;
  }

  & .gatsby-resp-image-figure {
  }

  & .gatsby-resp-image-figcaption {
    text-align: center;
    color: #777;
    margin-top: 5px;
    font-size: 13px;
  }

  & a {
    border-bottom: 1px dotted rgba(162, 162, 162, 0.8);

    &:hover {
      border-bottom-style: solid;
    }

    &.anchor,
    &.gatsby-resp-image-link {
      border: none;
    }
  }

  & > blockquote {
    box-sizing: border-box;
    // margin: 1.75em 0 1.75em -2.2em;
    // padding: 0 0 0 1.75em;
    margin: 1.75em 0 1.75em 0;
    padding: 0 0 0 1.5em;
    border-left: 0.4em solid rgba(32, 35, 42, 0.85);

    @media (max-width: 780px) {
      margin: 1.75em 0 1.75em 0;
      padding: 0 0 0 1em;
    }
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: normal;
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em 0em 1.5em 0;
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight-code-line {
    background-color: ${colors.highlight_code_linebg};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid ${colors.highlight_code_bg};
  }

  & p > code.language-text,
  & li > code.language-text {
    background: ${colors.highlight_code_oneline};
    color: #222222cc;
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
  }

  & table {
    margin-top: 1em;
    border-collapse: collapse;
    border-radius: 0.5em;
    overflow: hidden;

    & th,
    & td {
      padding: 0.5em;
      background: #e8e8e8;
      border-bottom: 2px solid ${colors.white};
    }
  }

  & li {
    margin-bottom: 8px;
  }
`;

class Content extends React.Component {
  render() {
    const { content, date, tags } = this.props;

    return (
      <section>
        {(tags || date) && <ContentHeader date={date} tags={tags} />}
        <ContentBody>
          <MDXRenderer>{content}</MDXRenderer>
        </ContentBody>
      </section>
    );
  }
}

export default Content;
