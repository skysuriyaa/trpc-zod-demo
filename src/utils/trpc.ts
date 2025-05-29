import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/api";

// creates typed React hooks based on appRouter so your frontend calls are fully typed.
export const trpc = createTRPCReact<AppRouter>();
