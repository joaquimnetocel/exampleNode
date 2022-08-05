// NPM MODULES
import { Router, static as expressStatic, Request, Response, NextFunction } from "express";
import { getDistDirectory, renderAltair, RenderOptions } from "altair-static";
/////

// CONSTANTS
const stringEndPointUrl = "http://localhost:8081/routeGraphql";
const stringSubscriptionEndpoint = "ws://localhost:8081/routeGraphql";
/////

// MIDDLEWARES
const middlewareTrailingSlash = function (req: Request, res: Response, next: NextFunction) {
	// REDIRECT ALL TRAILING SLASH
	const path = req.originalUrl.replace(/\?.*/, "");
	if (!path.endsWith("/")) {
		const query = req.originalUrl.slice(path.length);
		return res.redirect(301, path + "/" + query);
	}
	next();
};
const middlewareInitialHeaders = function (req: Request, res: Response, next: NextFunction) {
	if (req.query.parAuthorization === undefined) {
		const objectInitialHeaders: RenderOptions["initialHeaders"] = {};
		res.locals.objectInitialHeaders = objectInitialHeaders;
		next();
	}
	const objectInitialHeaders: RenderOptions["initialHeaders"] = {
		initialHeaders: {
			authorization: decodeURIComponent(<string>req.query.parAuthorization),
		},
	};

	res.locals.objectInitialHeaders = objectInitialHeaders;
	next();
};
/////

//ROUTER
const routerAltairGraphqlClient = Router({
	strict: false, // Disable strict routing since we *need* to make sure the route does not end with a trailing slash
});
/////

// ROUTES
routerAltairGraphqlClient.get("/", [middlewareTrailingSlash, middlewareInitialHeaders], (req: Request, res: Response) => {
	const stringAltair = renderAltair({
		...res.locals.objectInitialHeaders,
		endpointURL: stringEndPointUrl,
		subscriptionsEndpoint: stringSubscriptionEndpoint,
		initialQuery: `query{ queryHelloGuys }`,
		initialSubscriptionsProvider: "graphql-ws",
		initialWindows: [
			{
				...res.locals.objectInitialHeaders,
				initialName: "SUBSCRIPTION EXAMPLE",
				endpointURL: stringEndPointUrl,
				subscriptionsEndpoint: stringSubscriptionEndpoint,
				initialQuery: "subscription { subscriptionMessage }",
				initialSubscriptionsProvider: "graphql-ws",
			},
			{
				...res.locals.objectInitialHeaders,
				initialName: "PUBLISH EXAMPLE",
				endpointURL: stringEndPointUrl,
				subscriptionsEndpoint: stringSubscriptionEndpoint,
				initialQuery: "query { publishMessage }",
				initialSubscriptionsProvider: "graphql-ws",
			},
		],
	});

	res.send(stringAltair);
});

//STATIC
routerAltairGraphqlClient.use(expressStatic(getDistDirectory()));
/////

export { routerAltairGraphqlClient };
