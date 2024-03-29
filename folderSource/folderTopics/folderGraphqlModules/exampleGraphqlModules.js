// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// ROUTERS
import { routerGraphql } from "./routerGraphql.js";
import { routerGraphqlPlayground } from "./routerGraphqlPlayground.js";
/////

// EXPRESS
const constExpress = express();
/////

// ROUTES
constExpress.use("/routeGraphql", routerGraphql);
constExpress.use("/routeGraphqlPlayground", routerGraphqlPlayground);
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081/routeGraphql");
	console.log("* http://localhost:8081/routeGraphqlPlayground");
});
/////
