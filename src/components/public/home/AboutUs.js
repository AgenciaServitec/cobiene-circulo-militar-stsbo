import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import {videAboutUs} from "../../../images";
// import { useDevice } from "../../../hooks";

export const AboutUs = () => {
  // const { isMobile } = useDevice();
  return (
    <Container id="about-us">
      {/*<div className="wrapper-logos-mobile">*/}
      {/*  <AntCarousel*/}
      {/*    autoplay*/}
      {/*    autoplaySpeed={3 * 1000}*/}
      {/*    arrows={!isMobile}*/}
      {/*    prevArrow={<FontAwesomeIcon icon={faChevronLeft} />}*/}
      {/*    nextArrow={<FontAwesomeIcon icon={faChevronRight} />}*/}
      {/*  >*/}
      {/*    {logoLists.map((logoList, index) => (*/}
      {/*      <div className="wrapper-logo-mobile" key={index}>*/}
      {/*        <img src={logoList.image} alt={logoList.name} />*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </AntCarousel>*/}
      {/*</div>*/}
        <h2 className="title">SOBRE NOSOTROS</h2>
      <div className="wrapper-text">
        <div className="content-text">
          <p className="content">
            La Asociación Círculo Militar de Supervisores Técnicos y Sub Oficiales del Ejército (ACM-STS), brinda bienestar al personal de Supervisores, Técnicos y sub Oficiales del Ejército del Perú en situación de Actividad, Disponibilidad o Retiro y sus FAMILIARES DIRECTOS, en el área de alojamiento, alimentaciones, recreación, deporte y cultura. Los beneficios que brinda a los ASOCIADOS son únicos y exclusivos para el: TITULAR Y SUS FAMILIARES DIRECTOS.
          </p>
        </div>
        <div style={{ paddingBottom: "0.5em", display: "flex", alingSelf: "center", justifyContent: "center", }}>
          <VideoBg autoPlay loop muted src={videAboutUs} type="Video/mp4" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 0 0 0;
  background: none repeat scroll 0 0 #ffffff;
  text-align: center;
  .title {
    letter-spacing: 0.3px;
    font-family: "Intro Demo", sans-serif;
    width: 100%;
    color: #F6B63E;
    font-size: 3.5rem;
  }

  .wrapper-logos-mobile {
    padding: 0.5rem 2rem;

    .wrapper-logo-mobile {
      max-width: 13em;
      width: 100%;
      padding: 2em 0 3.5em 0;

      img {
        width: 100%;
      }
    }
  }

  .wrapper-text {
    background: none repeat scroll 0 0 #ffffff;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .content-text {
      text-align: center;
      width: 100%;
      padding: 0 2em 1.5em 2em;

      ${mediaQuery.minTablet} {
        padding: 2em 5rem 2rem 5rem;
      }

      .content {
        font-size: 1.2rem;
        line-height: 1.3em;
        //margin-bottom: 2em;
        margin-top: 1em;
        text-align: justify;
        //justify-content: ;
      }
    }
  }
`;

const VideoBg = styled.video`
  width: 70%;
  height: auto;
  background: #232a34;
`;
