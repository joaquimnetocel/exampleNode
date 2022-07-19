// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// MODULES
import { modulePrisma } from "#pathModules/modulePrisma.js";
/////

// EXPRESS
const constExpress = express();
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
constExpress.get("/routeGetUsers", async function (req, res) {
	const constUsers = await modulePrisma.tableUser.findMany();
	res.json(constUsers);
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeGetUsers");
});
/////
