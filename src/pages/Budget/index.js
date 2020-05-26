import React, { Component } from "react";

import { MdAdd } from "react-icons/md";
import { toast } from "react-toastify";

import Header from "../../Components/Header";
import HeaderList from "../../Components/HeaderList";
import Search from "../../Components/Search";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Pagination from "../../Components/Pagination";

import BudgetItem from "./BudgetItem";

import history from "../../services/history";
import api from "../../services/api";

import { Grid, CheckBox } from "./styles";

export default class Budget extends Component {
  state = {
    budgets: [],
    isCanceled: false,
    isFinished: false,
    isPendent: false,
    searchText: "",
    page: 1,
    pages: 1,
    total: 0,
  };

  async componentDidMount() {
    try {
      const response = await api.get("/budgets");
      this.setState({
        budgets: response.data.items,
        page: response.data.page,
        pages: response.data.pages,
        total: response.data.total,
      });
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }
  }

  togglePendent = async () => {
    const { isPendent } = this.state;

    this.setState({ isCanceled: false, isFinished: false, isPendent: true });

    try {
      let response = await api.get("/budgets/pending");

      this.setState({
        budgets: response.data,
      });
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }

    if (isPendent) {
      let response = await api.get("/budgets");
      this.setState({ isPendent: false, budgets: response.data.items });
    }
  };

  toggleCancelled = async () => {
    const { isCanceled } = this.state;

    this.setState({ isPendent: false, isFinished: false, isCanceled: true });

    try {
      let response = await api.get("/budgets/cancelled");

      this.setState({
        budgets: response.data,
      });
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }

    if (isCanceled) {
      let response = await api.get("/budgets");
      this.setState({ isCanceled: false, budgets: response.data.items });
    }
  };

  toggleFinished = async () => {
    const { isFinished } = this.state;

    this.setState({ isCanceled: false, isPendent: false, isFinished: true });

    try {
      let response = await api.get("/budgets/finish");
      this.setState({
        budgets: response.data,
      });
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }

    if (isFinished) {
      let response = await api.get("/budgets");
      this.setState({ isFinished: false, budgets: response.data.items });
    }
  };

  handleSearch = async (search) => {
    const budgets = await api.get(`/budgets?q=${search}`);
    const finishBudgets = [];
    let total = 0;

    budgets.data.items.map((budget) => {
      const searchBudget = budget.client.name.indexOf(search) > -1;

      if (searchBudget) {
        total += 1;

        finishBudgets.push(budget);
      }
    });
    this.setState({ budgets: finishBudgets, total });
    // const response = await api.get(`/budgets?q=${search}`);
    // this.setState({
    //   isCanceled: false,
    //   isFinished: false,
    //   isPendent: false,
    //   budgets: response.data.items,
    //   searchText: search,
    //   page: response.data.page,
    //   pages: response.data.pages,
    //   total: response.data.total,
    // });
    // console.log(response.data);
  };

  handlePagination = async (n) => {
    const { searchText } = this.state;
    const params = {
      page: n,
      q: searchText,
    };
    const response = await api.get("/budgets", { params });
    this.setState({
      budgets: response.data.items,
      page: response.data.page,
      pages: response.data.pages,
      total: response.data.total,
    });
  };

  render() {
    const {
      budgets,
      isCanceled,
      isFinished,
      isPendent,
      page,
      pages,
      total,
    } = this.state;
    return (
      <>
        <Header page={"budget"} />
        <Container>
          <HeaderList title="Gerenciando Orçamentos">
            <Search
              placeholder="Buscar por Orçamentos"
              callback={this.handleSearch}
            />

            <CheckBox>
              <small>Pendentes</small>
              <input
                type="checkbox"
                checked={isPendent}
                onChange={this.togglePendent}
              />
            </CheckBox>

            <CheckBox>
              <small>Cancelados</small>
              <input
                type="checkbox"
                checked={isCanceled}
                onChange={this.toggleCancelled}
              />
            </CheckBox>

            <CheckBox>
              <small>Finalizados</small>
              <input
                type="checkbox"
                checked={isFinished}
                onChange={this.toggleFinished}
              />
            </CheckBox>

            <Button
              Icon={MdAdd}
              title="CADASTRAR"
              type="button"
              action={() => history.push("/budget/form")}
            />
          </HeaderList>

          <Grid>
            <section>
              <strong>ID</strong>
              <strong>Cliente</strong>
              <strong>Endereço</strong>
              <strong>Descrição</strong>
              <strong>Status</strong>
              <strong>Ações</strong>
            </section>

            {budgets.map((budget) => (
              <BudgetItem key={budget.id} data={budget} />
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
