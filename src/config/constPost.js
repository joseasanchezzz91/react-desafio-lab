module.exports = {
  queries: {
    getPosts: `
        query (
            $options: PageQueryOptions
          ){
        posts(options: $options){
          data {
            id
            title
            body
            user{
              name
            }
          }
        }
      }`,
    getPost: `
        query getPost($id: ID!) {
          post(id: $id) {
            id
            title
            body
            user {
              name
              email
                 }
            comments {
              data {
                name
                email
              }
            }
          }
        }`,
  },
  mutations: {
    createPost: `
    mutation (
        $input: CreatePostInput!
      ) {
        createPost(input: $input) {
          id
          title
          body
        }
      }`,
    updatePost: `mutation (
        $id: ID!,
        $input: UpdatePostInput!
      ) {
        updatePost(id: $id, input: $input) {
          id
          title
          body
        }
      }`,
    delete: `
        query($id: ID!){
            deletePost(id: $id)
        }`,
  },
};
