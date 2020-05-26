import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import Global from "./styles/Global";
import history from "./services/history";

function App() {
  return (
    <Router history={history}>
      <Global />
      <Routes />
      <ToastContainer autoClose={2000} />
    </Router>
  );
}

export default App;
