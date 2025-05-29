// ✅ Import your app router (server-side tRPC definitions)
import { appRouter } from "@/server/api";
// ✅ Import fetch adapter for use with Next.js App Router
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// ✅ Handle GET requests (e.g., from tRPC's internal revalidation, prefetch, etc.)
export async function GET(request: Request) {
	return fetchRequestHandler({
		endpoint: "/api/trpc", // Matches route location
		req: request, // The incoming fetch request
		router: appRouter, // Your tRPC router (with all endpoints)
		createContext: () => ({}), // Optional: pass auth, DB, etc. in context
	});
}

// ✅ Handle POST requests (e.g., from mutations or queries with bodies)
export async function POST(request: Request) {
	return fetchRequestHandler({
		endpoint: "/api/trpc", // Again, make sure this matches the API route path
		req: request,
		router: appRouter,
		createContext: () => ({}),
	});
}

