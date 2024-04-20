import express from "express";
import { App } from "./app";

const app = express();
App(app);

const Main = async () => {
  try {
    console.log("...........".repeat(5));
    console.log("server is on fire");
    console.log("...........".repeat(5));
  } catch (error) {
    console.log(error);
  }
};
Main();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
