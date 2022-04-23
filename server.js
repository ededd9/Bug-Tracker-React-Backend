//IMPORTS
import "dotenv/config.js";
import "./config/database.js";
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import { Ticket } from "./models/tickets.js";
const app = express();
//MIDDLEWARE
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  Ticket.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log("Server is running");
});
export { app };
