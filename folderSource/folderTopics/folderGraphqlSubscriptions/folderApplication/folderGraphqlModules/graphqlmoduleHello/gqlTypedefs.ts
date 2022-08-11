// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	type Query {
		queryHelloGuys(argChannelIdentifier: Int!): String!
	}
`;

export { gqlTypedefs };
