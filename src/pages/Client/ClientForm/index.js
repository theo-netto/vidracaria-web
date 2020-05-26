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

export default class Clientform extends Component {
  state = {
    title: "Cadastro de Clientes",
    name: "",
    email: "",
    telephone: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.setState({
        title: "Edição de Clientes",
      });
      try {
        const response = await api.get(`/clients/${id}`);
        console.log(response);

        this.setState({
          name: response.data.name,
          email: response.data.email,
          telephone: response.data.telephone,
        });
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    }
  }

  apiClient = async () => {
    const { id } = this.props.match.params;
    const { name, email, telephone } = this.state;

    if (id) {
      try {
        await api.put(`/clients/${id}`, { name, email, telephone });
        toast.info("Cliente editado com Sucesso");
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    } else {
      try {
        await api.post("/clients", { name, email, telephone });
        toast.success("Cliente criado com Sucesso");
      } catch (error) {
        toast.error("Algo deu errado! Tente Novamente mais Tarde");
      }
    }

    history.push("/client");
  };

  render() {
    const { title, name, email, telephone } = this.state;
    return (
      <>
        <Header page={"client"} />
        <Container>
          <HeaderForm title={title}>
            <BackButton />
            <SaveButton action={() => this.apiClient()} />
          </HeaderForm>
          <Form>
            <div>
              <Input
                label="Nome"
                type="text"
                placeholder="Ex: Ana Maria de Peçanha"
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
                placeholder="Ex: ana@maria.com"
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
