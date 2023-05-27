// GET
export const load = async () => {
	console.log('Stream +page.server.js : GET request received');

	const request = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
	const data = await request.json();

	// https://svelte.dev/blog/streaming-snapshots-sveltekit
	const streamPageData = async () => {
		//
		await new Promise((r) => setTimeout(r, 2000));

		return { streamedData: 1234 };
	};
	//
	console.log('Stream +page.server.js : GET request end');
	//
	return {
		pokemon: data,
		streamed: {
			gallery: streamPageData()
		}
	};
};
