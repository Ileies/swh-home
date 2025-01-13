<script>
	import cms from '$lib/cms.svelte';
</script>

<section class="py-16 bg-base-200">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">{cms.privacy.title}</h2>
			<p class="text-lg text-base-content/80 max-w-2xl mx-auto">{cms.privacy.description}</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
			{#each cms.privacy.features as feature}
				<div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
					<div class="card-body items-center text-center">
						<div class="mb-4">
							<svelte:component
								this={feature.icon}
								class="w-12 h-12 text-primary"
							/>
						</div>
						<h3 class="card-title mb-2">{feature.title}</h3>
						<p class="text-base-content/70">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!--<div class="mt-12 text-center">
			<div class="alert bg-primary/10 max-w-2xl mx-auto">
				<div class="flex items-center gap-4">
					<Shield class="w-6 h-6 text-primary" />
					<span class="text-sm">
            Smartworkhub ist nach ISO 27001 zertifiziert und wird regelmäßig
            durch unabhängige Sicherheitsaudits geprüft.
          </span>
				</div>
			</div>
		</div>-->
	</div>
</section>
