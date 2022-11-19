// NPM MODULES
import express from "express";
import { createServer } from "http";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { functionCreateContext } from "./functionCreateContext.js";
/////

// MODULES
import { routerApp } from "./routerApp.js";
/////

// EXPRESS
const constExpress = express();
/////

// CORS MIDDLEWARE APPLIED TO ALL ROUTES
constExpress.use(cors({ origin: "*" }));
/////

// ROUTES
constExpress.use(
	"/routeTrpc",
	createExpressMiddleware({
		router: routerApp,
		createContext: functionCreateContext,
	}),
);
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeTrpc");
});
/////
