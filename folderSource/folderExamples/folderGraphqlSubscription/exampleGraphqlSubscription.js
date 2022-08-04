// NPM MODULES
import express from "express";
import { createServer } from "http";
import cors from "cors";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

/////

// MODULE USED HERE TO SET SUBSCRIPTIONS
import { moduleApplication } from "./folderApplication/moduleApplication.js";
/////

// ROUTERS
import { routerGraphql } from "./routerGraphql.js";
// import { routerGraphqlPlayground } from "./routerGraphqlPlayground.js";
import { routerAltair } from "./routerAltair.js";
/////

// EXPRESS
const constExpress = express();
/////

// CORS MIDDLEWARE APPLIED TO ALL ROUTES
constExpress.use(cors({ origin: "*" }));
/////

// ROUTES
constExpress.use("/routeGraphql", routerGraphql);
constExpress.use("/routeAltair", routerAltair);
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	const functionSetSubscriptions = function () {
		const constWebSocketServer = new WebSocketServer({
			server: constServer,
			path: "/routeGraphql",
		});
		useServer(
			{
				schema: moduleApplication.schema,
				execute: moduleApplication.execute,
				subscribe: moduleApplication.subscribe,
			},
			constWebSocketServer,
		);
	};
	functionSetSubscriptions();

	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081/routeGraphql");
	// console.log("* http://localhost:8081/routeGraphqlPlayground");
	console.log("* http://localhost:8081/routeAltair");
});
/////
