import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
}


export class MenuCard extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      name: this.props.name,
      price: this.props.price,
      category: this.props.category,
      description: this.props.description,
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
      <Card>
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
    );
  }
}