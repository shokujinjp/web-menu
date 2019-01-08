import React, { CSSProperties } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const rootStyle: CSSProperties = {
  flexGrow: 0
};

const growStyle: CSSProperties = {
  flexGrow: 1
};

export default class TitleBar extends React.Component {
  render() {
    return (
      <div style={growStyle}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" color="inherit" style={growStyle}>
              今日の食神
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
