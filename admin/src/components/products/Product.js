import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div class="col s12 m4" style={{ padding: 5 }}>
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Product Name</span>
            <p>
              Product Description - I am a very simple card. I am good at
              containing small bits of information. I am convenient because I
              require little markup to use effectively.
            </p>
          </div>
          <div class="card-action">
            <a href="#">View</a>
            <a href="#">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}
