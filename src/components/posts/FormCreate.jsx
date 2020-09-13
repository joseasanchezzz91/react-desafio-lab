import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();

    formData.append("tarifa", e.target.tarifa.value);
    formData.append("cliente", e.target.cliente.value);
    formData.append("e1_tipo", e.target.e1_tipo.value);
    formData.append("e2_tipo", e.target.e2_tipo.value);
    formData.append("p1_tipo", e.target.p1_tipo.value);
    formData.append("p2_tipo", e.target.p2_tipo.value);
    formData.append("p3_tipo", e.target.p3_tipo.value);
    formData.append("token", this.props.login.user.token);
    this.props.create(formData, this.handleAlert);
  };

  render() {
    return (
      <div className="">
        <h2 className="text-center">Creación de Post</h2>
        <form
          id=""
          action=""
          onSubmit={this.handleLogin}
          className="center-input"
        >
          <div className="pt-5 text-left">
            <div className="row">
              <div className="col-md-12 form-group">
                <div className="form-group">
                  <label> Tarifa: </label>
                  <input
                    autoComplete="off"
                    name="tarifa"
                    placeholder="Tarifa"
                    required={true}
                    type="text"
                    className="input-forms"
                    style={{ backgroundColor: "#ffffff", left: "61px" }}
                  />
                </div>
                <div className="form-group">
                  <label>Cliente:</label>
                  <input
                    autoComplete="off"
                    name="cliente"
                    placeholder="Cliente"
                    required={true}
                    type="number"
                    className="input-forms"
                    style={{ backgroundColor: "#ffffff", left: "50px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <div className="form-group">
                  <label className="titulo">Energía tipo 1:</label>
                  <input
                    autoComplete="off"
                    name="e1_tipo"
                    placeholder="E1_tipo"
                    required={true}
                    step="any"
                    type="number"
                    className="input-forms"
                    style={{ backgroundColor: "#ffffff", left: "7px" }}
                  />
                </div>
                <div className="form-group">
                  <label className="titulo">Energía tipo 2:</label>
                  <input
                    autoComplete="off"
                    name="e2_tipo"
                    placeholder="E2_tipo"
                    required={true}
                    step="any"
                    type="number"
                    className="input-forms"
                    style={{ backgroundColor: "#ffffff", left: "7px" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <div className="form-group">
                  <label className="titulo">Potencia tipo 1:</label>
                  <input
                    autoComplete="off"
                    name="p1_tipo"
                    placeholder="P1_tipo"
                    required={true}
                    step="any"
                    type="number"
                    className="input-forms"
                    style={{ backgroundColor: "#ffffff" }}
                  />
                </div>
                <div className="form-group">
                  <label className="titulo">Potencia tipo 2:</label>
                  <input
                    autoComplete="off"
                    name="p2_tipo"
                    placeholder="P2_tipo"
                    required={true}
                    step="any"
                    type="number"
                    className="input-forms"
                    style={{ backgroundColor: "#ffffff" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="inline-btn center">
              <div>
                <Link to="/">
                  <button className="btn button-red">Cancelar</button>
                </Link>
              </div>
              <div className="">
                <button className="btn button">Aceptar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
