import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import swaggerDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// import YAML from "yamljs";
// import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./routes/index.js";

mongoose.set("strictQuery", false);
//config dotenv
dotenv.config();

// const swaggerJsDocs = YAML.load("./api.yaml");
const swaggerDocument = require("../swagger.json");

//create app instance
const app = express();

//use an app instance
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).send(`<h1>hello world</h1>`);
});
app.use("/api/v1/", routes);
//Define port and host
const host = process.env.HOST;
const port = process.env.PORT;

//morgan for logs
// if (process.env.NODE_ENV == "development") app.use(morgan);

//our mongodb instance
const con = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

//Listening to our server instance
const startServer = () => {
  app.listen(port);
};

Promise.all([con(), startServer()])
  .then(() => {
    console.log(`server running on ${port}`);
    console.log(`database successfuly connected`);
  })
  .catch((error) => {
    console.log(error);
  });
