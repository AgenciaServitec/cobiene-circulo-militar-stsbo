import React from "react";
import styled from "styled-components";
import { Contact} from "../../components/public";

export const SedeTarapaca = ({
  onClickVisibleFormContact,
  visibleFormContact,
}) => {
  return (
    <>
        <Container>

        <Contact/>
      </Container>


    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;
