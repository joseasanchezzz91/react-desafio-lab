import React, { Component } from "react";
import { HeadProvider, Title, Meta } from "react-head";
import { Link } from "react-router-dom";
import { getPost } from "../../services/post.services";
import Button from "../../components/button/Button";
import Loading from "../../components/loading/Loading";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const get = async () => {
      const post = await getPost(id);
      this.setState({ post, loading: false });
    };
    get();
  }
  render() {
    const {  title, body, user, comments } = this.state.post;
    const { loading } = this.state;
    return (
      <div className="center">
        <HeadProvider>
          <div className="center">
            <Title>{title} | Post</Title>
            <Meta
              content="Matoy informacion del post seleccionado"
              name="description"
            />
          </div>
        </HeadProvider>
        <h1>Detalle del post</h1>
        {loading ? (
          <Loading size={60} color={"#123abc"} loading={this.state.loading} />
        ) : (
          <div className="center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <h4 className="card-subtitle mb-2 text-muted">Autor</h4>
                <p className="card-text">Nombre: {user.name}</p>
                <p className="card-text">email: {user.email}</p>
              </div>
            </div>
            <h2>Comentarios</h2>
            {comments &&
              comments.data.map((comment, index) => (
                <div className="card mb-2" key={index}>
                  <div className="card-body">
                    <p className="card-text">{comment.body}</p>
                    <h4 className="card-subtitle text-muted">Autor</h4>
                    <p className="card-text">Nombre: {comment.name}</p>
                    <p className="card-text">email: {comment.email}</p>
                  </div>
                </div>
              ))}
            <div className="center mb-2">
              <Link to="/">
                <Button styles={"btn button"}>Volver</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
