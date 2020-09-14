import axios from "axios";
import { apiUrl } from "../config/consts";
import { queries, mutations } from "../config/constPost";

export const getAll = async (page, limit) => {
  let posts = [];
  await axios
    .post(apiUrl, {
      query: queries.getPosts,
      variables: {
        options: {
          paginate: {
            page: page,
            limit: limit,
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

export const create = async (formData) => {
  await axios
    .post(apiUrl, {
      query: mutations.createPost,
      variables: {
        input: {
          title: formData.get("title"),
          body: formData.get("body"),
        },
      },
    })
    .then()
    .catch((error) => {
      console.log(error);
    });
};

export const update = (formData) => {
  axios
    .post(apiUrl, {
      query: mutations.updatePost,
      variables: {
        id: 1,
        input: {
          title: formData.get("title"),
          body: formData.get("body"),
        },
      },
    })
    .then()
    .catch((error) => {
      console.log(error);
    });
};

export const deletePost = async (id) => {
  await axios
    .post(apiUrl, {
      query: mutations.deletePost,
      variables: { id },
    })
    .then()
    .catch((error) => {
      console.error(error);
    });
};
