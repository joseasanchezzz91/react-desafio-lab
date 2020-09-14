import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTrashAlt, FaEye } from "react-icons/fa";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import Loading from "../loading/Loading";
import Table from "../table/Table";
import Thead from "../table/Thead";
import Tr from "../table/Tr";
import Th from "../table/Th";
import Tbody from "../table/Tbody";
import Td from "../table/Td";
import Button from "../button/Button";
import { getAll, deletePost } from "../../services/post.services";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [getAll()],
      loading: true,
      next: 1,
      previus: 0,
      limit: 10,
      disabled: true,
    };
  }

  handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn button",
        cancelButton: "btn button-red ml-1",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estas seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.setState({ loading: true });
          const deletePostById = () => {
            return deletePost(id);
          };
          const isDelete = deletePostById();
          if (isDelete) {
            swalWithBootstrapButtons.fire(
              "¡Exito!",
              "El registro ha sido eliminado.",
              "success"
            );
            this.setState({ loading: false });
          }
        }
      });
  };

  componentDidMount() {
    this.recursive();
  }

  recursive = (nextOrPrevius = this.state.next, limit = this.state.limit) => {
    this.setState({ loading: true });
    const getList = async () => {
      const list = await getAll(nextOrPrevius, limit);
      this.setState({ list, loading: false });
    };
    getList();
  };
  handleNext = () => {
    const previus = this.state.next;
    const next = previus + 1;
    this.setState({ Loading: true, previus, next, disabled: false });
    this.recursive(next);
  };

  handlePrevius = () => {
    const old = this.state.previus;
    const previus = this.state.previus - 1;
    if (previus === 0) {
      this.setState({ disabled: true });
    }
    const next = this.state.next - 1;
    this.setState({ Loading: true, previus, next });
    this.recursive(old);
  };

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <Loading size={60} color={"#123abc"} loading={this.state.loading} />
        ) : (
          <div className="center padding-table">
            <div className="left">
              <Link to="/post/new">
                <button className="btn button">Crear Post</button>
              </Link>
            </div>
            <Table styles={"tabla"}>
              <Thead styles={"thead-dark"}>
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
                          <div className="accion">
                            <Link to={`/post/detail/${post.id}`}>
                              {/* <Button styles={"btn button"}>Detalle</Button> */}
                              <span>
                                <FaEye size={"1.5em"} color={"#024e9b"} />
                              </span>
                            </Link>

                            <Link to={`/post/${post.id}/edit`}>
                              <MdEdit size={"1.5em"} color={"#024e9b"} />
                            </Link>

                            <Button
                              styles={"btn-delete"}
                              event={() => this.handleDelete(post.id)}
                            >
                              <FaTrashAlt size={"1.5em"} color={"#024e9b"} />
                            </Button>
                          </div>
                        </Td>
                      </Tr>
                    ))
                  : null}
              </Tbody>
            </Table>
            <div className="center">
              <Button
                styles={"btn button p-btn"}
                event={this.handlePrevius}
                disabled={this.state.disabled}
              >
                <ImArrowLeft size={"1.5em"} />
              </Button>
              <Button styles={"btn button ml-1 p-btn"} event={this.handleNext}>
                <ImArrowRight size={"1.5em"} />
              </Button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
