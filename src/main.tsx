import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import yellow from "@material-ui/core/colors/yellow";

import { Menus } from "./menus";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: yellow
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppBar title="今日の食神" />
    <Menus />
  </MuiThemeProvider>,
  document.getElementById("app")
);
