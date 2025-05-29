import { z } from "zod"; // ✅ Import Zod for input validation and type inference
import { publicProcedure, router } from "../trpc"; // ✅ Import tRPC helpers to define procedures and routers

// ✅ Define a router with a single procedure called `getGreeting`
export const exampleRouter = router({
	getGreeting: publicProcedure
		// ✅ Validate input using Zod: expects an object with a string `name`
		.input(z.object({ name: z.string() }))
		// ✅ Define a query procedure (read-only) that returns a message
		.query(({ input }) => {
			return { message: `Hello, ${input.name}!` }; // ✅ Response is typed and returned to client
		}),
});

