import React from "react";
import styled from "styled-components";
import {
  SvgEmail,
  SvgLocation,
  SvgPhone,
  LogoCobiene,
} from "../../../images";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { WrapperComponent } from "../ui";
import { contactData } from "../../../firebase";
import { capitalize } from "lodash";

export const Footer = ({ onEventGaClickIcon, onEventGaClickLink }) => (
  <Container id="footer">
    <WrapperComponent>
      <>
        <div className="item-logo-footer">
          <div className="item-logo">
            <img src={LogoCobiene} alt="Logo publicidad google" />
          </div>
          <div className="item-text">
            <h3>¡Trabajando por su bienestar!</h3>
            <h4 className="content-contact">
              Contáctanos: 01 6449277
            </h4>
            <span className="content-somos">Circulo de Sub Oficiales</span>
          </div>
          <div className="items-socials">
            <ul>
              <li
                onClick={() =>
                  onEventGaClickIcon(
                    "click-icon-wsp-941801827",
                    "Click icon wsp 941 801 827"
                  )
                }
              >
                <a
                  href="https://goo.gl/maps/JpygwD7qvhcNVU9E6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </a>
              </li>
              <li
                onClick={() =>
                  onEventGaClickIcon(
                    "click-icon-wsp-941801827",
                    "Click icon wsp 941 801 827"
                  )
                }
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=+51929054672&text=Estoy+interesado+%2F+servicio&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@cobiene.mil.pe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li
              >
                <a
                  href="https://www.facebook.com/ACMSTS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="items-contacts">
          <div className="item-contact">
            <div className="icon">
              <SvgPhone width="80px" />
            </div>
            <div
              className="content"
              onClick={() =>
                onEventGaClickLink(
                  "click-link-telefono-941801827",
                  "Click link telefono 941801827"
                )
              }
            >
              <a href="tel:+51929054672" target="_blank" rel="noreferrer">
                929054672
              </a>
              <p> Lun-Dom 9am-6pm</p>
            </div>
          </div>

          <div className="item-contact">
            <div className="icon">
              <SvgEmail width="80px" />
            </div>
            <div
              className="content"
              onClick={() =>
                onEventGaClickLink(
                  "click-link-email-contactos@servitec-peru.com",
                  "Click link email contactos@servitec-peru.com"
                )
              }
            >
              <a
                href="mailto:contacto@cobiene.mil.pe"
                target="_blank"
                rel="noreferrer"
              >
                contacto@cobiene.mil.pe
              </a>
              <p>Soporte en Linea</p>
            </div>
          </div>

          <div className="item-contact">
            <div className="icon">
              <SvgLocation width="80px" />
            </div>
            <div
              className="content"
            >
              <a
                href="https://goo.gl/maps/JpygwD7qvhcNVU9E6"
                target="_blank"
                rel="noreferrer"
              >
                Chorrillos, Perú
              </a>
              <p>Av. Escuela Militar 990, Chorrillos 15064</p>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div>
            © Copyright 2022 - {capitalize(contactData.name)} / Diseñado con{" "}
            <FontAwesomeIcon icon={faHeart} color="red" /> por{" CiculaMilitarsts"}
          </div>
        </div>
      </>
    </WrapperComponent>
  </Container>
);

const Container = styled.footer`
  width: 100%;
  height: auto;
  padding: 4rem 0 0 0;
  background: ${({ theme }) => theme.colors.secondary};

  .item-logo-footer {
    margin: 1rem 1rem;
    .item-logo {
      display: flex;
      justify-content: center;
      img {
        //display: none;
        width: 4rem;
        height: auto;
        //margin: 0.3rem 0 1.2rem 0;
      }
    }
    .item-text {
      text-align: center;
      //margin-bottom: 6rem;
      padding-top: 1rem;
      position: relative;
      text-align: center;
      width: 100%;
      ${mediaQuery.maxMobile} {
        padding: 0.5em;
      }
      span {
        font-size: 147px;
        left: 0;
        line-height: 102px;
        text-align: center;
        width: 100%;
      }
      .content-contact {
        margin-top: -1.5rem;
        font-family: "Intro Demo", sans-serif;
        font-size: 26px;
        letter-spacing: 0.3px;
        text-align: center;
        width: 100%;
      }
      .content-somos {
        margin-top: -0.5rem;
        font-family: "Intro Demo", sans-serif;
        font-size: 26px;
        letter-spacing: 0.3px;
        text-align: center;
        width: 100%;
      }
    }
    .items-socials {
      width: 100%;
      margin: 3rem auto;
      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        &:after {
          content: "";
          width: 80%;
          height: 1px;
          bottom: 0;
          text-align: center;
          position: absolute;
          margin-top: 2rem;
        }
        li {
          margin-bottom: 1.7rem;
          a {
            color: ${({ theme }) => theme.colors.white};
            padding: 0 1rem;
            font-size: 2.5rem;
            padding: 0 1rem;
          }
          &:last-child {
            span {
              border-right: none;
            }
          }
        }
      }
    }
  }

  .items-contacts {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .item-contact {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 1rem;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr auto;
      }
      .icon {
        font-size: 3rem;
      }
      .content {
        text-align: center;
        line-height: 3rem;
        p {
          opacity: 0.4;
        }
        a {
          font-size: 1.5rem;
          color: #fff;
        }
        a:hover {
          color: #292929;
        }
      }
    }
  }
  .bottom-footer {
    width: 100%;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.font1};
    div {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      a {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
