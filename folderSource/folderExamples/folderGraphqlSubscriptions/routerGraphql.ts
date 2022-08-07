// NPM MODULES
import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
/////

// MODULES
import { moduleApplication } from "./folderApplication/moduleApplication.js";
/////

// ROUTER
const routerGraphql = Router();
/////

// ROUTES
routerGraphql.use(
	"/",
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	graphqlHTTP(function (req: any, res: any) {
		console.log("Authorization:", req.headers.authorization);
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
/////

export { routerGraphql };
