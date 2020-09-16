import React, { Component } from "react";
import { HeadProvider, Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import { create } from "../../services/post.services";
import { AlertInfo } from "../alert/Alert";
import Loading from "../loading/Loading";

export default class FormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("body", event.target.body.value);
    this.setState({ loading: true });
    const createPost = (formData) => {
      return create(formData);
    };
    const isCreate = createPost;
    if (isCreate) {
      this.setState({ loading: false });
      AlertInfo(this.props);
    }
  };

  render() {
    return (
      <div>
        <HeadProvider>
          <div className="center">
            <Title>Crear | Post</Title>
            <Meta
              content="En esta parte se podra crear los post"
              name="description"
            />
          </div>
        </HeadProvider>
        {this.state.loading ? (
          <Loading size={60} color={"#123abc"} loading={this.state.loading} />
        ) : (
          <div>
            <h2 className="text-center">Creación de Post</h2>
            <form
              onSubmit={this.handleSubmit}
              className="center-input"
              id=""
              action=""
              method="post"
            >
              <div>
                <label> Titulo: </label>
                <input
                  autoComplete="off"
                  name="title"
                  placeholder="Titulo"
                  required={true}
                  type="text"
                  className="input-forms"
                />
              </div>

              <div>
                <label>Contenido:</label>
                <input
                  autoComplete="off"
                  name="body"
                  placeholder="Contenido"
                  required={true}
                  type="text"
                  className="input-forms"
                />
              </div>

              <div className="center">
                <div className="inline-btn center">
                  <div>
                    <Link to="/">
                      <button className="btn button-red">Cancelar</button>
                    </Link>
                  </div>
                  <div>
                    <button className="btn button ml-1">Aceptar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}
