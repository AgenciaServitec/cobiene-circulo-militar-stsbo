import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { SvgEmail, SvgLocation, SvgPhone } from "../../../images";

export const Contact = ({ location = "" }) => {
  return (
    <Container id="contact">
      <h2 className="title-contact">CONTACTANOS</h2>
      <div className="wrapper-contact">
        <div className="item-contacts">
          <ItemContact
            href="tel:+51 0131717"
            svg={<SvgPhone width="80px" color="#000000" />}
            textHref="013171700"
            description="Lun-Dom 9am-6pm"
          />
          <ItemContact
            svg={<SvgEmail width="80px" color="#000000" />}
            href="mailto:contactos@servitec-peru.com"
            textHref="contacto@cobiene.mil.pe"
            description="Soporte en Linea"
          />

          <ItemContact
            svg={<SvgLocation width="80px" color="#000000" />}
            href="https://goo.gl/maps/EiSoB4t5tQ3rG5YU6"
            textHref={`Chorrillos, Perú ${location}`}
            description="Circulo Militar de Supervisores, Técnicos y SubOficiales"
          />
        </div>
        <div className="wrapper-iframe">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3900.182822107938!2d-77.02182883518618!3d-12.16795324138669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b784f6fb93df%3A0x5907a77c2f4a4c66!2sC%C3%ADrculo%20Militar%20de%20Supervisores%20T%C3%A9cnicos%20y%20Suboficiales%20del%20Ej%C3%A9rcito%20del%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1673904843012!5m2!1ses!2spe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2.5em 1em;
  width: 100%;
  background: #fff;

  .title-contact {
    color: #000;
    font-size: 2em;
    text-align: center;
  }

  .wrapper-contact {
    display: grid;
    grid-template-columns: 1fr;
    ${mediaQuery.minDesktop} {
      grid-template-columns: 1fr 1fr;
    }

    .item-contacts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
      justify-items: center;
      align-content: center;
    }

    .wrapper-iframe {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      iframe {
        width: calc(100% - 20px);
        height: 400px;
      }
    }
  }
`;

const ItemContact = ({ svg, href = "", textHref = "", description = "" }) => {
  return (
    <ContainerContact>
      <div className="icon">{svg}</div>
      <div className="content">
        <a href={href} target="_blank" rel="noreferrer">
          {textHref}
        </a>
        <p>{description}</p>
      </div>
    </ContainerContact>
  );
};

const ContainerContact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 0.5em;

  .icon {
    font-size: 2em;
  }
  .content {
    text-align: center;

    p {
      opacity: 0.9;
    }
    a {
      font-size: 1.2em;
      color: black;
    }
  }
`;
