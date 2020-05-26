import React, { Component } from "react";

import { MdEdit } from "react-icons/md";

import More from "../../../Components/MorePopUp";
import CancellationModal from "../../../Components/CancellationModal";

import Status from "./BudgetStatus";
import BudgetModal from "../BudgetModal";
import CashierModal from "../CashierModal";

import history from "../../../services/history";

import { Container, MoreConainer } from "./styles";

import { statusColors, colors } from "../../../styles/colors";

export default class BudgetItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <small>#{data.id}</small>
        <small>{data.client.name}</small>
        <small>{data.address.street}</small>
        <small>{data.description}</small>
        <Status
          text={data.status}
          color={statusColors[data.status].color}
          background={statusColors[data.status].background}
        />

        <More>
          <MoreConainer>
            <div>
              <BudgetModal data={data} />
            </div>

            <div>
              <CashierModal data={data} />
            </div>

            <div>
              <button
                onClick={() => history.push(`/budget/form/${data.id}`)}
                type="button"
              >
                <MdEdit color={colors.info} size={15} />
                <span>Editar</span>
              </button>
            </div>

            <div>
              <CancellationModal data={data} route="budgets" />
            </div>
          </MoreConainer>
        </More>
      </Container>
    );
  }
}
