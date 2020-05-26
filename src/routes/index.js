import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Budget from "../pages/Budget";
import BudgetForm from "../pages/Budget/BudgetForm";

import Client from "../pages/Client";
import ClientForm from "../pages/Client/ClientForm";

import Provider from "../pages/Provider";
import ProviderForm from "../pages/Provider/ProviderForm";

import Cashier from "../pages/Cashier";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/budget" exact component={Budget} isPrivate />
      <Route path="/budget/form" exact component={BudgetForm} isPrivate />
      <Route path="/budget/form/:id" exact component={BudgetForm} isPrivate />

      <Route path="/client" exact component={Client} isPrivate />
      <Route path="/client/form" exact component={ClientForm} isPrivate />
      <Route path="/client/form/:id" exact component={ClientForm} isPrivate />

      <Route path="/provider" exact component={Provider} isPrivate />
      <Route path="/provider/form" exact component={ProviderForm} isPrivate />
      <Route
        path="/provider/form/:id"
        exact
        component={ProviderForm}
        isPrivate
      />

      <Route path="/cashier" component={Cashier} isPrivate />
    </Switch>
  );
}
