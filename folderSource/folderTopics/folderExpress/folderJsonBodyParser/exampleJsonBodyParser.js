// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const constExpress = express();
/////

// MIDDLEWARE THAT PARSES JSON HTTP REQUEST BODIES INTO JAVASCRIPT OBJECTS. THIS MIDDLEWARE ADDS A BODY PROPERTY TO THE EXPRESS REQUEST "req". TO ACCESS THE PARSED REQUEST BODY, USE "req.body".
constExpress.use(express.json());
/////

// ROUTES

// YOU CAN TEST THE ROUTE BELOW WITH A BROWSER (NATURALLY) OR WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestGet.http".
constExpress.get("/routeGet", function (req, res) {
	res.send("THIS IS THE routeGet ROUTE.");
});

// YOU CAN TEST THE ROUTE BELOW WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestPost.http".
constExpress.post("/routePost", function (req, res) {
	console.log("REQUEST BODY:", req.body);
	res.send("THIS IS THE routePost ROUTE.");
});

// YOU CAN TEST THE ROUTE BELOW WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestUpdate.http".
constExpress.put("/routeUpdate", function (req, res) {
	console.log("REQUEST BODY:", req.body);
	res.send("THIS IS THE routeUpdate ROUTE.");
});

// YOU CAN TEST THE ROUTE BELOW WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestDelete.http".
constExpress.delete("/routeDelete", function (req, res) {
	res.send("THIS IS THE routeDelete ROUTE.");
});

/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081/routeGet");
	console.log("* http://localhost:8081/routePost (POST)");
	console.log("* http://localhost:8081/routeUpdate (PUT)");
	console.log("* http://localhost:8081/routeDelete (DELETE)");
});
/////
