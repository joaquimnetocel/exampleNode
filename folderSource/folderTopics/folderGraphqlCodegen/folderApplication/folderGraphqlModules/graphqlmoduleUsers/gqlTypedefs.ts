// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	type typeUsers {
		fieldUserId: Int!
		fieldEmail: String!
		fieldName: String!
		fieldAge: Int
	}
	type Query {
		readUsers: [typeUsers!]!
	}
`;

export { gqlTypedefs };
