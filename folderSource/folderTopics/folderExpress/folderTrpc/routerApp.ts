import { trpcMergeRouters } from "./trpc.js";
// import { trpcRouter } from "./trpc.js";

// import { userRouter } from "./user";
import { routerPost } from "./routerPost";

export const routerApp = trpcMergeRouters(routerPost);

// export const routerApp = trpcRouter({
// 	// user: userRouter, // put procedures under "user" namespace
// 	post: routerPost, // put procedures under "post" namespace
// });

type typeApp = typeof routerApp;

export type { typeApp };
