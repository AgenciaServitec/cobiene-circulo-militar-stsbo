import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NewLogoCobiene } from "../../../images";

export const HeaderMobile = ({ setVideosSedes, setVisibleDrawer }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        className="item-logo"
        onClick={() => {
          setVideosSedes(false);
        }}
      >
        <img
          src={NewLogoCobiene}
          alt="Logo Circulo militar"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="icon-bar" onClick={() => setVisibleDrawer(true)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  background: #fff;
  display: grid;
  grid-template-columns: 85% 1fr;

  .item-logo {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.5em 1em;

    img {
      width: 20em;
      max-width: 220px;
    }
  }

  .icon-bar {
    width: auto;
    height: 100%;
    padding: 0.7rem 0.1rem 0.7rem 1.7rem;
  }
`;
