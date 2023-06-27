import React, { useState } from "react";
import styled from "styled-components";
import { Services1, Services2, Services3 } from "../../../images";

export const CustomImage = () => {
  const images = [
    { id: 0, value: Services1 },
    { id: 1, value: Services2 },
    { id: 2, value: Services3 },
  ];

  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = images[index];
    setSliderData(slider);
  };

  return (
    <Container>
      <div className="wrapper-slider">
        <img src={sliderData.value} height="300" width="500" loading="lazy" />
        <div className="content-images">
          {images.map((image, i) => (
            <div className="content-img">
              <div className="wrapper-img">
                <img
                  className={sliderData.id === i ? "clicked" : "not-clicked"}
                  key={i}
                  src={image.value}
                  onClick={() => handleClick(i)}
                  height="70"
                  width="100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.article`
  text-align: center;
  .wrapper-slider {
    .content-images {
      justify-contentt: center;
      display: flex;
      padding: 2em;
      .content-img {
        padding-left: 0.5em;

        .wrapper-img {
          position: relative;
          margin: auto;
          //box-shadow: 2px 2px 5px #999;
          //.wrapper-img:before{
          //  content: "";
          //  width: 100%;
          //  height: 100%;
          //  position: absolute;
          //  top: 0;
          //  right: 0;
          //  background: black;
          //}
          .clicked {
          }
          .not-clicked {
            opacity: 0.1;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }
  }
`;
