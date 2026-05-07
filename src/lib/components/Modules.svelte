<script lang="ts">
	import cms from '$lib/cms.svelte';
	import ModuleGrid from '$lib/components/ModuleGrid.svelte';
	import ModuleStats from '$lib/components/ModuleStats.svelte';

	const modules = cms.modules.showcase
		.map((moduleId) => cms.modules.list.find((item) => item.id === moduleId))
		.filter((item) => item !== undefined);
</script>

<section id="modules" class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold">{cms.modules.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-base-content/70">
				{cms.modules.description}
			</p>
		</div>

		<ModuleGrid {modules} />

		<div class="mt-8 text-center">
			<a href="/modules">
				<button
					class="btn btn-primary gap-2 px-8 transition-transform duration-300 hover:scale-105"
				>
					{cms.modules.discoverAll}
				</button>
			</a>
		</div>

		<ModuleStats />
	</div>
</section>
