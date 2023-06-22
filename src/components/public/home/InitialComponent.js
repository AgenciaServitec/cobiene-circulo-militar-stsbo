import React from "react";
import styled from "styled-components";
import { Linea } from "../../../images";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const InitialComponent = ({ bgImage, description }) => {
  return (
    <Container bgImage={bgImage}>
      <div className="content-items" line={Linea}>
        <div className="content">
          <div className="heading">
            <h2 className="description">{description}</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  background: url(${({ bgImage }) => bgImage}) no-repeat scroll 0 0 / 100% 100%
    rgba(0, 0, 0, 0);
  ${mediaQuery.minDesktop} {
    padding: 10em 0;
  }

  .content-items {
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;

    ${mediaQuery.minTablet} {
      grid-template-columns: 1fr;
      padding: 6rem 4rem 4rem 4rem;
    }

    .content {
      padding-left: 0;
      ${mediaQuery.minTablet} {
        grid-template-columns: 1fr;
      }

      .heading {
        text-align: center;
        ${mediaQuery.maxMobile} {
          padding: 2em 1rem 2rem 1rem;
        }
        .title {
          color: ${({ theme }) => theme.colors.font1};
          font-weight: 800;
          font-family: "Intro Demo", sans-serif;
          font-size: 1.5rem;
          padding-top: 1.2rem;
          ${mediaQuery.minTablet} {
            grid-template-columns: 1fr;
            padding-bottom: 1.2rem;
          }
        }

        .description {
          padding-top: 2rem;
          color: ${({ theme }) => theme.colors.tertiary};
          max-width: 85rem;
          font-weight: 500;
          font-size: 4rem;
          font-family: "Intro Demo", sans-serif;
          line-height: 4.5rem;
          ${mediaQuery.minTablet} {
            font-size: 5.4rem;
          }
          ${mediaQuery.maxMobile} {
            font-size: 2.7rem;
            line-height: 3.5rem;
          }
        }
        h3 {
          font-size: 1.5em;
          ${mediaQuery.minTablet} {
            font-size: 1.7em;
          }
        }
      }

      .list-about {
        margin: 1rem 1.5rem;

        ul {
          li {
            width: auto;
            background: transparent;
            color: ${({ theme }) => theme.colors.font3};
            list-style: none;
            margin-bottom: 0.5rem;

            svg {
              margin-right: 0.7rem;
            }
          }
        }
      }
    }
    .content-img {
      margin-top: 1rem;
      text-align: center;
      .wrapper-form {
        width: 100%;
        max-width: 30em;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
        padding: 1.5rem 2rem;
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
`;
