import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

import Button from "../Button";
import history from "../../services/history";

function BackButton() {
  return (
    <Button
      Icon={MdKeyboardArrowLeft}
      action={history.goBack}
      title="Voltar"
      background="#CCC"
    />
  );
}

export default BackButton;
