import React from "react";
import { MdDone } from "react-icons/md";

import Button from "../Button";

function SaveButton({ action }) {
  return <Button Icon={MdDone} action={action} title="Salvar" />;
}

export default SaveButton;
