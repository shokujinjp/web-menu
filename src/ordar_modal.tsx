import React, { CSSProperties } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
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
    textField: string;
  };
}

interface State {
  name: string;
  open: boolean;
  msg: string;
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: "none"
    },
    textField: {
      marginLeft: 1,
      marginRight: 1
    }
  });

class OrdarModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      open: this.props.open,
      msg: ""
    };
  }

  handleMsg() {
    this.setState({
      msg: event.target.value
    });

    return event;
  }

  defaultMsg(menus: Menu[]) {
    // nullチェックする
    var msg = "席番号: \n\n";
    menus.map((menu: Menu) => {
      msg += menu.name + "\n";
    });

    return msg;
  }

  TolineMsgURL(msg: string) {
    // nullチェックする
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
              label="この文章がそのまま送信されます"
              multiline
              rows="4"
              fullWidth={true}
              value={this.defaultMsg(this.props.cart)}
              onChange={this.handleMsg}
              className={classes.textField}
              margin="none"
              variant="outlined"
            />

            <Typography variant="subtitle1" id="simple-modal-description">
              <a href={this.TolineMsgURL(this.defaultMsg(this.props.cart))}>
                LINEで送る: <LineIcon size={32} round />
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
