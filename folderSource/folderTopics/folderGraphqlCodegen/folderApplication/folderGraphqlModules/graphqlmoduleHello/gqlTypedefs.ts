// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	type Query {
		queryHelloGuys: String!
		queryHello(argName: String!): String!
	}
`;

export { gqlTypedefs };
