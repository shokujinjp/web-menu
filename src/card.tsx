import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Menu } from "./types";
import SimpleModal from "./modal";

interface CardProps {
  menu: Menu;
}

interface CardState {
  renderModal: boolean;
}

export class MenuCard extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      renderModal: false
    };
  }

  handleModalOpen = () => {
    this.setState({ renderModal: true });
  };

  handleModalClose = () => {
    this.setState({ renderModal: false });
  };

  _render() {
    if (this.state.renderModal == true) {
      return (
        <SimpleModal
          open={true}
          onClose={this.handleModalClose}
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
        <Card onClick={this.handleModalOpen}>
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
        {this._render()}
      </div>
    );
  }
}
