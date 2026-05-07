<script>
	import cms from '$lib/cms.svelte';
</script>

<section id="features" class="bg-white py-24">
	<div class="container mx-auto px-4">
		<!-- Main Description -->
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold">{cms.description.title}</h2>
			<p class="text-xl text-base-content/80">{cms.description.text}</p>
		</div>

		<!-- Benefits -->
		<div class="mx-auto flex max-w-5xl flex-col gap-16 md:flex-row">
			{#each cms.description.benefits as benefit}
				{@const Icon = benefit.icon}
				<div class="flex-1">
					<Icon class="mb-6 h-8 w-8 text-primary" />
					<h3 class="mb-3 text-xl font-bold">{benefit.title}</h3>
					<p class="leading-relaxed text-base-content/70">
						{benefit.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
