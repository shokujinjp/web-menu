import React, { CSSProperties } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

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
  cart: { [key: string]: number };
  classes: {
    paper: string;
    textField: string;
  };
}

interface State {
  open: boolean;
  msg: string;
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "90%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 1,
      outline: "none"
    },
    textField: {
      marginLeft: 1,
      marginRight: 1
    }
  });

const nonGrowStyle: CSSProperties = {
  flexGrow: 0
};

const growStyle: CSSProperties = {
  flexGrow: 1
};

class OrdarModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: this.props.open,
      msg: this.defaultMsg(this.props.cart)
    };
  }

  defaultMsg(cart: { [key: string]: number }) {
    var msg = "席番号: \nメニュー:\n";

    for (var menuName in cart) {
      msg += "- " + menuName + "を" + cart[menuName] + "個\n";
    }

    msg += "をお願いします。";

    return msg;
  }

  TolineMsgURL(msg: string) {
    return "https://line.me/R/msg/text?" + encodeURIComponent(msg);
  }

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
              送信文章編集
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              helperText="この文章がそのまま送信されます"
              multiline
              rows="6"
              fullWidth
              value={this.state.msg}
              onChange={e => this.setState({ msg: e.target.value })}
              className={classes.textField}
              margin="none"
              variant="outlined"
            />

            <div style={{ display: "flex" }}>
              <div style={growStyle} />

              <Typography
                variant="h6"
                id="simple-modal-description"
                style={nonGrowStyle}
              >
                <a href={this.TolineMsgURL(this.state.msg)}>
                  LINEで注文する (LINEが開きます)
                </a>
              </Typography>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const StyledOrdarModal = withStyles(styles)(OrdarModal);

export { StyledOrdarModal };
