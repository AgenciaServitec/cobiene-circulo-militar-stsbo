import React from "react";
import styled from "styled-components";
import { Carousel, AboutUs, Sedes, GalleryHome } from "../../components/public";
import { Services } from "../../components/public/home/Services";
import { VideoChorrillos16 } from "../../images";
export const Home = ({ onClickVisibleFormContact, visibleFormContact }) => {
  return (
    <>
      <Container>
        <Carousel />

        <AboutUs title="SOBRE NOSOTROS" src={VideoChorrillos16} />

        <Sedes
          onClickVisibleFormContact={onClickVisibleFormContact}
          visibleFormContact={visibleFormContact}
        />
        <GalleryHome />
        <Services />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  overflow: hidden;
`;
