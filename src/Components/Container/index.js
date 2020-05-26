import React from "react";

import { Container, Content } from "./styles";

export default function ContainerBox({ children }) {
  return (
    <Container>
      {/* Container para o Conteudo abaixo do Header */}
      {children && <Content>{children}</Content>}
    </Container>
  );
}
