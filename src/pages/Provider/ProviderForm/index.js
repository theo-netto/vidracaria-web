import React, { Component } from "react";

import { toast } from "react-toastify";

import Header from "../../../Components/Header";
import HeaderForm from "../../../Components/HeaderForm";
import Container from "../../../Components/Container";
import BackButton from "../../../Components/BackButton";
import SaveButton from "../../../Components/SaveButton";
import Input from "../../../Components/Input";

import api from "../../../services/api";
import history from "../../../services/history";

import { Form } from "./styles";

export default class Providerform extends Component {
  state = {
    title: "Cadastro de Fornecedores",
    name: "",
    email: "",
    telephone: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.setState({
        title: "Edição de Fornecedores",
      });
      try {
        const response = await api.get(`/providers/${id}`);
        const { data } = response;
        this.setState({
          email: data.email,
          telephone: data.telephone,
          name: data.name,
        });
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    }
  }

  apiProvider = async () => {
    const { id } = this.props.match.params;
    const { name, email, telephone } = this.state;

    if (id) {
      try {
        await api.put(`/providers/${id}`, { name, email, telephone });
        toast.info("Fornecedor editado com Sucesso");
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    } else {
      try {
        await api.post("/providers", { name, email, telephone });
        toast.success("Fornecedor criado com Sucesso");
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    }

    history.push("/provider");
  };

  render() {
    const { title, name, email, telephone } = this.state;
    return (
      <>
        <Header page={"provider"} />
        <Container>
          <HeaderForm title={title}>
            <BackButton />
            <SaveButton action={() => this.apiProvider()} />
          </HeaderForm>
          <Form>
            <div>
              <Input
                label="Nome"
                type="text"
                placeholder="Ex: Empresa de Vidros"
                value={name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                // onKeyPress={e =>
                // 	e.key === 'Enter' ? formRef.current.submitForm() : null
                // }
              />
              <Input
                label="Numero"
                type="text"
                placeholder="Ex: xx xxxxx-xxxx"
                value={telephone}
                onChange={(e) => {
                  this.setState({ telephone: e.target.value });
                }}
                // onKeyPress={e =>
                // 	e.key === 'Enter' ? formRef.current.submitForm() : null
                // }
              />
            </div>

            <div>
              <Input
                label="Email"
                type="text"
                placeholder="Ex: vidros@gmail.com"
                value={email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                // onKeyPress={e =>
                // 	e.key === 'Enter' ? formRef.current.submitForm() : null
                // }
              />
            </div>
          </Form>
        </Container>
      </>
    );
  }
}
