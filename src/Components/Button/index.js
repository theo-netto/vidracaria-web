import React from "react";

import Button from "./styles";

export default function ButtonIcon({
  Icon,
  action,
  background,
  title,
  ...rest
}) {
  return (
    <Button onClick={action} background={background} {...rest}>
      <Icon color="#fff" size={16} />
      {title}
    </Button>
  );
}
