import React from "react";
import styled from "styled-components";
import { Services1, Services2, Services3 } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { CardSede, Novelty } from "./index";

export const Sedes = () => {
  return (
    <Container id="sedes">
      <div className="content-items">
        <div className="heading">
          <h2 className="title">
            Círculo Militar De Supervisores, Técnicos y Sub Oficiales
          </h2>
          <h5 className="subtitle">+ NUESTRAS SEDES</h5>
        </div>
        <div className="content-img">
          <CardSede
            title="Chorrillos"
            banner={Services1}
            titleLarge="Sede de Chorrillos"
            url="sede-chorrillos"
          />
          <CardSede
            title="Tarapaca"
            banner={Services2}
            titleLarge="Sede de Tarapaca"
            url="sede-tarapaca"
          />
          <CardSede
            title="Rimac"
            banner={Services3}
            titleLarge="Sede de Rimac"
            url="sede-Rimac"
          />
        </div>
        <div>
          <h5 className="subtitle-new-notices">+ NOVEDADES</h5>
        </div>
        <div className="container-novelty">
          <Novelty />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.basic};
  padding: 1rem;

  ${mediaQuery.minTablet} {
    padding: 1rem 3rem;
  }

  z-index: 9;

  .content-items {
    padding: 1em 0;

    ${mediaQuery.minTablet} {
      padding: 3em 0;
    }

    .heading {
      margin-bottom: 60px;
      padding-top: 40px;
      position: relative;
      text-align: center;
      width: 100%;

      .title {
        color: #f6b63e;
        left: 0;
        font-size: 3rem;
        text-align: center;
        width: 100%;
      }

      .subtitle {
        color: #030303;
        font-family: "Intro Demo", sans-serif;
        font-size: 26px;
        letter-spacing: 0.3px;
        text-align: center;
        width: 100%;
      }
    }

    .content-img {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .subtitle-new-notices {
      padding-top: 7rem;
      padding-left: 3rem;
      color: black;
      font-size: 1.5rem;
    }

    .container-novelty {
      display: flex;
      justify-content: center;
    }

    .button {
      padding-top: 3rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
