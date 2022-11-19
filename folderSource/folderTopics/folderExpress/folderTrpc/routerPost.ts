import { trpcRouter, trpcPublicProcedure } from "./trpc";

export const routerPost = trpcRouter({
	hello: trpcPublicProcedure.query(({ ctx }) => {
		console.log("CONTEXT", ctx);
		return { aa: 11, bb: 22 };
	}),
});

type typePost = typeof routerPost;

export type { typePost };
