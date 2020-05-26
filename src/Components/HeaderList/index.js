import React from "react";

import { Container, Content } from "./styles";

export default function HeaderList({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      {children && <Content>{children}</Content>}
    </Container>
  );
}
