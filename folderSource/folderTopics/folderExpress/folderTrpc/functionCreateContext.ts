// NPM MODULES
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
/////

async function functionCreateContext({ req }: CreateNextContextOptions) {
	console.log(req.headers.authorization);
	return { aa: 11 };
}

export { functionCreateContext };
