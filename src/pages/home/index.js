import React from "react";
import styled from "styled-components";
import { Carousel, AboutUs, Sedes, GalleryHome } from "../../components/public";
import {Services} from "../../components/public/home/Services";
import {VideoChorrillos16} from "../../images";
export const Home = ({ onClickVisibleFormContact, visibleFormContact }) => {
  return (
    <>
      <Container>
        {/*<Carousel*/}
        {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*  onEventGaClickButton={onEventGaClickButton}*/}
        {/*/>*/}
          <Carousel />
        {/*<InitialComponent*/}
        {/*  bgImage={ExtintoresBackground}*/}
        {/*  description="PATRIA, SOCIEDAD Y FAMILIA."*/}
        {/*/>*/}
        <AboutUs title="SOBRE NOSOTROS" src={VideoChorrillos16} styles={{padding: "4rem 0 0 0", grid:"1fr 1fr"}} />
          {/*<CustomImage/>*/}
        <Sedes
          onClickVisibleFormContact={onClickVisibleFormContact}
          visibleFormContact={visibleFormContact}
        />
          <GalleryHome/>
          <Services/>
        {/*<WrapperComponent>*/}
        {/*  <VideoSection*/}
        {/*    onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*    onEventGaClickButton={onEventGaClickButton}*/}
        {/*    onEventGaClickVideos={onEventGaClickVideos}*/}
        {/*  />*/}

        {/*</WrapperComponent>*/}
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
