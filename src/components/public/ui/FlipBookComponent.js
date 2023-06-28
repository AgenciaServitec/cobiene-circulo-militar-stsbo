import React from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import {
  ImgBlankImage,
  ImgEndBookCover,
  ImgFirstBookCover,
} from "../../../images";
import { useParams } from "react-router";
import { flipBookList } from "../../../data-list";

export const FlipBookComponent = () => {
  const { type } = useParams();

  const filterType = flipBookList.filter((list) => list?.type === type);
  const listImages = filterType[0]?.images || [];

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
          <img src={ImgFirstBookCover} alt="blankPage" loading="lazy" />
        </div>

        {listImages?.map((img, index) => (
          <div className="demoPage" key={index}>
            <img src={img || ImgBlankImage} alt="blankPage" loading="lazy" />
          </div>
        ))}

        <div className="demoPage">
          <img src={ImgEndBookCover} alt="blankPage" loading="lazy" />
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
