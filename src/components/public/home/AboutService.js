import React from "react";
import { ItemProducts } from "./ItemProducts";
import { Product2, ProductServ1 } from "../../../images";
import { Button } from "../ui";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const AboutService = ({ onClickVisibleFormContact }) => {
  return (
    <Container>
      <div className="content-items">
        <div className="heading">
          <h2 className="title">+ SERVICIOS</h2>
          <h5 className="subtitle">nuestros servicios</h5>
        </div>
        <div className="content-img">
          <ItemProducts
            img={ProductServ1}
            title="RECARGA DE EXTINTORES "
            content="Nos encargamos de mantener en óptimas condiciones de funcionamiento todos los equipos contra incendios.
Se revisará periódicamente la ubicación del extintor y se verificara la facilidad de acceso al mismo, así  como el estado de todos sus elementos: presión, precinto, manguera, etc."
          />
          <ItemProducts
            img={Product2}
            title="PRUEBA HIDROSTATICA"
            content="* Si desea ampliar más información sobre nuestros productos y servicios, contáctese con nosotros rellenando el formulario de contacto,"
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
  background: ${({ theme }) => theme.colors.tertiary};
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
      padding-top: 5px;
      position: relative;
      text-align: center;
      width: 100%;
      .title {
        left: 0;
        text-align: center;
        width: 100%;
      }
      .subtitle {
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
      padding-top: 1.4rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
