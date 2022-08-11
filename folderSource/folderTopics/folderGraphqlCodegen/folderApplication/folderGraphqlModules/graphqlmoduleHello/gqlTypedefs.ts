// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	type Query {
		queryHelloGuys: String!
		queryHello(argName: String!): String!
		queryHelloWithSubscription(argChannelIdentifier: Int!): String!
	}
`;

export { gqlTypedefs };
