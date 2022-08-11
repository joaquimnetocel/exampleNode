// NPM MODULES
import { createModule } from "graphql-modules";
/////

// MODULES
import { gqlTypedefs } from "./gqlTypedefs.js";
import { objectResolvers } from "./objectResolvers.js";
/////

const graphqlmoduleSubscriptions = createModule({
	id: "graphqlmoduleSubscriptions",
	typeDefs: [gqlTypedefs],
	resolvers: [objectResolvers],
});

export { graphqlmoduleSubscriptions };
