import React, { Component } from "react";
import List from "../../components/list/List";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Lista de Post</h1>
        <List />
      </div>
    );
  }
}
