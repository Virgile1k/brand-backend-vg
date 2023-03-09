import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  blogMainTitle: {
    type: String,
  },

  blogTitle: {
    type: String,
  },
  blogAuthor: {
    type: String,
  },
  blogImage: {
    type: String,
  },
  blogSummary: {
    type: String,
  },
  blogDescription: {
    type: String,
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
