import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { LogoCobiene } from "../../../images";

export const HeaderDesktop = ({ handleVisibleFormContact }) => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to="/">
        <li>INICIO</li>
      </Link>

      {pathname === "/" ? (
        <a href="#about-us">
          <li>NOSOTROS</li>
        </a>
      ) : (
        <Link to="/">
          <li>NOSOTROS</li>
        </Link>
      )}

      {pathname === "/" ? (
        <a href="#sedes">
          <li>SEDES</li>
        </a>
      ) : (
        <Link to="/">
          <li>SEDES</li>
        </Link>
      )}

      <li>
        <Link to="/">
          <img src={LogoCobiene} alt="Cobiene logo" />
        </Link>
      </li>

      <Link to="/galleria">
        <li>GALERÍA</li>
      </Link>
      <a
        onClick={() => {
          handleVisibleFormContact();
        }}
      >
        <li>SOCIO</li>
      </a>
      <a href="#contact">
        <li>CONTÁCTO</li>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100%, 10px);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    color: rgb(253, 253, 253);
    font-weight: bold;
    font-size: 1.1rem;
    font-family: inherit !important;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    margin-left: 1.5rem;
    cursor: pointer;
    img {
      width: 6rem;
    }
  }

  li:hover {
    color: rgb(121, 131, 140);
    border-bottom: 2px solid rgb(246, 70, 93);
    transition: all 0.3s ease-in-out;
  }

  .logo-img {
    width: 20%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 3.5rem;
    }
  }

  .list {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0;
      margin: 0;

      li {
        color: rgb(11, 12, 16);
        font-weight: bold;
        font-size: 1.1rem;
        font-family: inherit !important;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in-out;
        margin-left: 1.5rem;
        cursor: pointer;
      }

      li:hover {
        color: rgb(121, 131, 140);
        border-bottom: 2px solid rgb(246, 70, 93);
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
