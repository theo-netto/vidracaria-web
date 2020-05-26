import React, { Component } from "react";
import { GiImperialCrown } from "react-icons/gi";
import { toast } from "react-toastify";

import { Container, Form } from "./styles";

import { login } from "../../services/auth";
import api from "../../services/api";
import history from "../../services/history";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await api.post("/session", { email, password });
      const { data } = response;
      const teste = login(data.token);
      console.log(data);
      console.log(teste);
      history.push("/budget");
    } catch (error) {
      toast.error("Algo deu errado no Login, tente Novamente");
      console.log(error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleLogin}>
          <GiImperialCrown size={46} />
          <h1>Vidraçaria Imperial</h1>
          <input
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}
