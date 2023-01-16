import React from "react";
import styled from "styled-components";
import { InitialComponent} from "../../components/public";
import { BackgroundTarapaca, Services2} from "../../images";
import {Gallery} from "../../components/public/home/Gallery";

export const PageSedeTarapaca = () => {
    const images = [
        {
            src: Services2, title:"Sede"
        },
    ]
  return (
      <div>
          <Container>
              <InitialComponent bgImage={BackgroundTarapaca} description=""/>
              <Gallery images={images} title="Sede Tarapacá"/>
          </Container>
      </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
`;