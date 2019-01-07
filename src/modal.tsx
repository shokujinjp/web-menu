import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { LineIcon } from "react-share";

import { Menu } from "./types";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

interface Props {
  classes: {
    root: any;
  };

  open: boolean;
  onClose: any;
  menu: Menu;
}

interface State {
  open: boolean;
}

export class SimpleModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  orderMsg = (name: string) => {
    return "https://line.me/R/msg/text?" + name + "をお願いします";
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.props.onClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.props.menu.name} を注文する ({this.props.menu.price}円)
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              LINEで注文
              <a href={this.orderMsg(this.props.menu.name)}>
                <LineIcon size={32} round />
              </a>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}
// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
