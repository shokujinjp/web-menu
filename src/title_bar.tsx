import React, { CSSProperties } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TwitterButton from "./twitter_button";

const rootStyle: CSSProperties = {
  flexGrow: 0
};

const growStyle: CSSProperties = {
  flexGrow: 1
};

interface Props {
  isLogin: firebase.auth.UserCredential
  updateisLoginFunc(arg0: object): void
}

export default class TitleBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div style={growStyle}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h4" color="inherit" style={growStyle}>
              今日の食神
            </Typography>
            <div style={{flexGrow: 0}}>
              <TwitterButton
                updateisLoginFunc={this.props.updateisLoginFunc}
                isLogin={this.props.isLogin}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
