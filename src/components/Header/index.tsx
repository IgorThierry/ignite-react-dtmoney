import React from "react";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Rocketseat dt money" />
        <button type="button">nova transação</button>
      </Content>
    </Container>
  );
};
