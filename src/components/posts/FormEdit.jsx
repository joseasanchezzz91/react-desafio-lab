import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeadProvider, Title, Meta } from "react-head";
import { getPost, update } from "../../services/post.services";
import { AlertInfo } from "../alert/Alert";
import Loading from "../loading/Loading";
/**
 *
 * Este componente esta elaborado con hooks
 */
export default function FormEdit(props) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const get = async () => {
      const { id } = props.match.params;
      const postById = await getPost(id);
      setPost(postById);
      setLoading(false);
    };
    get();
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("body", event.target.body.value);
    setLoading(true);
    const updatePost = async () => {
      return await update(formData);
    };
    const isUpdate = updatePost();
    if (isUpdate) {
      setLoading(false);
      AlertInfo(props);
    }
  };

  return (
    <div>
      <HeadProvider>
        <div className="center">
          <Title>Editar {post.title}| Post</Title>
          <Meta content="Editar post seleccionado" name="description" />
        </div>
      </HeadProvider>
      <h2 className="text-center">Editar de Post</h2>
      {loading ? (
        <div className="">
          <Loading size={60} color={"#123abc"} loading={loading} />{" "}
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit} className="center-input">
            <div>
              <label> Titulo: </label>
              <input
                autoComplete="off"
                name="title"
                placeholder="Titulo"
                required={true}
                type="text"
                defaultValue={post && post.title}
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
                defaultValue={post && post.body}
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
