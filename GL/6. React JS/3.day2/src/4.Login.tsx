import React, { Component } from "react";

type Props = {

}

type State = {
  isLogin: boolean;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLogin: false,
    }
  }

  login = () => {
    this.setState((prevState) => ({
      isLogin: true
    }));
  }

  logout = () => {
    this.setState((prevState) => ({
      isLogin: false
    }))
  }

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            <h3>Welcome Administrator</h3>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <div>
            <h3>Please Login</h3>
            <button onClick={this.login}>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
