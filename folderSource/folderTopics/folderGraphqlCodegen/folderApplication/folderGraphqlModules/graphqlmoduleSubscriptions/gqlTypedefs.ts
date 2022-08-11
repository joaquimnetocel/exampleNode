// NPM MODULES
import { gql } from "graphql-modules";
/////

const gqlTypedefs = gql`
	type typeMessageMessage {
		Author: String
		Text: String
	}
	type Subscription {
		subscribeMessage(argChannelIdentifier: Int!): typeMessageMessage
	}
`;

export { gqlTypedefs };
