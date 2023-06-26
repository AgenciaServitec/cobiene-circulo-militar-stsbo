import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const BoxAddress = () => {
  return (
    <Container>
      <div className="item-address">
        <span>
          <a href="#">Av. Escuela Militar 990, chorrillos 15064</a>
        </span>
      </div>

      <div className="item-icon">
        <a href="https://www.facebook.com/C%C3%ADrculo-Militar-STS-307692109354465" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #86895d;
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;

  .item-address {
    span {
      a {
        color: #fff;
        font-size: 0.6em;
      }
    }
  }

  .item-icon {
    svg {
      cursor:pointer;
      color: #fff;
      font-size: 1.5em;
      margin-left: 0.5em;
    }
  }
`;
