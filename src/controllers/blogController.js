import Blog from "../models/Blog.js";
import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
class blogController {
  static async createBlog(req, res) {
    const {
      blogMainTitle,
      blogTitle,
      blogAuthor,
      blogImage,

      blogSummary,
      blogDescription,
      publishedDate,
    } = req.body;
    try {
      const newBlog = await Blog.create({
        blogMainTitle,
        blogTitle,
        blogAuthor,
        blogImage,

        blogSummary,
        blogDescription,
        publishedDate,
      });
      const status = 201;
      const msge = "blog successfully created";
      const data = newBlog;
      succcessMessage(res, status, msge, data);
    } catch (error) {
      const errorMsge = error.message;
      errorMessage(res, errorMsge);
    }
  }
  static async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      const status = 200;
      const msge = ` ${blogs.length} blog successfully retrieved`;
      const data = blogs;
      succcessMessage(res, status, msge, data);
    } catch (error) {
      const errorMsge = error.message;
      errorMessage(res, errorMessage);
    }
  }
}
export default blogController;
