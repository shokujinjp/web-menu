import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

import { Menu } from "./types";
import { Menus } from "./menus";
import { StyledOrdarModal } from "./ordar_modal";
import { StyledFabButton } from "./fab";
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
  renderOrdarModal: boolean;
}

class Main extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      cart: [],
      renderOrdarModal: false
    };
  }

  addCart = (menu: Menu) => {
    this.setState({
      cart: this.state.cart.concat(menu)
    });
  };

  handleOrdarModalOpen = () => {
    this.setState({ renderOrdarModal: true });
  };

  handleOrdarModalClose = () => {
    this.setState({ renderOrdarModal: false });
  };

  _renderOrdarModal() {
    if (this.state.renderOrdarModal == true) {
      return (
        <StyledOrdarModal
          open={true}
          onClose={this.handleOrdarModalClose}
          cart={this.state.cart}
        />
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TitleBar />
        <Menus addCartFunc={this.addCart} />
        <StyledFabButton
          handleModalOpen={this.handleOrdarModalOpen}
          cart={this.state.cart}
        />
        {this._renderOrdarModal()}
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
