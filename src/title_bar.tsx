import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import { OrdarModal } from "./ordar_modal";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

interface Props {
  classes: {
    root: any;
    grow: any;
  };

  cart: Menu[];
}

interface State {
  renderModal: boolean;
}

export class TitleBar extends React.Component<Props, any> {
  constructor(props: Props) {
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
        <OrdarModal
          class={}
          open={true}
          onClose={this.handleModalClose}
          cart={this.props.cart}
        />
      );
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              今日の食神
            </Typography>
            <Button color="inherit" onClick={this.handleModalOpen}>
              <Icon>shopping_cart</Icon>
            </Button>
          </Toolbar>
        </AppBar>

        {this._render()}
      </div>
    );
  }
}

export default withStyles(styles)(TitleBar);
