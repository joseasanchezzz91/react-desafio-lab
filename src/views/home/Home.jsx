import React, { Component } from "react";
import { HeadProvider, Title, Meta } from "react-head";
import List from "../../components/list/List";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeadProvider>
          <div className="center">
            <Title>Inicio | Post</Title>
            <Meta
              content="Matoy informacion del post seleccionado"
              name="description"
            />
          </div>
        </HeadProvider>
        <h1 className="text-center">Lista de Post</h1>
        <List />
      </div>
    );
  }
}
