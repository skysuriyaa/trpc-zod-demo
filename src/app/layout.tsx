"use client";

import { trpc } from "@/utils/trpc";
import { httpBatchLink } from "@trpc/client";
// tRPC link that batches HTTP requests (useful for minimizing network requests).
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// React Query's client and provider to manage and cache server state.
import { type ReactNode, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());
	// Create and memoize a single React Query client instance on initial render.

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "/api/trpc", // URL of the tRPC API endpoint.
				}),
			],
		}),
	);
	// Create and memoize a single tRPC client instance using HTTP batching.

	return (
		<html lang="en">
			<body>
				{/* Provide tRPC context to the app so that any child can make API calls using tRPC. */}
				<trpc.Provider client={trpcClient} queryClient={queryClient}>
					{/* Provide React Query context so components can use caching, fetching, and mutations. */}
					<QueryClientProvider client={queryClient}>
						{children}
					</QueryClientProvider>
				</trpc.Provider>
			</body>
		</html>
	);
}
