import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { NewLogoCobiene } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const HeaderDesktop = ({ handleVisibleFormContact }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <div className="nav-left">
        <img src={NewLogoCobiene} alt="Logo Circulo militar" loading="lazy" />
      </div>

      <div className="nav-right">
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>

          <li>
            {pathname === "/" ? (
              <a href="#sedes">SEDES</a>
            ) : (
              <Link to="/">SEDES</Link>
            )}
          </li>
          <li>
            {pathname === "/" ? (
              <a href="#galleria">GALERIA</a>
            ) : (
              <Link to="/">GALERIA</Link>
            )}
          </li>

          <li>
            <a
              onClick={() => {
                handleVisibleFormContact();
              }}
            >
              SOCIO
            </a>
          </li>
          <li>
            <a href="#contact">CONTÁCTO</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  width: 100%;
  padding: 1em 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-left {
    img {
      width: 100%;
      max-width: 15em;
      height: auto;
      ${mediaQuery.minTablet} {
        max-width: 18em;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      color: #000;
      font-weight: bold;
      font-size: 1em;
      font-family: "Intro Demo", sans-serif;
      border-bottom: 2px solid transparent;
      transition: 0.1s;
      margin-left: 1.5rem;
      cursor: pointer;
      a {
        color: inherit;
      }
    }
    li:hover {
      color: #86895d;
      border-bottom: 2px solid rgb(246, 70, 93);
      transition: 0.1s;
    }
  }
`;
