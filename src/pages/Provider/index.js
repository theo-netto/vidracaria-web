import React, { Component } from "react";
import { MdAdd } from "react-icons/md";

import Header from "../../Components/Header";
import HeaderList from "../../Components/HeaderList";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Pagination from "../../Components/Pagination";

import ProviderItem from "./ProviderItem";

import history from "../../services/history";
import api from "../../services/api";

import { Grid } from "./styles";

export default class Provider extends Component {
  state = {
    providers: [],
    page: 0,
    pages:0,
    total:0
  };

  async componentDidMount() {
    const response = await api.get("/providers");
    this.setState({
      providers: response.data.items,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    });
  }

  handleSearch = async (search) => {
    const response = await api.get(`/providers?q=${search}`);
    this.setState({
      providers: response.data.items,
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
    const response = await api.get("/providers", { params });
    this.setState({
      providers: response.data.items,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    });
  };

  render() {
    const { providers, page, total, pages } = this.state;
    return (
      <>
        <Header page={"provider"} />
        <Container>
          <HeaderList title="Gerenciando Fornecedores">
            <Search
              placeholder="Buscar por Fornecedores"
              callback={this.handleSearch}
            />

            <Button
              Icon={MdAdd}
              title="CADASTRAR"
              type="button"
              action={() => history.push("/provider/form")}
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

            {providers.map((provider) => (
              <ProviderItem key={provider.id} data={provider} />
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
