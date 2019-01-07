import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import SimpleModal from "./modal";

interface CardProps {
  name: string;
  price: number;
  category: string;
  description: string;
}

interface CardState {
  name: string;
  price: number;
  category: string;
  description: string;

  renderModal: boolean;
}

export class MenuCard extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      name: this.props.name,
      price: this.props.price,
      category: this.props.category,
      description: this.props.description,

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
      return <SimpleModal open={true} onClose={this.handleModalClose} />;
    }
  }

  render() {
    var des = "";

    if (this.state.description == "") {
      des = this.state.category;
    } else {
      des = this.state.category + " / " + this.state.description;
    }

    return (
      <div>
        <Card onClick={this.handleModalOpen}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {des}
            </Typography>
            <Typography variant="h5" component="h2">
              {this.state.name}
            </Typography>
            <Typography color="textSecondary">
              価格: {this.state.price}円
            </Typography>
          </CardContent>
        </Card>
        {this._render()}
      </div>
    );
  }
}
