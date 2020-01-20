import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "17417461742-l2ghnhep4fc6rgs86ai7sar8g3okv569.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          // auth instance
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          // listen auth status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i> Sign Out
        </button>
      );
    } else if (!this.state.isSignedIn) {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i> Sign In with Google
        </button>
      );
    } else {
      return <div>I don't know if we are signed in or not</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
