import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

// TODO: APIで持つべき
const listSeatId = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "B",
  "C"
];

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
    },
    menu: {
      width: "100%"
    }
  });

interface Props {
  open: boolean;
  onClose(): void;
  classes: {
    paper: string;
    textField: string;
    menu: string;
  };

  seatId: string;
  updateSeatIdFunc(arg0: string): void;
}

interface State {
  open: boolean;
  anchorEl: any;
  selectedIndex: number;
}

class SeatModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: this.props.open,
      anchorEl: null,
      selectedIndex: 0
    };
  }

  handleClickListItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    const selectedValue: string = listSeatId[index];
    this.props.updateSeatIdFunc(selectedValue);

    this.props.onClose();
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.props.onClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            席番号を入力してください
          </Typography>

          <List component="nav">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label=""
              onClick={this.handleClickListItem}
            >
              <ListItemText primary={listSeatId[this.state.selectedIndex]} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            {listSeatId.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
                className={classes.menu}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Modal>
    );
  }
}

const StyledSeatModal = withStyles(styles)(SeatModal);

export { StyledSeatModal };
