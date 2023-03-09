import express from "express";
import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);
//config dotenv
dotenv.config();

//Define port and host
const host = process.env.HOST;
const port = process.env.PORT;

//Listening to our server instance
const startServer = () => {
  app.listen(port);
};

Promise.all([startServer()])
  .then(() => {
    console.log(`server running on ${port}`);
  })
  .catch((error) => {
    console.log(error);
  });
