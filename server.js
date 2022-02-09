import express from "express";
import mongoose from "mongoose";
import { ppid } from "process";

//App Config
const app = express();
const port = process.env.PORT || 8001;

//Middleware

//DB config

//API Endpoints
app.get("/", (req, res) => res.status(200).send("hello clever programmers!"));
//Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
