import React from "react";
import Popup from "reactjs-popup";

export default function Modal({ Icon, colorIcon, name, children }) {
  return (
    <Popup
      trigger={
        <button type="button">
          <Icon color={colorIcon} size={15} />
          <span>{name}</span>
        </button>
      }
      modal
      position="center center"
      contentStyle={{
        width: "450px",
        borderRadius: "4px",
        padding: "25px 25px 0px 25px",
      }}
      overlayStyle={{
        background: "rgb(0, 0, 0, 0.7)",
        border: "rgb(0, 0, 0, 0.7)",
      }}
    >
      {children}
    </Popup>
  );
}
