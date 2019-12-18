import React from "react";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import { TokenProvider } from "./context/token";
import Header from "./components/layout/header/Header";
import PageRoutes from "./components/routing/PageRoutes";

const App: React.FC = () => {
  return (
    <TokenProvider>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <PageRoutes />
      </BrowserRouter>
    </TokenProvider>
  );
};

export default App;
