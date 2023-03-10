import React from "react";

import styled from "styled-components";
import {Contact, InitialComponent} from "../../components/public";
import {BackgroundTarapaca, ImageGalleryTarapaca,ImageGalleryTarapaca1,ImageGalleryTarapaca2, Services2} from "../../images";
import {Gallery} from "../../components/public/home/Gallery";

export const PageSedeTarapaca = () => {
    const images = [
        {
            src: Services2, title:"Sede",
        },
        {
            src: ImageGalleryTarapaca, title:"Salón",
        },
        {
            src: ImageGalleryTarapaca1, title:"Salón de eventos",
        },
        {
            src: ImageGalleryTarapaca2, title:"Salón",
        }
    ]
  return (
      <div>
          <Container>
              <InitialComponent bgImage={BackgroundTarapaca} description=""/>
              <Gallery images={images} title="Sede Tarapacá"/>
              <Contact ubicacion="chorrillos"/>
          </Container>
      </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
`;