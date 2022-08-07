// NPM MODULES
import { gql } from "graphql-modules";
/////

const constTypedefs = gql`
	type Query {
		queryHelloGuys(argChannelIdentifier: Int!): String!
	}
`;

export { constTypedefs };
