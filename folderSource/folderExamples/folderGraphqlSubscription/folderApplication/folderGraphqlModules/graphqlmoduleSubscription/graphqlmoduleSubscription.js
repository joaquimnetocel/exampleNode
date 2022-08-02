// NPM MODULES
import { createModule } from "graphql-modules";
/////

// MODULES
import { constTypedefs } from "./constTypedefs.js";
import { constResolvers } from "./constResolvers.js";
/////

const graphqlmoduleSubscription = createModule({
	id: "graphqlmoduleSubscription",
	typeDefs: [constTypedefs],
	resolvers: [constResolvers],
});

export { graphqlmoduleSubscription };
