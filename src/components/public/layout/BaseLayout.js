import React, { useState } from "react";
import styled from "styled-components";
import { LogoCobiene } from "../../../images";
import { useDevice } from "../../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "./Drawer";
import { useNavigate } from "react-router";
import { Footer } from "./Footer";
import { ButtonsFloating, WrapperComponent } from "../ui";
import { useFormContact } from "../../../providers";
import { mediaQuery } from "../../../styles/constants/mediaQuery";
import { HeaderDesktop } from "./HeaderDesktop";

export const BaseLayout = ({
  children,
  sectionVideo,
  onVideosSedes,
  setVideosSedes,
}) => {
  const { isMobile } = useDevice();
  const navigate = useNavigate();

  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const { visibleFormContact, setVisibleFormContact } = useFormContact();
  const handleVisibleFormContact = () =>
    setVisibleFormContact(!visibleFormContact);

  return (
    <Container>
      <Drawer
        visibleDrawer={visibleDrawer}
        onSetVisibleDrawer={setVisibleDrawer}
        visibleFormContact={visibleFormContact}
        handleVisibleFormContact={handleVisibleFormContact}
        onVideosSedes={onVideosSedes}
        sectionVideo={sectionVideo}
      />
      <header className="header">
        <WrapperComponent>
          <>
            {isMobile ? (
              <div className="menu-mobile">
                <div
                  className="item-logo"
                  onClick={() => {
                    setVideosSedes(false);
                  }}
                >
                  <img
                    src={LogoCobiene}
                    alt="Logo Servitec Facil Factura"
                    onClick={() => navigate("/")}
                  />
                </div>
                <div
                  className="icon-bar"
                  onClick={() => setVisibleDrawer(true)}
                >
                  <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
              </div>
            ) : (
              <HeaderDesktop
                handleVisibleFormContact={handleVisibleFormContact}
              />
            )}
          </>
        </WrapperComponent>
      </header>
      <main className="body">{children}</main>
      <Footer />
      <ButtonsFloating />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  min-height: 100vh;
  height: auto;
  position: relative;
  ${mediaQuery.minTablet} {
    width: calc(100% - 100px);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.font2};
    font-family: "Intro Demo", sans-serif;
  }

  h1 {
    font-size: 2.7rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.font1};

    ${mediaQuery.minTablet} {
      font-size: 6rem;
    }
  }

  h2 {
    font-size: 2.1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.font1};

    ${mediaQuery.minTablet} {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 3rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  p,
  ul,
  li,
  span {
    color: ${({ theme }) => theme.colors.font3};
  }

  .header {
    background: ${({ theme }) => theme.colors.basic};
    position: absolute;
    width: 100%;
    height: auto;
    background: transparent;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 1rem;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 500;

    .menu-mobile {
      width: 100%;
      color: ${({ theme }) => theme.colors.black};
      display: grid;
      grid-template-columns: 85% 1fr;

      .item-logo {
        display: flex;
        align-items: center;
        justify-content: start;

        img {
          width: 12%;
          padding-bottom: 1.5rem;
          max-width: 220px;
        }
      }

      .icon-bar {
        width: auto;
        height: 100%;
        padding: 0.7rem 0.1rem 0.7rem 1.7rem;
      }
    }
  }

  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
