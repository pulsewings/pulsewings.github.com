import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../tokens";

const PaginationWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  // justify-content: space-between;
  justify-content: center;
  width: 80%;
  max-width: 940px;
  padding: 25px 0;
  margin: 0px auto;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px 0;
  }
`;

const PageBtn = styled(Link)`
  border-radius: 3px;
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  color: ${colors.textLightest};
  padding: 8px 20px;
  min-width: 90px;

  &:hover {
    background-color: ${colors.textLightest};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }

  @media (max-width: 564px) {
    margin-top: 10px;
    // width: 100%;
  }
`;

const PreviousBtn = styled(PageBtn)`
  order: 1;
  @media (max-width: 564px) {
    order: 2;
  }
`;

const NextBtn = styled(PageBtn)`
  order: 3;
`;

const Spacer = styled.span`
  display: block;
  min-width: 130px;

  &.previous {
    order: 1;
  }

  &.next {
    order: 3;
  }

  @media (max-width: 564px) {
    display: none;

    &.previous {
      order: 2;
    }

    &.next {
      order: 3;
    }
  }
`;
/*
const PageInfo = styled.span`
  order: 2;
  padding: 1em 0;
  @media (max-width: 564px) {
    order: 1;
  }
`;*/

const OtherPageBtn = styled(Link)`
  // background-color: ${colors.primary};
  // border: 1px solid ${colors.primary};
  // color: ${colors.textLightest};
  color: ${colors.text};
  padding: 8px 6px;
  min-width: 20px;
  margin: 0 8px;
  order: 2;

  &:hover {
    background-color: ${colors.textLightest};
    color: ${colors.primary};
    // border: 1px solid ${colors.primary};
  }

  @media (max-width: 564px) {
    margin-top: 10px;
  }
`;
const CurrentPageBtn = styled(OtherPageBtn)`
  background-color: ${colors.primary};
  // border: 1px solid ${colors.primary};
  color: ${colors.textLightest};
`;

class Pagination extends React.Component {
  render() {
    const { currentPage, nbPages } = this.props;
    const previousUrl = currentPage === 2 ? "/" : `/pages/${currentPage - 1}`;

    let pageList = [];
    for (let i = 0; i < nbPages; i++) {
      if (i + 1 === currentPage) {
        if (i === 0) {
          pageList.push(<CurrentPageBtn to={`/`}>{i + 1}</CurrentPageBtn>);
        } else {
          pageList.push(
            <CurrentPageBtn to={`/pages/${i + 1}`}>{i + 1}</CurrentPageBtn>
          );
        }
      } else {
        if (i === 0) {
          pageList.push(<OtherPageBtn to={`/`}>{i + 1}</OtherPageBtn>);
        } else {
          pageList.push(
            <OtherPageBtn to={`/pages/${i + 1}`}>{i + 1}</OtherPageBtn>
          );
        }
      }
    }

    return (
      <PaginationWrapper>
        {currentPage !== 1 ? (
          <PreviousBtn to={previousUrl}>‹ 이전글 </PreviousBtn>
        ) : (
          <Spacer className="previous" />
        )}

        {/*<PageInfo>
          {currentPage} / {nbPages}
        </PageInfo>*/}
        {pageList}

        {currentPage < nbPages ? (
          <NextBtn to={`/pages/${currentPage + 1}`}> 다음글 ›</NextBtn>
        ) : (
          <Spacer className="next" />
        )}
      </PaginationWrapper>
    );
  }
}

export default Pagination;
