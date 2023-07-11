import React from "react";
import styled from "styled-components";
import { Form, Input } from "../../components/public";

export const Login = () => {
  return (
    <Container>
      <Form>
        <Input label="User" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1em;
`;
