<script lang="ts">
	import cms from '$lib/cms.svelte';
	import { PUBLIC_PROJECT_TITLE } from '$env/static/public';
	import { ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Alle KI-Module – {PUBLIC_PROJECT_TITLE}</title>
	<meta name="robots" content="index, follow" />
	<meta
		name="description"
		content="Vollständige Übersicht aller {PUBLIC_PROJECT_TITLE} KI-Module – von Chat-Assistenten über Dokumentengeneratoren bis zur Prozessanalyse."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-white pb-12 pt-32">
	<div class="container mx-auto max-w-4xl px-4 text-center">
		<a
			href="/#modules"
			class="mb-8 inline-flex items-center gap-2 text-sm text-base-content/50 transition-colors hover:text-base-content"
		>
			<ArrowLeft class="h-4 w-4" />
			Zurück zur Startseite
		</a>
		<h1 class="mb-4 text-4xl font-bold md:text-5xl">Alle KI-Module</h1>
		<p class="mx-auto max-w-2xl text-lg text-base-content/70">
			{cms.modules.description}
		</p>
	</div>
</section>

<!-- Module grid -->
<section class="bg-white py-12">
	<div class="container mx-auto max-w-6xl px-4">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each cms.modules.list as module (module.id)}
				{@const Icon = module.icon}
				<div
					class="rounded-box border border-base-content/10 bg-base-100 p-6 transition-shadow duration-300 hover:shadow-lg"
				>
					<div class="mb-4">
						<Icon class="h-8 w-8 text-primary" />
					</div>
					<h2 class="mb-2 text-lg font-bold">{module.title}</h2>
					<p class="text-sm leading-relaxed text-base-content/70">{module.description}</p>
					{#if module.inclusive}
						<div class="mt-4">
							<span class="text-xs font-medium text-primary">Im Basispaket enthalten</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="border-t border-base-content/10 bg-white py-16">
	<div class="container mx-auto max-w-xl px-4 text-center">
		<h2 class="mb-4 text-2xl font-bold">Überzeugt? Testen Sie es live.</h2>
		<p class="mb-8 text-base-content/70">
			Alle Module ohne Anmeldung und ohne Kreditkarte ausprobieren.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a href={cms.demoUrl} target="_blank">
				<button class="btn btn-primary btn-lg px-8">Live Demo starten</button>
			</a>
			<a href={cms.contactLink} target="_blank">
				<button class="btn btn-outline btn-lg px-8">{cms.call}</button>
			</a>
		</div>
	</div>
</section>
