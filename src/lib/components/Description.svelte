<script>
	import cms from '$lib/cms.svelte';
</script>

<section class="py-24 bg-base-200">
	<div class="container mx-auto px-4">
		<!-- Main Description -->
		<div class="text-center max-w-3xl mx-auto mb-16">
			<h2 class="text-4xl font-bold mb-6">{cms.descriptionTitle}</h2>
			<p class="text-xl text-base-content/80">{cms.descriptionText}</p>
		</div>

		<!-- Benefits -->
		<div class="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
			{#each cms.benefits as benefit}
				<div class="flex-1">
					<svelte:component
						this={benefit.icon}
						class="w-8 h-8 text-primary mb-6"
					/>
					<h3 class="text-xl font-bold mb-3">{benefit.title}</h3>
					<p class="text-base-content/70 leading-relaxed">
						{benefit.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>