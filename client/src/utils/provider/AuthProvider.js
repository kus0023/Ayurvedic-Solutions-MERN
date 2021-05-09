import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuth } from "../../redux/actions/Auth.action";

class AuthProvider extends Component {
  componentDidMount() {
    this.props.getAuth();
  }
  render() {
    return this.props.isReady ? this.props.children : <h1>Loading..</h1>;
  }
}

const mapStateToProps = (state) => ({
  isReady: state.auth.isReady,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => dispatch(getAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
