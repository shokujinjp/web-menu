import * as React from "react";
import { TwitterIcon } from "react-share";

import firebaseApp, { providerTwitter } from "./utils/config";
import firebase from "firebase";

interface Props {
  isLogin: firebase.auth.UserCredential;
  updateisLoginFunc(arg0: object): void;
}

class TwitterButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleLogin() {
    firebaseApp.auth().signInWithPopup(providerTwitter);
    firebaseApp
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
    firebaseApp
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
            {/* TODO: Twitterユーザのアイコンを出せばわかりやすいかも？ */}
            {JSON.stringify(this.props.isLogin)}
          </div>
        )}
      </div>
    );
  }
}

export default TwitterButton;
