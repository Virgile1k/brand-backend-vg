import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  blogMainTitle: {
    type: String,
    required: [true, "please provide a main tile of the blog"],
  },

  blogTitle: {
    type: String,
    required: [true, "please provide a blog title"],
  },
  blogAuthor: {
    type: String,
    required: [true, "please provide a blog author"],
  },
  blogImage: {
    type: String,
    required: [true, "please provide a blog Image"],
  },
  blogSummary: {
    type: String,
    maxLength: 100,
    required: [true, "please provide a short description max length of 100"],
  },
  blogDescription: {
    type: String,
    required: [true, "please provide a short description"],
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
blogSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "fullName email role",
  });
  this.populate({
    path: "comment",
    select: "user content postedAt",
  });
  next();
});
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
