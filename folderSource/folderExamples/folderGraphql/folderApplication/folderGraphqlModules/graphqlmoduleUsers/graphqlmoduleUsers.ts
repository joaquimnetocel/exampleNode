// NPM MODULES
import { createModule, gql } from "graphql-modules";
/////

// ID, String, Int, Float, Boolean, DateTime

const constTypedef = gql`
	extend type Query {
		readUser(argId: Int!): typeUser
	}
	extend type Mutation {
		createSomething: String!
		updateSomething: String!
		deleteSomething: String!
	}
	type typeUser {
		fieldUserId: Int!
		fieldEmail: String!
		fieldAge: Int
		fieldName: String!
		fieldLanguage: enumLanguage
	}
	enum enumLanguage {
		English
		Portuguese
	}
`;

const constResolvers = {
	Query: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		readUser: async function (argParent: any, argArguments: any, argContext: any) {
			console.log("PARENT:", argParent);
			console.log("ARGUMENT:", argArguments);
			console.log("CONTEXT:", argContext.User);
			console.log(`PRETENDING TO SEARCH FOR THE USER WITH ID EQUAL TO ${argArguments.argId} IN THE DATABASE.`);
			if (argArguments.argId === 1) {
				return {
					fieldEmail: "john@provider.com",
					fieldUserId: 1,
					fieldName: "John",
					fieldAge: null,
				};
			}
			return null;
		},
	},

	Mutation: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		createSomething: async function (argParent: any, argArguments: any, argContext: any) {
			console.log("PARENT:", argParent);
			console.log("ARGUMENT:", argArguments);
			console.log("CONTEXT:", argContext.User);
			return "SOMETHING WAS CREATED!";
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		updateSomething: async function (argParent: any, argArguments: any, argContext: any) {
			console.log("PARENT:", argParent);
			console.log("ARGUMENT:", argArguments);
			console.log("CONTEXT:", argContext.User);
			return "SOMETHING WAS UPDATED!";
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		deleteSomething: async function (argParent: any, argArguments: any, argContext: any) {
			console.log("PARENT:", argParent);
			console.log("ARGUMENT:", argArguments);
			console.log("CONTEXT:", argContext.User);
			return "SOMETHING WAS DELETED!";
		},
	},
};

const graphqlmoduleUsers = createModule({
	id: "graphqlmoduleUsers",
	typeDefs: [constTypedef],
	resolvers: [constResolvers],
});

export { graphqlmoduleUsers };
