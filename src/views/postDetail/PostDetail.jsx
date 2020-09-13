import React, { Component } from "react";
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
    const { id, title, body, user, comments } = this.state.post;
    const { loading } = this.state;
    return (
      <div className="center">
        <h1>Detalle del post</h1>
        {loading ? (
          <Loading size={60} color={"#123abc"} loading={this.state.loading} />
        ) : (
          <div className="center">
            <ul>
              <li>{id} </li>
              <li>{title} </li>
              <li>{body} </li>
              <ul>
                <li>{user.name} </li>
                <li>{user.email} </li>
              </ul>
            </ul>
            <div>
              <h2>Comentarios</h2>
              {comments &&
                comments.data.map((comment, index) => (
                  <ul key={index}>
                    <li>{comment.name}</li>
                    <li>{comment.email}</li>
                  </ul>
                ))}
            </div>

            <div className="center">
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
