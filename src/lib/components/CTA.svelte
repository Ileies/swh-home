<script>
	import { ArrowRight } from 'lucide-svelte';
	import cms from '$lib/cms.svelte';
</script>

<section class="bg-primary py-12 text-primary-content" id="contact">
	<div class="container mx-auto px-4">
		<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row">
			<!-- Left side: Main content -->
			<div class="md:w-2/3">
				<h2 class="mb-4 text-3xl font-bold">
					{cms.contact.title}
				</h2>
				<p class="mb-6 max-w-xl text-lg text-primary-content/90">
					{cms.contact.description}
				</p>

				<!-- Stats -->
				<div class="mt-4 flex flex-wrap gap-8 text-sm">
					{#each cms.stats as stat}
						<div>
							<div class="text-2xl font-bold">{stat.metric}</div>
							<div class="opacity-90">{stat.title}</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Right side: CTA Card -->
			<div class="md:w-1/3">
				<div class="rounded-box bg-base-100 p-6 text-base-content shadow-xl">
					<h3 class="mb-4 text-xl font-bold">{cms.call}</h3>
					<ul class="mb-6 space-y-3">
						{#each cms.contact.solutions as solution}
							<li class="flex items-center gap-2">
								<ArrowRight class="h-4 w-4 text-primary" />
								<span>{solution}</span>
							</li>
						{/each}
					</ul>
					<a href={cms.contactLink} target="_blank">
						<button class="btn btn-primary w-full">
							{cms.contact.appointment}
						</button>
					</a>
					<a href={cms.demoUrl} target="_blank">
						<button class="btn btn-outline mt-3 w-full"> Live Demo starten </button>
					</a>
					<p class="mt-4 text-center text-xs text-base-content/70">
						{cms.contact.slogan}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
