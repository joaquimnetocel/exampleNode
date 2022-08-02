// NPM MODULES
import { gql } from "graphql-modules";
/////

const constTypedefs = gql`
	extend type Query {
		publishMessage: String
	}
	type Subscription {
		subscriptionMessage: String
	}
`;

export { constTypedefs };
