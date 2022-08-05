// NPM MODULES
import { createModule } from "graphql-modules";
/////

// MODULES
import { constTypedefs } from "./constTypedefs.js";
import { constResolvers } from "./constResolvers.js";
/////

const graphqlmoduleSubscriptions = createModule({
	id: "graphqlmoduleSubscriptions",
	typeDefs: [constTypedefs],
	resolvers: [constResolvers],
});

export { graphqlmoduleSubscriptions };
