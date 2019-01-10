import * as React from "react";
import { TwitterIcon } from "react-share";

import firebase, { providerTwitter } from "./utils/config";

interface Props {
  isLogin: {};
  updateisLoginFunc(arg0: object): void;
}

class TwitterButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleLogin() {
    firebase.auth().signInWithPopup(providerTwitter);
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        this.props.updateisLoginFunc(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(result => {
        this.props.updateisLoginFunc({});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.isLogin).length === 0 ? (
          <div onClick={() => this.handleLogin()}>
            <TwitterIcon size={45} round={true} />
          </div>
        ) : (
          <div onClick={() => this.handleLogout()}>
            <img
              src={
                this.props.isLogin.additionalUserInfo.profile
                  .profile_image_url_https
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default TwitterButton;
