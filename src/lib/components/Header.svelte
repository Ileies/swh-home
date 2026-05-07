<script>
	import { PUBLIC_PROJECT_TITLE } from '$env/static/public';
	import cms from '$lib/cms.svelte';
	import MobileNavigation from '$lib/components/MobileNavigation.svelte';
	let isMenuOpen = $state(false);
</script>

<header class="bg-base-100 border-b border-gray-100 fixed w-full top-0 z-50">
	<div class="container mx-auto px-4 py-4">
		<nav class="flex items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold text-primary">{ PUBLIC_PROJECT_TITLE }</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each Object.entries(cms.headerLinks) as [href, text]}
					<a {href} class="text-base-content hover:text-primary transition-colors">{text}</a>
				{/each}
				<a href={cms.demoUrl} target="_blank"><button class="btn btn-outline">Live Demo</button></a>
				<a href={cms.contactLink} target="_blank"><button class="btn btn-primary">{cms.cta}</button></a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden btn btn-ghost"
				onclick={() => isMenuOpen = !isMenuOpen}
				aria-label="Menü öffnen"
			>
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					{#if isMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>

		</nav>

		<!-- Mobile Navigation -->
		<MobileNavigation isMenuOpen={isMenuOpen} />
	</div>
</header>