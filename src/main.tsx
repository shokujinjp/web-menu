import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

import { Menu } from "./types";
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

interface State {
  cart: Menu[];
}

class Main extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      cart: []
    };
  }

  addCart = (menu: Menu) => {
    this.setState({
      cart: this.state.cart.concat(menu)
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TitleBar cart={this.state.cart} />
        <Menus addCartFunc={this.addCart} />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
