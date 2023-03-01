import express from "express";
import { check, validationResult } from "express-validator";

class Validator {
  static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.errors.map((err) => err.msg);
      return res.status(400).json({ message: errorMessage });
    }
    return next();
  };
  static newAccountRules() {
    return [
      //for user validator
      check("email", "email is invalid").isEmail(),
      check("password", "password is not strong").trim().isStrongPassword(),
      check("fullName", "fullName should be valid").trim().isString(),
    ];
  }

  //   blogMainTitle,
  //   blogTitle,
  //   blogAuthor,
  //   blogImage,
  //   blogSummary,
  //   blogDescription,
  //   publishedDate,

  static newBlogRules() {
    return [
      //for user validator
      check("blogMainTitle", "blogMainTitle is invalid, it should be a string")
        .trim()
        .isString(),
      check("blogTitle", "blogTitle is invalid, it should be a string")
        .trim()
        .isString(),
      check("blogAuthor", "blogAuthor is invalid, it should be a string")
        .trim()
        .isString(),
      check("blogImage", "blogImage is invalid, it should be a string")
        .trim()
        .isString(),
      check(
        "blogDescription",
        "blogDescription is invalid, it should be a string"
      )
        .trim()
        .isString(),
    ];
  }
}
export default Validator;
