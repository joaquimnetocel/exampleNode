// NPM MODULES
import { createApplication } from "graphql-modules";
/////

// GRAPHQL MODULES
import { graphqlmoduleHello } from "./folderGraphqlModules/graphqlmoduleHello/graphqlmoduleHello.js";
/////

// CONSTANTS
const constApplication = createApplication({
	modules: [graphqlmoduleHello],
});

const moduleApplication = {
	execute: constApplication.createExecution(),
	subscribe: constApplication.createSubscription(),
	schema: constApplication.schema,
};

/////

export { moduleApplication };
