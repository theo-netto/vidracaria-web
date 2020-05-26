import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

import Header from "../../Components/Header";
import HeaderList from "../../Components/HeaderList";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Pagination from "../../Components/Pagination";

import ClientItem from "./ClientItem";

import history from "../../services/history";
import api from "../../services/api";

import { Grid } from "./styles";

export default class Client extends Component {
  state = {
    clients: [],
    searchText: "",
    page: 1,
    pages: 1,
    total: 0,
  };

  async componentDidMount() {
    const response = await api.get("/clients");
    this.setState({
      clients: response.data.items,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    });
  }

  handleSearch = async (search) => {
    const response = await api.get(`/clients?q=${search}`);
    this.setState({
      clients: response.data.items,
      searchText: search,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    });
  };

  handlePagination = async (n) => {
    const { searchText } = this.state;
    const params = {
      page: n,
      q: searchText,
    };
    const response = await api.get("/clients", { params });
    this.setState({
      clients: response.data.items,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    });
  };

  render() {
    const { clients, page, pages, total } = this.state;
    return (
      <>
        <Header page={"client"} />
        <Container>
          <HeaderList title="Gerenciando Clientes">
            <Search
              placeholder="Buscar por Clientes"
              callback={this.handleSearch}
            />
            <Button
              Icon={MdAdd}
              title="CADASTRAR"
              type="button"
              action={() => history.push("/client/form")}
            />
          </HeaderList>
          <Grid>
            <section>
              <strong>ID</strong>
              <strong>Nome</strong>
              <strong>Email</strong>
              <strong>Telefone</strong>
              <strong>Ações</strong>
            </section>

            {clients.map((client) => (
              <ClientItem key={client.id} data={client} />
            ))}
          </Grid>
          <Pagination
            total={total}
            page={page}
            pages={pages}
            callback={this.handlePagination}
          />
        </Container>
      </>
    );
  }
}
