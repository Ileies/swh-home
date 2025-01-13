<script>
	const { modules } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
	{#each modules as module}
		<div class="rounded-box border border-base-content/10 bg-base-100 p-6 transition-all duration-300 hover:shadow-lg">
			<div class="mb-4">
				<svelte:component
					this={module.icon}
					class="w-8 h-8 text-primary"
				/>
			</div>
			<h3 class="font-bold text-xl mb-2">{module.title}</h3>
			<p class="text-base-content/70">{module.description}</p>
		</div>
	{/each}
</div>
