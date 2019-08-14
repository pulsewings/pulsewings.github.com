import React, { Fragment } from 'react';
import styled from 'styled-components';
import TagList from './TagList';
import { colors } from '../tokens';

const Header = styled.header`
  margin-bottom: 2rem;
  color: ${colors.textLight};
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  justify-content: space-between;
  display: flex;
`;

class ContentIntro extends React.Component {
  render() {
    const { date, tags } = this.props;

    return (
      <Header>
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <TagList tags={tags} />
          </Fragment>
        )}
        {date && <time>{date}</time>}
      </Header>
    );
  }
}

export default ContentIntro;
