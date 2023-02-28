import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: [true, "please provide content of the comment "],
  },
  postedAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});
commentSchema.pre("/^find/", function (next) {
  this.populate({
    path: "user",
    select: "fullName",
  });
  next();
});
const comment = mongoose.model("Comment", commentSchema);
export default comment;
