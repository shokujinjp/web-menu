import * as React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Buttom from "@material-ui/core/Button";
import { LineIcon } from "react-share";
import Icon from "@material-ui/core/Icon";

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    }
  });

interface Props {
  classes: {
    fab: string;
  };

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
        <Fab
          aria-label="Add"
          className={classes.fab}
          color="primary"
          onClick={() => this.props.handleModalOpen()}
        >
          <Icon>shopping_cart</Icon>
        </Fab>
      </div>
    );
  }
}

const StyledFabButton = withStyles(styles)(FabButton);

export { StyledFabButton };
