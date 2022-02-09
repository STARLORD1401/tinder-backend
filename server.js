import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares

//DBconfig

//API Endpoints
app.get("/", (req, res) => res.status(200).send("hello clever programmers"));

//Listener
app.listen(port, () => console.log(`listening on localhost:${port} `));
