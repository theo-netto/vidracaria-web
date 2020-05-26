import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

import Header from "../../Components/Header";
import HeaderList from "../../Components/HeaderList";
import Container from "../../Components/Container";

import api from "../../services/api";

import { Action, ActionTable, Input, Actions } from "./styles";

export default class Cashier extends Component {
  state = {
    actions: [],
    total: {},
    newDescription: "",
    newValue: "",
  };

  async componentDidMount() {
    const response = await api.get("/actions");
    const total = await api.get("/actions/total");

    this.setState({
      actions: response.data.items,
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
    const { newDescription, newValue, actions } = this.state;
    let input = true;

    if (newValue < 0) {
      input = false;
    }

    try {
      const response = await api.post("/actions", {
        description: newDescription,
        value: newValue,
        input,
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
      alert("Algo deu errado ! Tente Novamente !");

      console.log(error);
    }

    this.setState({ newDescription: "", newValue: "" });
  };

  render() {
    const { actions, total, newDescription, newValue } = this.state;
    return (
      <>
        <Header page={"cashier"} />
        <Container>
          <HeaderList title="Caixa" />
          <ActionTable>
            
            <Actions>
              <div></div>
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
            </Actions>
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
                <MdAdd size={20} color="#ffa500" />
              </button>
            </Input>
          </ActionTable>
        </Container>
      </>
    );
  }
}
