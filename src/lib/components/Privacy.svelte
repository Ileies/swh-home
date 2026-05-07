<script>
	import cms from '$lib/cms.svelte';
</script>

<section class="bg-base-200 py-16">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold">{cms.privacy.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-base-content/80">{cms.privacy.description}</p>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each cms.privacy.features as feature}
				{@const Icon = feature.icon}
				<div class="card bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
					<div class="card-body items-center text-center">
						<div class="mb-4">
							<Icon class="h-12 w-12 text-primary" />
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
