import React from "react";

import { Label, UnInput } from "./styles";

function Input({ label, ...rest }) {
  return (
    <Label>
      <strong>{label}</strong>
      <UnInput {...rest} />
    </Label>
  );
}

export default Input;
