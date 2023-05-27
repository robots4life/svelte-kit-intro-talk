<script>
	export let data;
</script>

Post Data : {data}

{#await data.streamed.gallery}
	<!-- promise is pending -->
	<h1 class="text-9xl">promise is pending</h1>
{:then value}
	<!-- promise was fulfilled -->
	<pre>{JSON.stringify(value, null, 2)}</pre>
{:catch error}
	<!-- promise was rejected -->
	{error}
{/await}
