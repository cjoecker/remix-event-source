import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEventSource } from "remix-utils";

export async function loader() {
	return json({ time: new Date().getTime() });
}

export default function Time() {
	let loaderData = useLoaderData<typeof loader>();
	let time = useEventSource("/sse/time", { event: "time" }) ?? loaderData.time;

	return (
		<div>
			{time}
		</div>
	);
}
