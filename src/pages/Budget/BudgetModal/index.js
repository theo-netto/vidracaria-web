import React from "react";
import { MdRemoveRedEye } from "react-icons/md";

import Modal from "../../../Components/Modal";

import { Container } from "./styles";

export default function BudgetModal({ data }) {
  return (
    <Modal name="Visualizar" Icon={MdRemoveRedEye} colorIcon="#ffa500">
      <Container>
        <div>
          <h1>Informações do Orçamento</h1>
        </div>

        <div>
          <br />
          <strong>Cliente</strong>
          {/* <br /> */}
          <small>Cliente : {data.client.name}</small>
          <small>Telefone : {data.client.telephone}</small>
          <small>{data.client.email && "Email : " + data.client.email}</small>
          <br />
        </div>
        <div>
          <br />
          <strong>Endereço</strong>
          {/* <br /> */}
          <small>
            {data.address.street}, {data.address.number}{" "}
            {data.address.neighborhood}
          </small>
          <small>
            {data.address.city}-{data.address.uf}
          </small>
          <br />
        </div>
        {data.canceled_at && (
          <div>
            <br />
            <strong>Cancelada</strong>
            {/* <br /> */}
            <small>Data do Cancelamento : {data.canceled_at}</small>
            <br />
          </div>
        )}
        {data.finished_at && (
          <div>
            <br />
            <strong>Finalizada</strong>
            {/* <br /> */}
            <small>Data do termino da Obra : {data.finished_at}</small>
            <br />
          </div>
        )}
        <br />
      </Container>
    </Modal>
  );
}
