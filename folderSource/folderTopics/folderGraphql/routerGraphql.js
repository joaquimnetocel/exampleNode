// NPM MODULES
import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
/////

// MODULES
import { constSchema } from "./constSchema.js";
import { constResolver } from "./constResolver.js";
/////

// ROUTER
const routerGraphql = Router();
/////

// ROUTES
routerGraphql.use(
	"/",
	graphqlHTTP(function (req, res) {
		// IF USING TYPESCRIPT: graphqlHTTP(function (req: any, res: any) {
		res.locals.User = { LoggedId: 1 };
		return {
			schema: constSchema,
			rootValue: constResolver,
			context: {
				User: res.locals.User,
			},
			graphiql: true,
		};
	}),
);
/////

export { routerGraphql };
