import React from "react";

import Select from "react-select";

import { Container, Label } from "./styles";

function AsyncInput({ label, ...rest }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select cacheOptions defaultOptions {...rest} />
      {/* {error && <Error>{error}</Error>} */}
    </Container>
  );
}

export default AsyncInput;
