<!-- Header.svelte -->
<script>
	import { fade } from 'svelte/transition';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="bg-white shadow-lg fixed w-full top-0 z-50">
	<div class="container mx-auto px-4 py-4">
		<nav class="flex items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold text-primary">
					SmartWorkHub
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a href="#features" class="text-gray-600 hover:text-primary transition-colors">Features</a>
				<a href="#modules" class="text-gray-600 hover:text-primary transition-colors">Module</a>
				<a href="#pricing" class="text-gray-600 hover:text-primary transition-colors">Preise</a>
				<a href="#privacy" class="text-gray-600 hover:text-primary transition-colors">Datenschutz</a>
				<button class="btn btn-primary">
					Beratungsgespräch vereinbaren
				</button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden btn btn-ghost"
				on:click={toggleMenu}
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
		{#if isMenuOpen}
			<div
				class="md:hidden pt-4 pb-2"
				transition:fade
			>
				<div class="flex flex-col space-y-4">
					<a
						href="#features"
						class="text-gray-600 hover:text-primary transition-colors"
						on:click={() => isMenuOpen = false}
					>
						Features
					</a>
					<a
						href="#modules"
						class="text-gray-600 hover:text-primary transition-colors"
						on:click={() => isMenuOpen = false}
					>
						Module
					</a>
					<a
						href="#pricing"
						class="text-gray-600 hover:text-primary transition-colors"
						on:click={() => isMenuOpen = false}
					>
						Preise
					</a>
					<a
						href="#privacy"
						class="text-gray-600 hover:text-primary transition-colors"
						on:click={() => isMenuOpen = false}
					>
						Datenschutz
					</a>
					<button
						class="btn btn-primary w-full"
						on:click={() => isMenuOpen = false}
					>
						Beratungsgespräch vereinbaren
					</button>
				</div>
			</div>
		{/if}
	</div>
</header>