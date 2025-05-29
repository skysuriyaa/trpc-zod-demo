"use client";

import { trpc } from "@/utils/trpc";

export default function Home() {
	const { data, isLoading } = trpc.example.getGreeting.useQuery({
		name: "Next.js App Router",
	});

	if (isLoading) return <p>Loading...</p>;

	return <h1>{data?.message}</h1>;
}
