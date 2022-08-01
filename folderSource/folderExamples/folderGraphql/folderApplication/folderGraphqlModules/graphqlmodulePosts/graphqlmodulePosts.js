// NPM MODULES
import { createModule } from "graphql-modules";
/////

//MODULES
import { constTypedefs } from "./constTypedefs.js";
import { constResolvers } from "./constResolvers.js";
/////

const graphqlmodulePosts = createModule({
	id: "graphqlmodulePosts",
	typeDefs: [constTypedefs],
	resolvers: [constResolvers],
});

export { graphqlmodulePosts };
