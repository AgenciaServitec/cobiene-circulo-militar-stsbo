import React from "react";
import { Gallery, VideosSedes, AboutUs } from "../../components/public/home";
import styled from "styled-components";
import {
  Chorrillos1,
  Chorrillos2,
  Chorrillos3,
  Chorrillos4,
  Chorrillos5,
  Chorrillos6,
  Chorrillos7,
  Chorrillos8,
  Chorrillos9,
  Chorrillos10,
  Chorrillos11,
  Chorrillos12,
  Chorrillos13,
  Chorrillos14,
  BackgroundChorrillos,
  VideoChorrillos1,
  VideoChorrillos2,
  VideoChorrillos3,
  VideoChorrillos4,
  VideoChorrillos5,
  VideoChorrillos6,
  VideoChorrillos7,
  VideoChorrillos8,
  VideoChorrillos9,
  VideoChorrillos10,
  VideoChorrillos11,
  VideoChorrillos12,
  VideoChorrillos13,
  VideoChorrillos14,
  VideoChorrillos15,
  VideoChorrillos16,
  BackgroundChorrillos2,
} from "../../images";
import { Contact, InitialComponent } from "../../components/public";

export const PageSedeChorrillos = ({ videosSedes }) => {
  const images = [
    { src: Chorrillos1, title: "Areas Deportivas" },
    { src: Chorrillos2, title: "Piscina" },
    { src: Chorrillos3, title: "Áreas de la Sede" },
    { src: Chorrillos4, title: "Áreas de la Sede" },
    { src: Chorrillos5, title: "Areas de Reunion" },
    { src: Chorrillos6, title: "Nuestra Sede" },
    { src: Chorrillos7, title: "Areas de Eventos" },
    { src: Chorrillos3, title: "Áreas de la Sede" },
    { src: Chorrillos8, title: "Áreas Deportivas" },
    { src: Chorrillos9, title: "Áreas de Eventos" },
    { src: Chorrillos10, title: "Áreas Sociales" },
    { src: Chorrillos11, title: "Áreas Sociales" },
    { src: Chorrillos12, title: "Áreas de la Sede" },
    { src: Chorrillos13, title: "Áreas Deportivas" },
    { src: Chorrillos14, title: "Áreas Recreacionales" },
  ];

  const videos = [
    { src: VideoChorrillos1, title: "video2" },
    { src: VideoChorrillos2, title: "video2" },
    { src: VideoChorrillos3, title: "video2" },
    { src: VideoChorrillos4, title: "video2" },
    { src: VideoChorrillos5, title: "video2" },
    { src: VideoChorrillos6, title: "video2" },
    { src: VideoChorrillos7, title: "video2" },
    { src: VideoChorrillos8, title: "video2" },
    { src: VideoChorrillos9, title: "video2" },
    { src: VideoChorrillos10, title: "video2" },
    { src: VideoChorrillos11, title: "video2" },
    { src: VideoChorrillos12, title: "video2" },
    { src: VideoChorrillos13, title: "video2" },
    { src: VideoChorrillos14, title: "video2" },
    { src: VideoChorrillos15, title: "video2" },
    { src: VideoChorrillos16, title: "video2" },
  ];

  return (
    <>
      <Container>
        <InitialComponent bgImage={BackgroundChorrillos2} description="" />
        <AboutUs
          src={VideoChorrillos16}
          title="Nosotros-Sede Chorrillos"
          styles={{ padding: "2rem 0 2rem 0", grid: "60% 40%" }}
        />
        {videosSedes ? (
          <VideosSedes videos={videos} title="NUESTROS RECUERDOS" />
        ) : (
          <Gallery
            background="#efefef"
            images={images}
            title="ZONAS RECREATIVAS"
          />
        )}
        <Contact location="chorrillos" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
`;
