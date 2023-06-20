import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const AboutUs = ({ title, styles, src }) => {
  return (
    <Container styles={styles} id="about-us">
      <div className="content-text">
        <h2 className="title">{title}</h2>
        <p className="content">
          La Asociación Círculo Militar de Supervisores Técnicos y SubOficiales
          del Ejército (ACM-STS), brinda bienestar al personal de Supervisores,
          Técnicos y subOficiales del Ejército del Perú en situación de
          Actividad, Disponibilidad o Retiro y sus FAMILIARES DIRECTOS, en el
          área de alojamiento, alimentaciones, recreación, deporte y cultura.
          Los beneficios que brinda a los ASOCIADOS son únicos y exclusivos para
          el: TITULAR Y SUS FAMILIARES DIRECTOS.
        </p>
      </div>
      <div className="content-video">
        <VideoBg autoPlay controls loop src={src} type="Video/mp4" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0 1.5em;
  margin: 1.5em 0;
  ${mediaQuery.minDesktop} {
    grid-template-columns: 1fr auto;
  }

  .content-text {
    text-align: left;
    width: 100%;
    padding: 1.5em;

    .title {
      letter-spacing: 0.3px;
      font-family: "Intro Demo", sans-serif;
      width: 100%;
      color: #f6b63e;
      font-size: 2.5em;
      ${mediaQuery.minTablet} {
        font-size: 2em;
      }
    }

    .content {
      font-size: 1.2rem;
      line-height: 1.3em;
      margin-top: 1em;
      text-align: justify;
    }
  }

  .content-video {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
`;

const VideoBg = styled.video`
  padding: 1em;
  height: auto;
  background: #232a34;
  width: 100%;
  max-width: 30em;
`;
