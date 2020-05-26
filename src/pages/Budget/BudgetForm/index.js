import React, { Component } from "react";

import { FcCancel } from "react-icons/fc";
import { FiCheck } from "react-icons/fi";

import { toast } from "react-toastify";

import Header from "../../../Components/Header";
import HeaderForm from "../../../Components/HeaderForm";
import Container from "../../../Components/Container";
import BackButton from "../../../Components/BackButton";
import SaveButton from "../../../Components/SaveButton";
import AsyncInput from "../../../Components/AsyncInput";
import Input from "../../../Components/Input";

import api from "../../../services/api";
import history from "../../../services/history";

import { Form, Description, AddressInput, Button, Update } from "./styles";

export default class budgetform extends Component {
  state = {
    title: "Cadastro de Orçamentos",
    value: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    uf: "",
    description: "",
    clientSelect: null,
    clientOptions: [],
    addressId: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.setState({
        title: "Edição de Orçamentos",
      });

      try {
        const response = await api.get(`/budgets/one/${id}`);
        const { data } = response;

        this.setState({
          value: data.value,
          description: data.description,

          street: data.address.street,
          number: data.address.number,
          neighborhood: data.address.neighborhood,
          city: data.address.city,
          uf: data.address.uf,
          addressId: data.address.id,
          clientSelect: { value: data.client.id, label: data.client.name },
        });
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    }

    try {
      let options = [];

      const response = await api.get("/clients");

      response.data.items.map((client) => {
        options.push({ value: client.id, label: client.name });
      });

      this.setState({ clientOptions: options });
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }
  }

  apiBudget = async () => {
    const { id } = this.props.match.params;
    const {
      value,
      street,
      number,
      neighborhood,
      city,
      uf,
      description,
      clientSelect,
      addressId,
    } = this.state;

    if (id) {
      try {
        await api.put(`/budgets/${id}`, {
          value,
          description,
          client_id: clientSelect.value,
        });
        await api.put(`/address/${addressId}`, {
          street,
          number,
          neighborhood,
          city,
          uf,
        });
        toast.info("Orçamento editado com Sucesso");
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    } else {
      try {
        const address = await api.post(`/address`, {
          street,
          number,
          neighborhood,
          city,
          uf,
        });

        await api.post(`/budgets`, {
          value,
          description,
          address_id: address.data.id,
          client_id: clientSelect.value,
        });

        toast.success("Orçamento criado com Sucesso");
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    }

    history.push("/budget");
  };

  handleFinish = async () => {
    const { id } = this.props.match.params;
    try {
      await api.put(`/budgets/${id}/finish`);
      toast.success("Finalizado Sucesso");

      history.push("/budget");
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }
  };

  handleCancell = async () => {
    const { id } = this.props.match.params;
    try {
      await api.put(`/budgets/${id}/cancellation`);
      toast.error("Cancelado com Sucesso");

      history.push("/budget");
    } catch (error) {
      toast.error("Algo deu errado! Tente Novamente mais Tarde");
    }
  };

  render() {
    const {
      title,
      value,
      street,
      number,
      neighborhood,
      city,
      uf,
      description,
      clientOptions,
      clientSelect,
    } = this.state;
    return (
      <>
        <Header page={"budget"} />
        <Container>
          <HeaderForm title={title}>
            <BackButton />
            <SaveButton action={() => this.apiBudget()} />
          </HeaderForm>

          <Form>
            <section>
              <AsyncInput
                type="text"
                label="Cliente"
                placeholder="Nome do Cliente"
                noOptionsMessage={() => "Nenhum Cliente encontrado"}
                options={clientOptions}
                onChange={(selectedOption) => {
                  this.setState({ clientSelect: selectedOption });
                }}
                value={clientSelect}
              />

              <Input
                label="Valor"
                type="text"
                placeholder="Ex: 199,00"
                value={value}
                onChange={(e) => {
                  this.setState({ value: e.target.value });
                }}
              />
            </section>

            <AddressInput>
              <div>
                <Input
                  label="Rua"
                  type="text"
                  placeholder="Ex: R. São João"
                  value={street}
                  onChange={(e) => {
                    this.setState({ street: e.target.value });
                  }}
                />

                <Input
                  label="Número"
                  type="text"
                  placeholder="150"
                  value={number}
                  onChange={(e) => {
                    this.setState({ number: e.target.value });
                  }}
                />
              </div>

              <div>
                <Input
                  label="Bairro"
                  type="text"
                  placeholder="Ex: Centro"
                  value={neighborhood}
                  onChange={(e) => {
                    this.setState({ neighborhood: e.target.value });
                  }}
                />
                <Input
                  label="Cidade"
                  type="text"
                  placeholder="Ex: São Paulo"
                  value={city}
                  onChange={(e) => {
                    this.setState({ city: e.target.value });
                  }}
                />
                <Input
                  label="Estado"
                  type="text"
                  placeholder="Ex: SP"
                  value={uf}
                  onChange={(e) => {
                    this.setState({ uf: e.target.value });
                  }}
                />
              </div>
            </AddressInput>

            <Description>
              <strong>Descrição</strong>
              <textarea
                placeholder="Descrição do Orçamento"
                value={description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
              />
            </Description>

            {title === "Edição de Orçamentos" && (
              <Update>
                <Button finish>
                  <FiCheck color="#fff" size={16} />
                  <button onClick={() => this.handleFinish()}>Finalizar</button>
                </Button>
                <Button>
                  <FcCancel color="#fff" size={16} />
                  <button onClick={() => this.handleCancell()}>Cancelar</button>
                </Button>
              </Update>
            )}
          </Form>
        </Container>
      </>
    );
  }
}
