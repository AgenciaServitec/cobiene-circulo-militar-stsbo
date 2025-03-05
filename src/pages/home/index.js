import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel, AboutUs, Sedes, GalleryHome, PdfInformative } from "../../components/public";
import { Services } from "../../components/public/home/Services";
import { VideoChorrillos16 } from "../../images";
export const Home = ({ onClickVisibleFormContact, visibleFormContact }) => {

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    setVisibleModal(true);
  }, []);

  return (
    <>
      <Container>
        <Carousel />

        <Sedes />

        <AboutUs title="SOBRE NOSOTROS" src={VideoChorrillos16} />

        <GalleryHome />

        <Services />

        <PdfInformative visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
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
