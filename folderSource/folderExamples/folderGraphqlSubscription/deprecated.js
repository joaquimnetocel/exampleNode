// NPM MODULES
import express from "express";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
import "dotenv/config";
import cors from "cors";

/////

// GRAPHQL SUBSCRIPTION MODULES
import { moduleApplication } from "./folderApplication/moduleApplication.js";
/////

// ACTIONS
import { routerGraphql } from "./routerGraphql.js";
import { routerGraphqlPlayground } from "./routerGraphqlPlayground.js";
/////

const closureInit = async function () {
	// MAIN ROUTER
	const constExpress = express();
	/////

	constExpress.use(cors({ origin: "*" }));

	// ROUTES
	constExpress.use("/routeGraphql", routerGraphql);
	constExpress.use("/routeGraphqlPlayground", routerGraphqlPlayground);
	/////

	// RUNNING SERVER
	const constServer = createServer(constExpress);
	const constPort = 8081;
	constServer.listen(constPort, () => {
		console.log(`SERVER RUNNING ON PORT ${constPort}!`);

		new SubscriptionServer(
			{
				execute: moduleApplication.execute,
				subscribe: moduleApplication.subscribe,
				schema: moduleApplication.schema,
			},
			{
				server: constServer,
				path: "/routeGraphql",
			},
		);
	});
	/////
};

try {
	closureInit();
} catch (constError) {
	console.log(constError);
}
