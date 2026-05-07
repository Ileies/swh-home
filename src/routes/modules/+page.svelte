<script lang="ts">
	import cms from '$lib/cms.svelte';
	import { PUBLIC_PROJECT_TITLE } from '$env/static/public';
	import { ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Alle KI-Module – {PUBLIC_PROJECT_TITLE}</title>
	<meta name="description" content="Vollständige Übersicht aller {PUBLIC_PROJECT_TITLE} KI-Module – von Chat-Assistenten über Dokumentengeneratoren bis zur Prozessanalyse." />
</svelte:head>

<!-- Header -->
<section class="pt-32 pb-12 bg-white">
	<div class="container mx-auto px-4 max-w-4xl text-center">
		<a href="/#modules" class="inline-flex items-center gap-2 text-sm text-base-content/50 hover:text-base-content transition-colors mb-8">
			<ArrowLeft class="w-4 h-4" />
			Zurück zur Startseite
		</a>
		<h1 class="text-4xl md:text-5xl font-bold mb-4">Alle KI-Module</h1>
		<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
			{cms.modules.description}
		</p>
	</div>
</section>

<!-- Module grid -->
<section class="py-12 bg-white">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each cms.modules.list as module (module.id)}
				{@const Icon = module.icon}
				<div class="rounded-box border border-base-content/10 bg-base-100 p-6 hover:shadow-lg transition-shadow duration-300">
					<div class="mb-4">
						<Icon class="w-8 h-8 text-primary" />
					</div>
					<h2 class="font-bold text-lg mb-2">{module.title}</h2>
					<p class="text-base-content/70 text-sm leading-relaxed">{module.description}</p>
					{#if module.inclusive}
						<div class="mt-4">
							<span class="text-xs text-primary font-medium">Im Basispaket enthalten</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-16 bg-white border-t border-base-content/10">
	<div class="container mx-auto px-4 text-center max-w-xl">
		<h2 class="text-2xl font-bold mb-4">Überzeugt? Testen Sie es live.</h2>
		<p class="text-base-content/70 mb-8">Alle Module ohne Anmeldung und ohne Kreditkarte ausprobieren.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href={cms.demoUrl} target="_blank">
				<button class="btn btn-primary btn-lg px-8">Live Demo starten</button>
			</a>
			<a href={cms.contactLink} target="_blank">
				<button class="btn btn-outline btn-lg px-8">{cms.call}</button>
			</a>
		</div>
	</div>
</section>
