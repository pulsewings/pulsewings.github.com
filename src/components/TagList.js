import React, { Fragment } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../tokens";

const ListContainer = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  color: ${colors.textLight};
`;

const TagListItem = styled(Link)`
  margin-left: 0.3rem;
  color: ${colors.textLight};

  &:hover {
   /* border-bottom: 1px dotted ${colors.textLight}; */
    background-color: #e6e6e6;
  }
  &:before {
    content: '';
  }
  padding: 5px 10px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  vertical-align: middle;
  background-color: #fafafa;
  color: #1e1e1e;
  font-size: 12px;
  line-height: 24px;
  margin: 0 5px 5px 0;
`;

class TagList extends React.Component {
  render() {
    const { tags, icon } = this.props;

    return (
      <ListContainer>
        {icon === true && <Fragment></Fragment>}
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              <TagListItem to={`/tags/${tag}`}>{tag}</TagListItem>
              {i < tags.length - 1 ? " " : ""}
            </Fragment>
          );
        })}
      </ListContainer>
    );
  }
}
export default TagList;
