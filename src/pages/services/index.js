import React from "react";
import { AboutService } from "../../components/public/home/AboutService";
import styled from "styled-components";
import { FormContact } from "../../components/public";

export const ServicesExtinguisher = ({
  onClickVisibleFormContact,
  visibleFormContact,
}) => {
  return (
    <>
      <Container>
        <AboutService
          onClickVisibleFormContact={onClickVisibleFormContact}
          visibleFormContact={visibleFormContact}
        />
      </Container>
      <FormContact
        visibleFormContact={visibleFormContact}
        onClickVisibleFormContact={onClickVisibleFormContact}
      />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
