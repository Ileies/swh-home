<script lang="ts">
	import cms from '$lib/cms.svelte';
import HeroMock from '$lib/components/HeroMock.svelte';

	let test: HTMLElement;
</script>

<section bind:this={test} class="hero min-h-svh bg-white">
	<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center gap-12 lg:gap-16">

		<!-- Left: text + CTA -->
		<div class="md:w-1/2 text-left">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">{cms.hero.title}</h1>
			<p class="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">{cms.hero.description}</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a href={cms.demoUrl} target="_blank">
					<button class="btn btn-primary btn-lg px-8">Live Demo starten</button>
				</a>
				<a href={cms.contactLink} target="_blank">
					<button class="btn btn-outline btn-lg px-8">{cms.call}</button>
				</a>
			</div>
			<p class="text-sm text-gray-500 mt-4">Keine Registrierung · Keine Kreditkarte</p>
		</div>

		<!-- Right: app mock -->
		<div class="md:w-1/2 w-full">
			<HeroMock />
		</div>

	</div>
</section>
