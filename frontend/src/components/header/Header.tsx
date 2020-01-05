import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";

import MainGrid from "../grid/Main";
import Logo from "./Logo";
import DesktopMenu from "./desktop/Menu";
import MobileMenu from "./mobile/Menu";

const Header = () => {
  return (
    <Box component={AppBar} position="static" mb={4}>
      <MainGrid>
        <Box component={Toolbar} justifyContent="space-between" p={0}>
          <Logo />
          <div>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </Box>
      </MainGrid>
    </Box>
  );
};

export default Header;
