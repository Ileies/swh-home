<script lang="ts">
	import cms from '$lib/cms.svelte';
	import HeroMock from '$lib/components/HeroMock.svelte';

	let test: HTMLElement;
</script>

<section bind:this={test} class="hero min-h-svh bg-white">
	<div
		class="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-24 sm:px-6 md:flex-row lg:gap-16 lg:px-8"
	>
		<!-- Left: text + CTA -->
		<div class="text-left md:w-1/2">
			<h1 class="mb-6 mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
				{cms.hero.title}
			</h1>
			<p class="mb-10 max-w-xl text-lg text-gray-600 md:text-xl">{cms.hero.description}</p>
			<div class="flex flex-col gap-4 sm:flex-row">
				<a href={cms.demoUrl} target="_blank">
					<button class="btn btn-primary btn-lg px-8">Live Demo starten</button>
				</a>
				<a href={cms.contactLink} target="_blank">
					<button class="btn btn-outline btn-lg px-8">{cms.call}</button>
				</a>
			</div>
			<p class="mt-4 text-sm text-gray-500">Keine Registrierung · Keine Kreditkarte</p>
		</div>

		<!-- Right: app mock -->
		<div class="w-full md:w-1/2">
			<HeroMock />
		</div>
	</div>
</section>
