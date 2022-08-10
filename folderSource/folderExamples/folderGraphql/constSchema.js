// NPM MODULES
import { buildSchema } from "graphql";
/////

const constSchema = buildSchema(`
	type Query {
    	queryHelloGuys: String!
		queryHello(argName: String!): String
	}
`);

export { constSchema };
