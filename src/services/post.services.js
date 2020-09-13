import axios from "axios";
import { apiUrl } from "../config/consts";
import { queries, mutations } from "../config/constPost";

export const getAll = async () => {
  let posts = [];
  await axios
    .post(apiUrl, {
      query: queries.getPosts,
      variables: {
        options: {
          paginate: {
            page: 1,
            limit: 5,
          },
        },
      },
    })
    .then((result) => {
      posts = result.data.data.posts.data;
    });
  return posts;
};

export const getPost = async (id) => {
  let post = {};
  await axios
    .post(apiUrl, {
      query: queries.getPost,
      variables: {
        id,
      },
    })
    .then((result) => {
      post = result.data.data.post;
    })
    .catch((error) => {
      console.error(error);
    });
  return post;
};

export const create = (formData) => {
  console.log(formData);
  axios
    .post(apiUrl, {
      query: mutations.createPost,
      variables: {
        input: {
          title: "NUEVO TITULO ",
          body: "CUERPO DEL POST.",
        },
      },
    })
    .then((result) => {
      console.log("=========== Create ===============");
      console.log(result.data.data.createPost);
      console.log("==================================");
    });
};

export const update = (formData) => {
  console.log(formData);
  axios
    .post(apiUrl, {
      query: mutations.updatePost,
      variables: {
        id: 1,
        input: {
          title: "titulo 1",
          body: "Some updated content. 1",
        },
      },
    })
    .then((result) => {
      console.log("=========== Update ===============");
      console.log(result.data.data.updatePost);
      console.log("==================================");
    });
};
