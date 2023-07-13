import React, { useState } from "react";
import styled from "styled-components";
import { useDevice } from "../../../hooks";
import { BoxAddress, Drawer, Footer, HeaderDesktop, HeaderMobile } from "./";
import { ButtonsFloating } from "../ui";
import { useFormContact } from "../../../providers";
import { mediaQuery } from "../../../styles/constants/mediaQuery";

export const BaseLayout = ({
  children,
  sectionVideo,
  onVideosSedes,
  setVideosSedes,
}) => {
  const { isMobile } = useDevice();

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
      <BoxAddress />
      <header className="header">
        <>
          {isMobile ? (
            <HeaderMobile
              setVisibleDrawer={setVisibleDrawer}
              setVideosSedes={setVideosSedes}
            />
          ) : (
            <HeaderDesktop
              handleVisibleFormContact={handleVisibleFormContact}
            />
          )}
        </>
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
  ${mediaQuery.minDesktop} {
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

  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
