import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
// import { useDevice } from "../../../hooks";

export const AboutUs = ({title, styles, src}) => {
  // const { isMobile } = useDevice();
  return (
    <Container styles={styles} id="about-us">
      <div className="wrapper-text">
        <div className="content-text">
            <h2 className="title">{title}</h2>
          <p className="content">
            La Asociación Círculo Militar de Supervisores Técnicos y SubOficiales del Ejército (ACM-STS), brinda bienestar al personal de Supervisores, Técnicos y subOficiales del Ejército del Perú en situación de Actividad, Disponibilidad o Retiro y sus FAMILIARES DIRECTOS, en el área de alojamiento, alimentaciones, recreación, deporte y cultura. Los beneficios que brinda a los ASOCIADOS son únicos y exclusivos para el: TITULAR Y SUS FAMILIARES DIRECTOS.
          </p>
        </div>
        <div style={{alignSelf: "center", display: "flex", justifyContent: "center" }}>
          <VideoBg autoPlay controls loop src={src} type="Video/mp4" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  padding: ${({styles})=>styles.padding};
  background: none repeat scroll 0 0 #ffffff;
  text-align: center;
  .title {
    letter-spacing: 0.3px;
    font-family: "Intro Demo", sans-serif;
    width: 100%;
    color: #F6B63E;
    font-size: 2.5rem;
    @media(max-width: 480px){
      font-size: 2rem;
    }
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
    grid-template-columns: ${({styles})=> styles.grid};
    ${mediaQuery.maxMobile} {
      grid-template-columns: 1fr;
      padding-bottom: 2rem;
    }

    .content-text {
      //text-align: center;
      text-align: left;
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
