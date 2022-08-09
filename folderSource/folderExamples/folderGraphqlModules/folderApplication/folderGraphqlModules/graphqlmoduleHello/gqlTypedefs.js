// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	type Query {
		queryHelloGuys: String!
		queryHello(argName: String!): String!
	}
	type Mutation {
		mutationHelloGuys: String!
		mutationHello(argName: String!): String!
	}
`;

export { gqlTypedefs };
