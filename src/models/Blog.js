import { timeStamp } from "console";
import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  blogMainTitle: {
    type: String,
    required: true,
  },
  blogTitle: {
    type: String,
    required: true,
  },
  blogAuthor: {
    type: String,
    required: true,
  },
  blogImage: {
    type: String,
    required: true,
  },
  blogSummary: {
    type: String,
    maxLength: 100,
    required: true,
  },
  blogDescription: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
});
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
