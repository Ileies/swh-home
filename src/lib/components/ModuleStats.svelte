<script>
	import cms from '$lib/cms.svelte';
</script>

<div class="mt-16 bg-base-200 rounded-box p-8">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
		{#each cms.modules.stats as stat}
			<div>
				<div class="font-bold text-3xl text-primary mb-2">{stat.metric}</div>
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