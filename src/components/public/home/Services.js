import React from "react";
import styled from "styled-components";
import { Services1, Services2, Services3 } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { Button } from "../ui";
import { ItemServices } from "./ItemServices";

export const Services = ({ onClickVisibleFormContact, visibleFormContact }) => {
  return (
    <Container id="services">
      <div className="content-items">
        <div className="heading">
          <h2 className="title">Círculo Militar Supervisores Técnicos de Sub Oficiales</h2>
          <h5 className="subtitle">+ NUESTRAS SEDES</h5>
        </div>
        <div className="content-img">
          <ItemServices
            img={Services1}
            title="CHORRILLOS"
            content=""
            onClick="productos"
          />
          <ItemServices
            img={Services2}
            title="TARAPACA"
            content=""
            onClick="services"
          />
          <ItemServices
            img={Services3}
            title="RIMAC"
            content=""
            onClickVisibleFormContact={onClickVisibleFormContact}
          />
        </div>
        <div className="button">
          <div>
            <Button
              text="¡Empezar Ahora!"
              type="primary"
              onClick={() => {
                onClickVisibleFormContact(true);
              }}
              // onClick de google anality
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({theme}) => theme.colors.basic};
  padding: 1rem;

  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }

  z-index: 9;

  .content-items {
    padding: 1em 0;

    ${mediaQuery.minTablet} {
      padding: 3em 0;
    }

    .heading {
      margin-bottom: 60px;
      padding-top: 79px;
      position: relative;
      text-align: center;
      width: 100%;

      .title {
        color: #F6B63E;
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

    .button {
      padding-top: 3rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
