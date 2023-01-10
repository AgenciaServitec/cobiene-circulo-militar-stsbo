import React from "react";
import styled from "styled-components";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
} from "../../../images";
import { Button } from "../ui";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { ItemProducts } from "./ItemProducts";

export const Products = ({ onClickVisibleFormContact }) => {
  // const navigate = useNavigate();
  return (
    <Container>
      <div className="content-items">
        <div className="heading">
          <h2 className="title">+ Productos</h2>
          <h5 className="subtitle">nuestros productos</h5>
        </div>
        <div className="content-img">
          <ItemProducts
            img={Product1}
            title="EXTINTOR E--001 "
            content="Agente extintor: Polvo Polivalente ABC
                    Gas impulsor: Nitrógeno
                    Presurización: Permanente
                    Peso de carga: 01 Kg.
                    Altura: 340 mm
                    Diámetro: 70 mm
                    Temperatura: 20 - 50 ºC
                    Tiempo de descarga: 5 seg.
                    Fabricados: según NTP 350.043
                    Tipos de Fuego: ABC "
          />
          <ItemProducts
            img={Product2}
            title="EXTINTOR E-002"
            content="Agente extintor: Polvo Polivalente ABC
Gas impulsor: Nitrógeno
Presurización: Permanente
Peso de carga: 02 Kg.
Altura: 380 mm
Diámetro: 98 mm
Temperatura: 20 - 50 ºC
Tiempo de descarga: 8 seg.
Fabricados: según NTP 350.043
Tipos de Fuego: ABC"
          />
          <ItemProducts
            img={Product3}
            title="EXTINTOR E-003"
            content="Agente extintor: Polvo Polivalente ABC
Gas impulsor: Nitrógeno
Presurización: Permanente
Peso de carga: 04 Kg.
Altura: 390 mm
Diámetro: 142 mm
Temperatura: 5 - 50 ºC
Tiempo de descarga: 15 seg.
Fabricados: según NTP 350.043
Tipos de Fuego: ABC"
          />
          <ItemProducts
            img={Product4}
            title="EXTINTOR E-004"
            content="Agente extintor: Polvo Polivalente ABC
Gas impulsor: Nitrógeno
Presurización: Permanente
Peso de carga: 06 Kg.
Altura: 520 mm
Diámetro: 142 mm
Temperatura de trabajo: 5 - 50 ºC
Tiempo de descarga: 20 seg.
Fabricados: según NTP 350.043
Tipos de Fuego: ABC"
          />
          <ItemProducts
            img={Product5}
            title="EXTINTOR E-005"
            content="Agente extintor: Polvo Polivalente ABC
Gas impulsor: Nitrógeno
Presurización: Permanente
Peso de carga: 09 Kg.
Altura: 550 mm
Diámetro: 160 mm
Temperatura de trabajo: 5 - 50 ºC
Tiempo de descarga: 25 seg.
Fabricados: según NTP 350.043
Tipos de Fuego: ABC"
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
