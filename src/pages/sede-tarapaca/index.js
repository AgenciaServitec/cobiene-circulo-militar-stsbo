import React from "react";
import { AboutService } from "../../components/public/home/AboutService";
import styled from "styled-components";
import { InitialComponent} from "../../components/public";
import {Services1, Services2} from "../../images";
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
              <InitialComponent bgImage={Services1}/>
              <Gallery images={images} title="Sede Chorrillos"/>
          </Container>
      </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
`;