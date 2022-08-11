// NPM MODULES
import { Router, static as expressStatic } from "express";
import { getDistDirectory, renderAltair } from "altair-static";
/////

// CONSTANTS
const stringEndPointUrl = "http://localhost:8081/routeGraphql";
/////

// MIDDLEWARES
const middlewareTrailingSlash = function (req, res, next) {
	// REDIRECT ALL TRAILING SLASH
	const path = req.originalUrl.replace(/\?.*/, "");
	if (!path.endsWith("/")) {
		const query = req.originalUrl.slice(path.length);
		return res.redirect(301, path + "/" + query);
	}
	next();
};
const middlewareInitialHeaders = function (req, res, next) {
	if (req.query.parAuthorization === undefined) {
		const objectInitialHeaders = {};
		res.locals.objectInitialHeaders = objectInitialHeaders;
		next();
	}
	const objectInitialHeaders = {
		initialHeaders: {
			authorization: decodeURIComponent(req.query.parAuthorization),
			// authorization: decodeURIComponent(<string>req.query.parAuthorization),
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
routerAltairGraphqlClient.get("/", [middlewareTrailingSlash, middlewareInitialHeaders], (req, res) => {
	const stringAltair = renderAltair({
		...res.locals.objectInitialHeaders,
		endpointURL: stringEndPointUrl,
		initialQuery: `query{ queryHelloGuys }`,
		initialWindows: [
			{
				...res.locals.objectInitialHeaders,
				initialName: "HELLO GUYS",
				endpointURL: stringEndPointUrl,
				initialQuery: "query { queryHelloGuys }",
			},
		],
	});

	res.send(stringAltair);
});

//STATIC
routerAltairGraphqlClient.use(expressStatic(getDistDirectory()));
/////

export { routerAltairGraphqlClient };
