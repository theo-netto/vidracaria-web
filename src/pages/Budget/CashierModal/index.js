import React, { Component } from "react";
import { MdAttachMoney, MdAdd } from "react-icons/md";

import Modal from "../../../Components/Modal";

import { Container, Action, Input } from "./styles";

import api from "../../../services/api";

export default class CashierModal extends Component {
  state = {
    actions: [],
    total: {},
    newDescription: "",
    newValue: "",
  };

  async componentDidMount() {
    const { data } = this.props;

    const response = await api.get(`/actions/budget/${data.id}`);
    const total = await api.get(`/actions/total/budget/${data.id}`);

    this.setState({
      actions: response.data,
      total: {
        input: total.data.input,
        value: total.data.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });
  }

  addAction = async () => {
    const { data } = this.props;
    const { actions, newDescription, newValue } = this.state;
    let input = true;

    if (newValue < 0) {
      input = false;
    }

    try {
      const response = await api.post("/actions", {
        description: newDescription,
        value: newValue,
        input,
        budget_id: data.id,
      });

      const total = await api.get("/actions/total");

      this.setState({
        actions: [...actions, response.data],
        total: {
          input: total.data.input,
          value: total.data.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
        },
      });
    } catch (error) {
      alert("Algo deu Errado ! Tente Novamente");
    }

    this.setState({ newDescription: "", newValue: "" });
  };

  render() {
    const { actions, total, newDescription, newValue } = this.state;

    return (
      <Modal name="Caixa" Icon={MdAttachMoney} colorIcon="#2CA42B">
        <Container>
          <div>
            <h1>Caixa do Orçamento</h1>
          </div>

          {actions.map((action) => (
            <Action key={action.id} input={action.input}>
              <div>
                <span>{action.description}</span>
                <small>
                  {action.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </small>
              </div>
            </Action>
          ))}

          <Action total input={total.input}>
            <div>
              <strong>TOTAL</strong>
              <small>{total.value}</small>
            </div>
          </Action>

          <Input>
            <input
              type="text"
              placeholder="Descrição"
              value={newDescription}
              onChange={(e) => {
                this.setState({ newDescription: e.target.value });
              }}
            />

            <input
              type="text"
              placeholder="Valor"
              value={newValue}
              onChange={(e) => {
                this.setState({ newValue: e.target.value });
              }}
            />

            <button type="button" onClick={() => this.addAction()}>
              <MdAdd size={16} color="#ffa500" />
            </button>
          </Input>
        </Container>
      </Modal>
    );
  }
}
