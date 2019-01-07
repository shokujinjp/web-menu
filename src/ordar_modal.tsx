import React, { CSSProperties } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { LineIcon } from "react-share";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

interface Props {
  open: boolean;
  onClose(): void;
  cart: Menu[];
  classes: {
    paper: string;
  };
}

interface State {
  open: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: "none"
    }
  });

class OrdarModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  orderMsg = (name: string) => {
    // nullチェックする
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
              を注文する
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              LINEで注文
              <a href={this.orderMsg(this.props.cart[0].name)}>
                <LineIcon size={32} round />
              </a>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

const StyledOrdarModal = withStyles(styles)(OrdarModal);

export { StyledOrdarModal };
