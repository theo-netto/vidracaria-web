import React, { Component } from "react";
import { MdDeleteForever } from "react-icons/md";

import { toast } from "react-toastify";

import Modal from "../Modal";

import { Container, Button } from "./styles";

import api from "../../services/api";

export default class CancellationModal extends Component {
  HandleDel = async () => {
    const { data, route } = this.props;

    console.log(data);
    console.log(data.id);

    console.log(route);
    console.log(typeof route);

    try {
      await api.delete(`/${route}/${data.id}`);
      toast.sucess("Deletado com Sucesso");

    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }
  };

  render() {
    return (
      <Modal name="Excluir" Icon={MdDeleteForever} colorIcon="#DE3B3B">
        <Container>
          <div>
            <h1>Atenção</h1>
          </div>

          <div>
            <strong>Você tem certeza que quer apagar ?</strong>
          </div>

          <Button>
            <MdDeleteForever color="#fff" size={16} />
            <button onClick={() => this.HandleDel()}>Deletar</button>
          </Button>
        </Container>
      </Modal>
    );
  }
}
