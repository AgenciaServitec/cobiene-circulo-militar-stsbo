import React from "react";
import styled from "styled-components";
import { FlipBookComponent } from "../../components/public";

export const FlipBook = () => {
  return (
    <Container>
      <WrapperComponents>
        <FlipBookComponent />
      </WrapperComponents>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: auto;
`;

const WrapperComponents = styled.div`
  width: 100%;
  max-width: 1250px;
  height: auto;
  margin: auto;
`;
