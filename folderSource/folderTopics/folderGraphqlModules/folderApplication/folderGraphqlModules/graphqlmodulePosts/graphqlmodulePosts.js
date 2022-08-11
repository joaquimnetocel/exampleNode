// NPM MODULES
import { createModule } from "graphql-modules";
/////

//MODULES
import { gqlTypedefs } from "./gqlTypedefs.js";
import { objectResolvers } from "./objectResolvers.js";
/////

const graphqlmodulePosts = createModule({
	id: "graphqlmodulePosts",
	typeDefs: [gqlTypedefs],
	resolvers: [objectResolvers],
});

export { graphqlmodulePosts };
