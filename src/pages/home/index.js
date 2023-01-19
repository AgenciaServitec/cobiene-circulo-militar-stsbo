import React from "react";
import styled from "styled-components";
import { Carousel, AboutUs, Sedes } from "../../components/public";
import {Services} from "../../components/public/home/Services";
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
        <AboutUs />
          {/*<CustomImage/>*/}
        <Sedes
          onClickVisibleFormContact={onClickVisibleFormContact}
          visibleFormContact={visibleFormContact}
        />
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
`;
