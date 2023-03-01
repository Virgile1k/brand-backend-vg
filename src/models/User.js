import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please provide a fullName"],
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    lowerCase: true,
    unique: true,
  },
  password: {
    type: String,

    required: [true, "please provide a password"],
  },
  repeatPassword: {
    type: String,
    required: [true, "please provide a repeated password"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  registered: {
    type: Date,
    default: Date.now(),
  },
});
const user = mongoose.model("User", userSchema);
export default user;
