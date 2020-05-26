import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GiImperialCrown } from "react-icons/gi";

import { Container, Logo, Span, Logout } from "./styles";

import { logoutFunction } from "../../services/auth";

class Header extends Component {
  state = {
    budget: false,
    client: false,
    provider: false,
    cashier: false,
  };

  componentDidMount() {
    const { page } = this.props;
    console.log(this.props);
    switch (page) {
      case "budget":
        this.setState({ budget: true });
        break;
      case "client":
        this.setState({ client: true });
        break;
      case "provider":
        this.setState({ provider: true });
        break;
      case "cashier":
        this.setState({ cashier: true });
        break;

      default:
        break;
    }
  }

  render() {
    const { budget, client, provider, cashier } = this.state;
    return (
      <Container>
        <div>
          <Link to="/">
            <Logo>
              <GiImperialCrown size={26} color="#ffa500" />
              <h1>VIDRAÇARIA IMPERIAL</h1>
            </Logo>
          </Link>
          <Link to="/budget">
            <Span primary={budget}>ORÇAMENTOS</Span>
          </Link>
          <Link to="/client">
            <Span primary={client}>CLIENTES</Span>
          </Link>
          <Link to="/provider">
            <Span primary={provider}>FORNECEDORES</Span>
          </Link>
          <Link to="/cashier">
            <Span primary={cashier}>CAIXA</Span>
          </Link>
        </div>
        <Logout>
          <span>Admin Vidraçaria</span>

          <button onClick={() => logoutFunction()}>
            <small>Sair do sistema</small>
          </button>
        </Logout>
      </Container>
    );
  }
}

export default Header;
