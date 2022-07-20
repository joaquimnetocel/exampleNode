// NPM MODULES
import express from "express";
import { createServer } from "http";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import graphqlPlaygroundHtml, { RenderPageOptions } from "graphql-playground-html";
/////

// MODULES
import { moduleApplication } from "./folderApplication/moduleApplication.js";
/////

// EXPRESS
const constExpress = express();
/////

// NPM MIDDLEWARES
constExpress.use(cors({ origin: "*" }));
/////

// ROUTES
constExpress.use(
	"/routeGraphql",
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	graphqlHTTP(function (req: any, res: any) {
		res.locals.User = { LoggedId: 1 };
		return {
			schema: moduleApplication.schema,
			customExecuteFn: moduleApplication.execute,
			context: {
				User: res.locals.User,
			},
			graphiql: true,
		};
	}),
);
constExpress.use("/routeGraphqlPlayground", function (req, res) {
	res.setHeader("Content-Type", "text/html");

	const constPlaygroundOptions: RenderPageOptions = {};

	const functionSetEndpoint = function () {
		if (req.query.parAuthorization === undefined) {
			constPlaygroundOptions.endpoint = `/routeGraphql`;
			constPlaygroundOptions.subscriptionEndpoint = `/routeGraphql`;
			return;
		}
		const constHeaders = JSON.stringify({
			authorization: decodeURIComponent(<string>req.query.parAuthorization),
		});
		constPlaygroundOptions.endpoint = `/routeGraphql?headers=${encodeURIComponent(constHeaders)}`;
		constPlaygroundOptions.subscriptionEndpoint = `/routeGraphql?headers=${encodeURIComponent(constHeaders)}`;
		//ALTERNATIVE WAY TO SET HEADERS:
		// constPlaygroundOptions.settings = {
		// 	"request.globalHeaders": { authorization: decodeURIComponent(<string>req.query.parAuthorization) },
		// };
	};
	functionSetEndpoint();

	const constPlayground = graphqlPlaygroundHtml.renderPlaygroundPage(constPlaygroundOptions);

	res.write(constPlayground);
	res.end();
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081/routeGraphql");
	console.log("* http://localhost:8081/routeGraphqlPlayground");
});
/////
