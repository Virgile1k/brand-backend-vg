import Blog from "../models/Blog.js";
import errorMessage from "../utils/errorHandle.js";
import succcessMessage from "../utils/successHandle.js";
import failureMessage from "../utils/failureHandle.js";
class blogController {
  static async createBlog(req, res) {
    const newBlog = await Blog.create(req.body);
    const status = 201;
    const msge = "blog successfully created";
    const data = newBlog;
    succcessMessage(res, status, msge, data);
  }
  static async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      if (!blogs) {
        const status = 404;
        const failuremsg = `blogs not Found`;

        failureMessage(res, status, failuremsg);
      } else {
        const status = 200;
        const msge = ` ${blogs.length} blog successfully retrieved`;
        const data = blogs;
        succcessMessage(res, status, msge, data);
      }
    } catch (error) {
      const errorMsge = error.message;
      errorMessage(res, errorMsge);
    }
  }
  static async getOneBlog(req, res) {
    //iyi id nirikuva muri routes
    const { id } = req.params;
    try {
      const blogs = await Blog.findOne({ _id: id });
      if (!blogs) {
        const status = 404;
        const failuremsg = `blog with id ${id} not found`;
        failureMessage(res, status, failuremsg);
      } else {
        const status = 200;
        const msge = ` blog with id ${id} retrieved successfuly`;
        const data = blogs;
        succcessMessage(res, status, msge, data);
      }
    } catch (error) {
      const errorMsge = error.message;
      errorMessage(res, errorMsge);
    }
  }
  static async updateBlog(req, res) {
    //iyi id nirikuva muri routes
    const { id } = req.params;
    const _id = id;
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
      const blogs = await Blog.findByIdAndUpdate(
        _id,
        {
          blogMainTitle,
          blogTitle,
          blogAuthor,
          blogImage,
          blogSummary,
          blogDescription,
          publishedDate,
        },
        { new: true }
      );
      if (!blogs) {
        const status = 404;
        const failuremsg = `blog with id ${id} not found`;
        failureMessage(res, status, failuremsg);
      } else {
        const status = 200;
        const msge = ` blog with id ${id} successfuly updated`;
        const data = blogs;
        succcessMessage(res, status, msge, data);
      }
    } catch (error) {
      const errorMsge = error.message;
      errorMessage(res, errorMsge);
    }
  }
  static async deleteBlog(req, res) {
    //iyi id nirikuva muri routes
    const { id } = req.params;
    const _id = id;

    try {
      const blogs = await Blog.findByIdAndDelete(_id);
      if (!blogs) {
        const status = 404;
        const failuremsg = `blog with id ${id} not deleted`;
        failureMessage(res, status, failuremsg);
      } else {
        const status = 200;
        const msge = ` blog with id ${id} successfuly deleted`;
        const data = blogs;
        succcessMessage(res, status, msge, data);
      }
    } catch (error) {
      const errorMsge = error.message;
      errorMessage(res, errorMsge);
    }
  }
}
export default blogController;
