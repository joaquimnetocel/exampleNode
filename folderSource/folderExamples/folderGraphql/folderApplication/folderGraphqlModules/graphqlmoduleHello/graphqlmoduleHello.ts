// NPM MODULES
import { createModule, gql } from "graphql-modules";
/////

// ID, String, Int, Float, Boolean, DateTime

const constTypedef = gql`
	type Query {
		queryHello: String!
	}
	type Mutation {
		mutationHello: String!
	}
`;

const constResolvers = {
	Query: {
		queryHello: function () {
			return "Hello query!";
		},
	},

	Mutation: {
		mutationHello: function () {
			return "Hello mutation!";
		},
	},
};

const graphqlmoduleHello = createModule({
	id: "graphqlmoduleHello",
	typeDefs: [constTypedef],
	resolvers: [constResolvers],
});

export { graphqlmoduleHello };
