const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Post {
    id: ID
    name: String
    email: String
    phone: String
  }
  type Query {
    getAllPost: [Post]
    getPost(id: ID): Post
  }

  input PostInput {
    name: String
    email: String
    phone: String
  }
  type Mutation {
    createPost(post: PostInput): Post
    deletePost(id: ID): String
    updatePost(id: ID, post: PostInput): Post
  }
`;

module.exports = typeDefs;
