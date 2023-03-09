import request from "supertest";
import app from "../src/app.js";
import { signUp } from "./user.mocks/signUp.js";
import { userValidCredential } from "./user.mocks/login.js";
import { userInvalidcredential } from "./user.mocks/login.js";
import { createBlog } from "./blog.mocks/createBlog.js";

let userToken = "";
let blogId = "";

describe("My brand Test", () => {
  test("SignUp data", async () => {
    const resp = await request(app).post("/api/v1/user").send(signUp);
    expect(resp.statusCode).toBe(201);
  });
  test("Login with valid credential", async () => {
    const resp = await request(app)
      .post("/api/v1/login")
      .send(userValidCredential);
    expect(resp.statusCode).toBe(200);
    const token = resp.headers["token"];

    // const token = tokenCookie.split(";")[0].split("=")[1];
    userToken = token;
  });
  test("Login with invalid credentials", async () => {
    const resp = await request(app)
      .post("/api/v1/login")
      .send(userInvalidcredential);
    expect(resp.statusCode).toBe(401);
  });
  test("add a Blog for authorized user", async () => {
    const response = await request(app)
      .post("/api/v1/blog")
      .send(createBlog)
      .set("token", `token=${userToken}`);
    expect(response.statusCode).toBe(201);
    const createdBlog = response.body.data;
    blogId = createdBlog._id;
  });
});
