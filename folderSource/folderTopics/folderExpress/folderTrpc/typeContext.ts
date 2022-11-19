// NPM MODULES
import { inferAsyncReturnType } from "@trpc/server";
/////

// MODULES
import { functionCreateContext } from "./functionCreateContext.js";

type typeContext = inferAsyncReturnType<typeof functionCreateContext>;

export { type typeContext };
