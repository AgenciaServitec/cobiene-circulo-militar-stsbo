import React from "react";
import { Products } from "../../components/public/home/Products";
import styled from "styled-components";
import { FormContact } from "../../components/public";

export const PageProducts = ({
  onClickVisibleFormContact,
  visibleFormContact,
}) => {
  return (
    <>
      <Container>
        <Products
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
