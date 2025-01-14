<script>
	import { ArrowRight } from 'lucide-svelte';
	import cms from '$lib/cms.svelte';
</script>

<section id="contact" class="py-12 bg-primary text-primary-content">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
			<!-- Left side: Main content -->
			<div class="md:w-2/3">
				<h2 class="text-3xl font-bold mb-4">
					{cms.contact.title}
				</h2>
				<p class="text-primary-content/90 text-lg mb-6 max-w-xl">
					{cms.contact.description}
				</p>

				<!-- Stats -->
				<div class="flex flex-wrap gap-8 mt-4 text-sm">
					{#each cms.stats as stat}
						<div>
							<div class="font-bold text-2xl">{stat.metric}</div>
							<div class="opacity-90">{stat.title}</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right side: CTA Card -->
			<div class="md:w-1/3">
				<div class="bg-base-100 text-base-content rounded-box p-6 shadow-xl">
					<h3 class="font-bold text-xl mb-4">{cms.call}</h3>
					<ul class="space-y-3 mb-6">
						{#each cms.contact.solutions as solution}
							<li class="flex items-center gap-2">
								<ArrowRight class="w-4 h-4 text-primary" />
								<span>{solution}</span>
							</li>
						{/each}
					</ul>
					<button class="btn btn-primary w-full">
						{cms.contact.appointment}
					</button>
					<p class="text-xs text-center mt-4 text-base-content/70">
						{cms.contact.slogan}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
