// NPM MODULES
import { gql } from "graphql-modules";
/////

const constTypedefs = gql`
	type Query {
		queryHelloGuys: String!
		queryHello(argName: String!): String!
	}
`;

export { constTypedefs };
