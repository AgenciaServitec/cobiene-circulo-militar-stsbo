import React from "react";

import styled from "styled-components";
import { Contact, InitialComponent, AboutUs } from "../../components/public";
import {
  BackgroundTarapaca,
  ImageGalleryTarapaca1,
  ImageGalleryTarapaca2,
  Services2,
  Tarapaca1,
  Tarapaca3,
  Tarapaca4,
  Tarapaca5,
  Tarapaca6,
  Tarapaca7,
  Tarapaca8,
  Tarapaca9,
  Tarapaca10,
  Tarapaca11,
  Tarapaca12,
  VideoChorrillos17,
} from "../../images";
import { Gallery } from "../../components/public/home/Gallery";

export const PageSedeTarapaca = () => {
  const images = [
    {
      src: Services2,
      title: "Nuestra Sede",
    },
    {
      src: Tarapaca1,
      title: "Areas de Eventos",
    },
    {
      src: ImageGalleryTarapaca1,
      title: "Salón de eventos",
    },
    { src: ImageGalleryTarapaca2, title: "Areas de Eventos" },
    { src: Tarapaca3, title: "Piscinas" },
    { src: Tarapaca4, title: "Piscinas" },
    { src: Tarapaca5, title: "Piscinas Recreacionales" },
    { src: Tarapaca5, title: "Piscinas Recreacionales" },
    { src: Tarapaca6, title: "Piscinas Recreacionales" },
    { src: Tarapaca7, title: "Piscinas Recreacionales" },
    { src: Tarapaca8, title: "Areas de Recreacion" },
    { src: Tarapaca9, title: "Areas de Recreacion" },
    { src: Tarapaca10, title: "Piscinas" },
    { src: Tarapaca11, title: "Restaurantes" },
    { src: Tarapaca11, title: "Restaurantes" },
    { src: Tarapaca12, title: "Piscinas" },
  ];
  return (
    <Container>
      <InitialComponent bgImage={BackgroundTarapaca} description="" />
      <AboutUs
        src={VideoChorrillos17}
        title="Nosotros-Sede Tarapacá"
        styles={{ padding: "2rem 0 2rem 0rem", grid: "60% 40%" }}
      />
      <Gallery images={images} title="Sede Tarapacá" background="#efefef" />
      <Contact location="chorrillos" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
