<script lang="ts">
	import { ArrowDown, ArrowUp } from 'lucide-svelte';
	import ModuleStats from '$lib/components/ModuleStats.svelte';
	import cms from '$lib/cms.svelte';
	import ModuleGrid from '$lib/components/ModuleGrid.svelte';

	let showAllModules = $state(false);
	let showcaseSection: HTMLDivElement;

	const modules = $derived(showAllModules ? cms.modules.list : cms.modules.showcase
		.map(moduleId => cms.modules.list.find(item => item.id === moduleId))
		.filter(item => item !== undefined)
	);

	function toggleModules() {
		showAllModules = !showAllModules;

		if (!showAllModules) {
			showcaseSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<section id="modules" class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">{cms.modules.title}</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto">
				{cms.modules.description}
			</p>
		</div>

		<div bind:this={showcaseSection}>
			<ModuleGrid {modules} />
		</div>

		<div class="text-center mt-8">
			<button
				class="btn btn-primary gap-2 px-8 transition-transform duration-300 hover:scale-105"
				onclick={toggleModules}
			>
				{showAllModules ? 'Weniger anzeigen' : 'Mehr anzeigen'}
				{#if showAllModules}
					<ArrowUp class="w-4 h-4" />
				{:else}
					<ArrowDown class="w-4 h-4" />
				{/if}
			</button>
		</div>

		<ModuleStats />
	</div>
</section>