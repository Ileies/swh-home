<script>
	import { ArrowRight } from 'lucide-svelte';
	import ModuleStats from '$lib/components/ModuleStats.svelte';
	import cms from '$lib/cms.svelte';
	import ModuleGrid from '$lib/components/ModuleGrid.svelte';

	const showcase = $derived(cms.modules.showcase.map(module => cms.modules.list.find(item => item.id === module)));
</script>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">{cms.modules.title}</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto">{cms.modules.description}</p>
		</div>

		<ModuleGrid modules={showcase} />

		<div class="text-center">
			<a
				href="/modules"
				class="btn btn-primary gap-2 px-8"
			>
				{cms.modules.discoverAll}
				<ArrowRight class="w-4 h-4" />
			</a>
		</div>

		<ModuleStats />
	</div>
</section>