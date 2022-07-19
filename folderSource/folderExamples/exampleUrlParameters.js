// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const constExpress = express();
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
constExpress.get("/routeParamsExample/:parName", function (req, res) {
	res.send("THE NAME IS " + req.params.parName);
});
constExpress.get("/routeQueryExample", function (req, res) {
	res.send(`THE NAME IS ${req.query.parName} AND THE AGE IS ${req.query.parAge}`);
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeParamsExample/john");
	console.log("* http://localhost:8081/routeQueryExample?parName=john&parAge=20");
});
/////
