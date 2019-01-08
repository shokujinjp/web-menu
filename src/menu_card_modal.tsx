import React, { CSSProperties } from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
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
    button: {
      margin: theme.spacing.unit
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

interface Props {
  open: boolean;
  menu: Menu;
  onClose(): void;
  addCartFunc(arg0: Menu): void;

  classes: {
    paper: string;
    button: string;
    textField: string;
  };
}

interface State {
  open: boolean;
  menuNum: string;
}

class MenuCardModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: this.props.open,
      menuNum: ""
    };
  }

  handleMenuNum(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    this.setState({ menuNum: event.currentTarget.value });
  }

  handleSubmit(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const inputValue: number = parseInt(this.state.menuNum);

    for (var _i = 0; _i < inputValue; _i++) {
      this.props.addCartFunc(this.props.menu);
    }

    this.props.onClose();
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
              {this.props.menu.name}の個数
            </Typography>
            <TextField
              id="set-num"
              label="個数を入力"
              className={classes.textField}
              fullWidth
              value={this.state.menuNum}
              type="number"
              onChange={e => this.handleMenuNum(e)}
              margin="none"
              variant="outlined"
            />

            <div style={{ display: "flex" }}>
              <div style={growStyle} />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={nonGrowStyle}
                onClick={e => this.handleSubmit(e)}
              >
                カートに入れる
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const StyledMenuCardModal = withStyles(styles)(MenuCardModal);

export { StyledMenuCardModal };
