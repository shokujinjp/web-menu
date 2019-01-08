import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Badge from "@material-ui/core/Badge";

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      position: "fixed",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
    badge: {
      left: -15,
      margin: theme.spacing.unit * 1
    }
  });

interface Props {
  classes: {
    fab: string;
    badge: string;
  };

  cart: Menu[];
  handleModalOpen(): void;
}

class FabButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Badge
          className={classes.fab}
          badgeContent={this.props.cart.length}
          color="secondary"
          classes={{ badge: classes.badge }}
        >
          <Fab
            aria-label="Add"
            color="primary"
            onClick={() => this.props.handleModalOpen()}
          >
            <Icon>shopping_cart</Icon>
          </Fab>
        </Badge>
      </div>
    );
  }
}

const StyledFabButton = withStyles(styles)(FabButton);

export { StyledFabButton };
