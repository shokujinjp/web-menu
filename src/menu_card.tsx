import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Menu } from "./types";

interface CardProps {
  menu: Menu;
  addCartFunc(arg0: Menu): void;
}

interface CardState {
  renderModal: boolean;
}

export class MenuCard extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
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
        <Card onClick={() => this.props.addCartFunc(this.props.menu)}>
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
      </div>
    );
  }
}
