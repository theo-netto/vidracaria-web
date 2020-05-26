import React, { Component } from "react";

import { MdEdit } from "react-icons/md";

import More from "../../../Components/MorePopUp";
import CancellationModal from "../../../Components/CancellationModal";

import { Container, MoreConainer } from "./styles";
import { colors } from "../../../styles/colors";

import history from "../../../services/history";

export default class ClientItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <small>#{data.id}</small>
        <small>{data.name}</small>
        <small>{data.email}</small>
        <small>{data.telephone}</small>
        <More>
          <MoreConainer>
            <div>
              <button
                onClick={() => history.push(`/client/form/${data.id}`)}
                type="button"
              >
                <MdEdit color={colors.info} size={15} />
                <span>Editar</span>
              </button>
            </div>

            <div>
              <CancellationModal data={data} route="clients" />
            </div>
          </MoreConainer>
        </More>
      </Container>
    );
  }
}
