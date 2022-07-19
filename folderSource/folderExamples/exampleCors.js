// NPM MODULES
import express from "express";
import { createServer } from "http";
import cors from "cors";
/////

// EXPRESS
const constExpress = express();
/////

// CORS MIDDLEWARE APPLIED TO ALL ROUTES
constExpress.use(cors({ origin: "*" }));
/////

// ROUTES DEFINITION
constExpress.get("/", function (req, res) {
	res.json({ name: "John", age: 20 });
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTE:");
	console.log("* http://localhost:8081");
});
/////
