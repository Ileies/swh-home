<!-- Description.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<section class="bg-gradient-to-b from-white to-gray-50 py-24">
	<div class="container mx-auto px-4">
		<div class="max-w-4xl mx-auto text-center">
			{#if isVisible}
				<div in:fade={{ duration: 1000, delay: 200 }}>
					<!-- Decorative Element -->
					<div class="mb-6">
						<div class="inline-block p-2 bg-primary/10 rounded-full">
							<svg
								class="w-8 h-8 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
					</div>

					<!-- Headline -->
					<h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-relaxed pb-2">
						Ihr Einstieg in die KI-Revolution
					</h1>

					<!-- Description Text -->
					<p class="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
						SmartWorkHub wurde entwickelt, um Unternehmen den Zugang zur KI-Technologie
						so einfach wie möglich zu gestalten. Unsere intuitive Plattform ermöglicht
						es Ihren Mitarbeitern, ohne technisches Vorwissen oder komplexe Prompt-Eingaben,
						die Vorteile künstlicher Intelligenz sofort zu nutzen.
					</p>

					<!-- Visual Indicators -->
					<div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div class="text-primary text-2xl font-bold mb-2">Einfach</div>
							<p class="text-gray-600">Keine technischen Vorkenntnisse erforderlich</p>
						</div>
						<div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div class="text-primary text-2xl font-bold mb-2">Schnell</div>
							<p class="text-gray-600">Sofortige Integration in Ihren Arbeitsalltag</p>
						</div>
						<div class="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div class="text-primary text-2xl font-bold mb-2">Effizient</div>
							<p class="text-gray-600">Maximale Produktivität durch KI-Unterstützung</p>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
    section {
        overflow: hidden;
    }
</style>