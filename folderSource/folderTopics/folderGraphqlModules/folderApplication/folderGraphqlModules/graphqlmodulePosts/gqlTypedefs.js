// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	extend type Query {
		readPosts(where: inputWhere): [typePost!]!
	}
	extend type typeUser {
		readPosts(where: inputWhere): [typePost!]!
	}
	type typePost {
		fieldPostId: Int
		fieldDescription: String
		fieldUserIndex: Int
		fieldStatus: String
	}
	input inputWhere {
		fieldStatus: enumStatus
	}
	enum enumStatus {
		enumPublished
		enumDraft
	}
`;

export { gqlTypedefs };
