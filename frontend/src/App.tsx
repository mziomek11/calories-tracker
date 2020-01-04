import React from "react";
import MomentUtils from "@date-io/moment";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CssBaseline from "@material-ui/core/CssBaseline";

import { TokenProvider } from "./context/token";
import { FoodProvider } from "./context/food";
import Header from "./components/header/Header";
import PageRoutes from "./components/routing/PageRoutes";

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TokenProvider>
        <FoodProvider>
          <CssBaseline />
          <BrowserRouter>
            <Header />
            <PageRoutes />
          </BrowserRouter>
        </FoodProvider>
      </TokenProvider>
    </MuiPickersUtilsProvider>
  );
};

export default App;
