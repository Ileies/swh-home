<!-- Modules.svelte -->
<script>
	import { ArrowDown, ArrowUp } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import ModuleStats from '$lib/components/ModuleStats.svelte';
	import cms from '$lib/cms.svelte';
	import ModuleGrid from '$lib/components/ModuleGrid.svelte';
	import { cubicInOut } from 'svelte/easing';

	let showAllModules = false;
	let showcaseSection;

	// Showcase Module
	$: showcase = cms.modules.showcase
		.map(moduleId => cms.modules.list.find(item => item.id === moduleId))
		.filter(Boolean);

	// Restliche Module
	$: remainingModules = cms.modules.list
		.filter(module => !cms.modules.showcase.includes(module.id));

	function toggleModules() {
		showAllModules = !showAllModules;

		// Wenn Module eingeklappt werden, scroll zurück zum Showcase
		if (!showAllModules && showcaseSection) {
			showcaseSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">{cms.modules.title}</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto">
				{cms.modules.description}
			</p>
		</div>

		<div bind:this={showcaseSection}>
			<ModuleGrid modules={showcase} />
		</div>

		{#if showAllModules}
			<div
				class="mt-8"
				transition:slide={{
          duration: 400,
          easing: cubicInOut
        }}
			>
				<ModuleGrid modules={remainingModules} />
			</div>
		{/if}

		<div class="text-center mt-8">
			<button
				class="btn btn-primary gap-2 px-8 transition-transform duration-300 hover:scale-105"
				on:click={toggleModules}
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