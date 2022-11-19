// NPM MODULES
import { initTRPC } from "@trpc/server";
/////

// MODULES
import type { typeContext } from "./typeContext";

// CONSTANTS
const t = initTRPC.context<typeContext>().create();
export const trpcMiddleware = t.middleware;
export const trpcRouter = t.router;
export const trpcPublicProcedure = t.procedure;
export const trpcMergeRouters = t.mergeRouters;
/////
