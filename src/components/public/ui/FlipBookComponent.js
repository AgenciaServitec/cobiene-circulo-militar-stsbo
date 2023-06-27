import React from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import { ImgBlankImage } from "../../../images";

const imagesArray = [ImgBlankImage, ImgBlankImage];

export const FlipBookComponent = ({ imagesPages = [] }) => (
  <Container>
    <HTMLFlipBook
      width={550}
      height={680}
      autoSize
      className="flip-book-container"
    >
      <div className="demoPage" />
      {imagesArray.map((imagePage, index) => (
        <div className="demoPage" key={index}>
          <img src={imagePage} alt="Page cobiene flip book" loading="lazy" />
        </div>
      ))}
    </HTMLFlipBook>
  </Container>
);

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0 0 0;
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
