import React from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import {
  ImgBlankImage,
  ImgEndBookCover, ImgEndingCoverCurrent,
  ImgFirstBookCover, ImgInitialCoverCurrent
} from "../../../images";
import { useParams } from "react-router";
import { flipBookList } from "../../../data-list";

export const FlipBookComponent = () => {
  const { type } = useParams();

  const sheetTypes = flipBookList.find((list) => list.type === type);

  if (!sheetTypes) return;

  return (
    <Container>
      <HTMLFlipBook
        width={550}
        height={680}
        autoSize
        className="flip-book-container"
      >
        <div className="demoPage"></div>
        <div className="demoPage">
          {
            type === "mother-day" || type === "activities-acm-sts" || type === "works-acm-sts" ? <img src={ImgInitialCoverCurrent} alt="blankPage" loading="lazy" /> :
              <img src={ImgFirstBookCover} alt="blankPage" loading="lazy" />
          }
        </div>

        {sheetTypes.images?.map((sheet, index) => (
          <div className="demoPage" key={index}>
            <img src={sheet || ImgBlankImage} alt="blankPage" loading="lazy" />
          </div>
        ))}

        <div className="demoPage">
          {
            type === "mother-day" || type === "activities-acm-sts" || type === "works-acm-sts" ? <img src={ImgEndingCoverCurrent} alt="blankPage" loading="lazy" /> :
              <img src={ImgEndBookCover} alt="blankPage" loading="lazy" />
          }
        </div>
      </HTMLFlipBook>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
  background: ${({ theme }) => theme.colors.tertiary};
  .demoPage {
    perspective: 2000px;
    position: absolute;
    img {
      width: 100%;
      height: 42rem;
    }
  }
`;
