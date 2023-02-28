import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

class commentController {
  static async postComment(req, res) {
    try {
      let blogIdFromParams = req.params.id;
      const newComment = await Comment.create(req.body);
      const blog = await Blog.findByIdAndUpdate(blogIdFromParams, {
        $push: {
          comment: newComment._id,
        },
      });
      if (!blog) {
        return res.status(404).json({
          error: "failed to create a comment",
        });
      }
      return res.status(201).json({
        message: "comment created successfully",
        data: blog,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error,
      });
    }
  }
  static async getAllComment(req, res) {
    try {
      const comments = await Comment.find();
      if (!comments) {
        res.status(404).json({
          message: `no comments found`,
        });
      }
      res.status(200).json({
        message: `${comments.length} has successfully retrieved`,
        data: comments,
      });
    } catch (error) {
      console.log("error");
      res.status(404).json({
        message: error,
      });
    }
  }
  static async delComment(req, res) {
    try {
      const id = req.params.id;
      const comment = await Comment.findByIdAndDelete(id);
      if (!comment) {
        res.status(404).json({
          message: `comment with id ${id} not deleted`,
        });
      } else {
        res.status(200).json({
          message: `the comment successfully deleted`,
          data: comment,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: error,
      });
    }
  }
}
export default commentController;
