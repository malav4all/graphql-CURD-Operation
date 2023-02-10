const Post = require("../db/model/postSchema");
const resolvers = {
  Query: {
    getAllPost: async () => {
      const posts = await Post.find();
      return posts;
    },
    getPost: async (_parent, { id }, _context, _info) => {
      return await Post.findById(id);
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { name, email, phone } = args.post;
      const post = new Post({ name, email, phone });
      await post.save();
      return post;
    },
    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Post Delete Successfully";
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { name, email, phone } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }
      );
      return post;
    },
  },
};
module.exports = resolvers;
