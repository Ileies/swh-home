<script>
	import cms from '$lib/cms.svelte';
</script>

<div class="mt-16 rounded-box bg-base-200 p-8">
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center md:grid-cols-3">
		{#each cms.stats as stat}
			<div>
				<div class="mb-2 text-3xl font-bold text-primary">{stat.metric}</div>
				<div class="text-base-content/70">{stat.title}</div>
			</div>
		{/each}
	</div>
</div>

<!--<div class="flex flex-wrap gap-8 mt-4 text-sm">
	<div>
		<div class="font-bold text-2xl">30+</div>
		<div>KI-Module</div>
	</div>-->
