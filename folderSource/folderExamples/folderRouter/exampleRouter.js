// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const constExpress = express();
/////

// ROUTERS
import { routerProducts } from "./routerProducts.js";
import { routerClients } from "./routerClients.js";
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
constExpress.use("/routerProducts", routerProducts);
constExpress.use("/routerClients", routerClients);
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routerProducts/routeProductA");
	console.log("* http://localhost:8081/routerProducts/routeProductB");
	console.log("* http://localhost:8081/routerClients/routeClientA");
	console.log("* http://localhost:8081/routerClients/routeClientB");
});
/////
