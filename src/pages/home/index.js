import React from "react";
import styled from "styled-components";
import { InitialComponent, AboutUs, Sedes } from "../../components/public";
import { FormContact } from "../../components/public/ui";
import {Services} from "../../components/public/home/Services";
import {ExtintoresBackground} from "../../images";
export const Home = ({ onClickVisibleFormContact, visibleFormContact }) => {
  return (
    <>
      <Container>
        {/*<Carousel*/}
        {/*  onClickVisibleFormContact={onClickVisibleFormContact}*/}
        {/*  onEventGaClickButton={onEventGaClickButton}*/}
        {/*/>*/}
        <InitialComponent
          bgImage={ExtintoresBackground}
          description="PATRIA, SOCIEDAD Y FAMILIA."
        />
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
      <FormContact
        visibleFormContact={visibleFormContact}
        onClickVisibleFormContact={onClickVisibleFormContact}
      />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
