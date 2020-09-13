import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import Loading from "../loading/Loading";
import Table from "../table/Table";
import Thead from "../table/Thead";
import Tr from "../table/Tr";
import Th from "../table/Th";
import Tbody from "../table/Tbody";
import Td from "../table/Td";
import Button from "../button/Button";
import { getAll } from "../../services/post.services";

const override = css`
  size: 15;
`;
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [getAll()],
      loading: true,
    };
  }
  componentDidMount() {
    const getList = async () => {
      const list = await getAll();
      this.setState({ list, loading: false });
    };
    getList();
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Loading size={60} color={"#123abc"} loading={this.state.loading} />
        ) : (
          <div className="center">
            <div className="left">
              <Link to="/post/new">
                <button className="btn button">Crear Post</button>
              </Link>
            </div>
            <Table>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Titulo</Th>
                  <Th>Contenido</Th>
                  <Th>Autor</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {this.state.list.length > 0
                  ? this.state.list.map((post, i) => (
                      <Tr key={i}>
                        <Td> {post.id}</Td>
                        <Td> {post.title}</Td>
                        <Td> {post.body}</Td>
                        <Td> {post.user && post.user.name}</Td>
                        <Td>
                          <div className="center">
                            <Link to={`/post/detail/${post.id}`}>
                              <Button styles={"btn button"}>Detalle</Button>
                            </Link>

                            <Link to="/">
                              <Button styles={"btn button-yellow"}>
                                Editar
                              </Button>
                            </Link>

                            <Button
                              styles={"btn button-red"}
                              event={() => console.log("delete")}
                            >
                              Eliminar
                            </Button>
                          </div>
                        </Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
          </div>
        )}
      </Fragment>
    );
  }
}
