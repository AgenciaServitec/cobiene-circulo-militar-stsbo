import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { novelties } from "../../../data-list";

export const Novelty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {novelties.map((itemNovelty, index) => (
          <div className="wrapper-novelties" key={index}>
            <a
              href={itemNovelty.link && itemNovelty.link}
              target={itemNovelty.link && "_blank"}
              rel={itemNovelty.link && "noreferrer"}
            >
              <img
                src={itemNovelty.image}
                alt={itemNovelty.title}
                loading="lazy"
              />
              <div className="wrapper-info">
                <h3>{itemNovelty.fecha}</h3>
                <h2>{itemNovelty.content}</h2>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  .slick-slide > div {
    margin: 10px;
  }
  .slick-slide {
    margin: -0px;
  }

  .wrapper-novelties {
    cursor: pointer;
    background: #1a1a1a;
    border-radius: 1rem;
    width: 16em;
    position: relative;
    display: inline-block;
    flex-direction: column;
    @media (max-width: 480px) {
      margin-left: 0;
    }
    img {
      width: 100%;
      height: 15.5em;
      object-fit: fill;
      border-radius: 5px;
    }
    .wrapper-info {
      height: 9rem;
      margin-left: 1.5rem;
      margin-top: 1.5rem;
      margin-right: 1rem;
      h3 {
        font-size: 0.8rem;
        font-weight: 100;
      }
      h2 {
        font-size: 1.1rem;
        font-family: "Encode Sans", Arial, sans-serif;
      }
    }
  }
`;
