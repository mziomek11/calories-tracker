import React from "react";
import MomentUtils from "@date-io/moment";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CssBaseline from "@material-ui/core/CssBaseline";

import { TokenProvider } from "./context/token";
import Header from "./components/layout/header/Header";
import PageRoutes from "./components/routing/PageRoutes";

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TokenProvider>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <PageRoutes />
        </BrowserRouter>
      </TokenProvider>
    </MuiPickersUtilsProvider>
  );
};

export default App;
