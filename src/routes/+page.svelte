<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	const message = data.serverMessage.content;
</script>

<h1 class="flex items-center justify-center">Open AI</h1>

<p class="p-4 flex items-center justify-center">{message}</p>
