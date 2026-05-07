<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	const {
		modules
	}: {
		modules: { icon: typeof FileText; title: string; description: string; inclusive?: boolean }[];
	} = $props();
</script>

<div class="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each modules as module (module.title)}
		{@const Component = module.icon}
		<div
			class="rounded-box border border-base-content/10 bg-base-100 p-6 transition-all duration-300 hover:shadow-lg"
			transition:fade={{ duration: 300 }}
		>
			<div class="mb-4">
				<Component class="h-8 w-8 text-primary" />
			</div>
			<h3 class="mb-2 text-xl font-bold">{module.title}</h3>
			<p class="text-base-content/70">{module.description}</p>
		</div>
	{/each}
</div>
