import * as React from "react";
import * as ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

import { Menus } from "./menus";
import { StyledOrdarModal } from "./ordar_modal";
import { StyledFabButton } from "./fab";
import TitleBar from "./title_bar";
import { StyledSeatModal } from "./seat_modal";

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
  cart: { [key: string]: number };
  seatId: string;
  renderOrdarModal: boolean;
  renderSeatModal: boolean;
  isLogin: firebase.auth.UserCredential;
}

class Main extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      cart: { "": 0 },
      seatId: "",
      renderOrdarModal: false,
      renderSeatModal: false,
      isLogin: {}
    };
  }

  isExistItemInCart(c: { [key: string]: number }): boolean {
    // if cart in item => true
    if (typeof c[""] != "undefined") {
      return false;
    }

    return true;
  }

  addCart = (menuName: string) => {
    var c: { [key: string]: number } = this.state.cart;

    if (typeof c[""] != "undefined") {
      // first exec
      delete c[""];
    }

    if (typeof c[menuName] == "undefined") {
      // is zero
      c[menuName] = 1;
    } else {
      c[menuName] += 1;
    }

    this.setState({ cart: c });
  };

  handleOrdarModalOpen = () => {
    this.setState({ renderOrdarModal: true });
  };

  handleOrdarModalClose = () => {
    this.setState({ renderOrdarModal: false });
  };

  handleModalOpen = () => {
    if (this.state.seatId === "") {
      this.setState({ renderSeatModal: true });
    }
    this.setState({ renderOrdarModal: true });
  };

  handleSeatModalOpen = () => {
    this.setState({ renderSeatModal: true });
  };

  handleSeatModalClose = () => {
    this.setState({ renderSeatModal: false });
  };

  updateSeatId = (inputSeatId: string) => {
    this.setState({ seatId: inputSeatId });
  };

  updateisLogin = (result: object) => {
    this.setState({ isLogin: result });
  };

  _renderOrdarModal() {
    if (this.state.renderSeatModal == true) {
      return (
        <StyledSeatModal
          open={true}
          onClose={this.handleSeatModalClose}
          seatId={this.state.seatId}
          updateSeatIdFunc={this.updateSeatId}
        />
      );
    }

    if (this.state.renderOrdarModal == true) {
      return (
        <StyledOrdarModal
          open={true}
          onClose={this.handleOrdarModalClose}
          cart={this.state.cart}
          seatId={this.state.seatId}
          isExistItemInCartFunc={this.isExistItemInCart}
        />
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TitleBar
          updateisLoginFunc={this.updateisLogin}
          isLogin={this.state.isLogin}
        />
        <Menus addCartFunc={this.addCart} />
        <StyledFabButton
          handleModalOpen={this.handleModalOpen}
          cart={this.state.cart}
        />
        {this._renderOrdarModal()}
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
