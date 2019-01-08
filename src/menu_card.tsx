import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Menu } from "./types";
import { StyledMenuCardModal } from "./menu_card_modal";

interface CardProps {
  menu: Menu;
  addCartFunc(arg0: string): void;
}

interface CardState {
  renderMenuCardModal: boolean;
}

export class MenuCard extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      renderMenuCardModal: false
    };
  }

  handleMenuCardModalOpen = () => {
    this.setState({ renderMenuCardModal: true });
  };

  handleMenuCardModalClose = () => {
    this.setState({ renderMenuCardModal: false });
  };

  _renderMenuCardModal() {
    if (this.state.renderMenuCardModal == true) {
      return (
        <StyledMenuCardModal
          open={true}
          onClose={this.handleMenuCardModalClose}
          addCartFunc={this.props.addCartFunc}
          menu={this.props.menu}
        />
      );
    }
  }

  render() {
    var des = "";

    if (this.props.menu.description == "") {
      des = this.props.menu.category;
    } else {
      des = this.props.menu.category + " / " + this.props.menu.description;
    }

    return (
      <div>
        <Card onClick={() => this.handleMenuCardModalOpen()}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {des}
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.menu.name}
            </Typography>
            <Typography color="textSecondary">
              価格: {this.props.menu.price}円
            </Typography>
          </CardContent>
        </Card>

        {this._renderMenuCardModal()}
      </div>
    );
  }
}
