import React, { CSSProperties } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

interface Props {
  cart: Menu[];
  handleModalOpen(): void;
}

const rootStyle: CSSProperties = {
  flexGrow: 0
};

const growStyle: CSSProperties = {
  flexGrow: 1
};

export default class TitleBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div style={growStyle}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" color="inherit" style={growStyle}>
              今日の食神
            </Typography>
            <Button
              color="inherit"
              onClick={() => this.props.handleModalOpen()}
              style={rootStyle}
            >
              <Icon>shopping_cart</Icon>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
