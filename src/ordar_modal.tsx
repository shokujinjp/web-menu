import * as React from "react";
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
  open: boolean;
  msg: string;
}

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "70%",
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

class OrdarModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: this.props.open,
      msg: this.defaultMsg(this.props.cart)
    };
  }

  defaultMsg(menus: Menu[]) {
    var msg = "席番号: \nメニュー:\n";
    menus.map((menu: Menu) => {
      msg += "- " + menu.name + "\n";
    });

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

            <div>
              <Typography variant="subtitle1" id="simple-modal-description">
                <a href={this.TolineMsgURL(this.state.msg)}>
                  LINEで送る (食神アカウントを選択して送信してください)
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
