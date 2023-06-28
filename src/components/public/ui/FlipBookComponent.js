import React from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import { ImgBlankImage } from "../../../images";

const imagesArray = [
  ImgBlankImage,
  ImgBlankImage,
  ImgBlankImage,
  ImgBlankImage,
];

export const FlipBookComponent = ({ imagesPages = [] }) => (
  <Container>
    <HTMLFlipBook
      width={550}
      height={680}
      autoSize
      className="flip-book-container"
    >
      <DemoPage>
        <h2>Portada</h2>
      </DemoPage>
      <DemoPage>
        <img src={ImgBlankImage} alt="blankPage" />
      </DemoPage>
      {imagesArray.map((imagePage, index) => (
        <div className="demoPage" key={index}>
          <img src={imagePage} alt="Page cobiene flip book" loading="lazy" />
        </div>
      ))}
      <DemoPage>
        <img src={ImgBlankImage} alt="endPage" />
      </DemoPage>
      <DemoPage>
        <h2>Contra portada</h2>
      </DemoPage>
    </HTMLFlipBook>
  </Container>
);

const DemoPage = ({ children }) => <div className="demoPage">{children}</div>;

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
