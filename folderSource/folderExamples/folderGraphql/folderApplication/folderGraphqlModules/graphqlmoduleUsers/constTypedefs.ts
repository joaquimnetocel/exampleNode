// NPM MODULES
import { gql } from "graphql-modules";
/////

const constTypedefs = gql`
	extend type Query {
		readUsers: [typeUser!]!
		readUser(argUserId: Int!): typeUser
		readLoggedUser: typeUser
	}
	extend type Mutation {
		createUser(argData: inputCreateUser!): typeUser!
		updateUser(argId: Int!, argData: inputUpdateUser): typeUser
		deleteUser(argId: Int!): typeUser
	}
	type typeUser {
		fieldUserId: Int!
		fieldName: String!
		fieldAge: Int
		fieldLanguage: enumLanguage
	}
	input inputCreateUser {
		fieldName: String!
		fieldAge: Int
		fieldLanguage: enumLanguage
	}
	input inputUpdateUser {
		fieldName: String
		fieldAge: Int
		fieldLanguage: enumLanguage
	}
	enum enumLanguage {
		enumEnlglish
		enumPortuguese
	}
`;

export { constTypedefs };
