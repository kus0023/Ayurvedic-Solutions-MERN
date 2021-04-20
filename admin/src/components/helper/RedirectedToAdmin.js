import React, { Component } from "react";

export default class RedirectedToAdmin extends Component {
  componentDidMount() {
    this.props.history.push("/admin/login");
  }
  render() {
    return <div></div>;
  }
}
