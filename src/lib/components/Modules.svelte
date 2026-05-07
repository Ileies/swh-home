<script lang="ts">
	import cms from '$lib/cms.svelte';
	import ModuleGrid from '$lib/components/ModuleGrid.svelte';
	import ModuleStats from '$lib/components/ModuleStats.svelte';

	const modules = cms.modules.showcase
		.map(moduleId => cms.modules.list.find(item => item.id === moduleId))
		.filter(item => item !== undefined);
</script>

<section id="modules" class="py-16 bg-white">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">{cms.modules.title}</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto">
				{cms.modules.description}
			</p>
		</div>

		<ModuleGrid {modules} />

		<div class="text-center mt-8">
			<a href="/modules">
				<button class="btn btn-primary gap-2 px-8 transition-transform duration-300 hover:scale-105">
					{cms.modules.discoverAll}
				</button>
			</a>
		</div>

		<ModuleStats />
	</div>
</section>
