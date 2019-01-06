import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

import { Menus } from "./menus";
import TitleBar from "./title_bar";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: yellow,
    background: {
      default: "#fbfcd3"
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <TitleBar />
    <Menus />
  </MuiThemeProvider>,
  document.getElementById("app")
);
