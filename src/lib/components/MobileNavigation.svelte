<script>
	import cms from '$lib/cms.svelte';

	let { isMenuOpen } = $props();
</script>

{#if isMenuOpen}
	<div class="md:hidden pt-4 pb-2">
		<div class="flex flex-col space-y-4">
			{#each Object.entries(cms.headerLinks) as [href, text]}
				<a {href}
					 class="text-gray-600 hover:text-primary"
					 onclick={() => isMenuOpen = false}
				>{text}</a>
			{/each}
			<a href={cms.demoUrl} target="_blank"><button class="btn btn-outline w-full" onclick={() => isMenuOpen = false}>Live Demo</button></a>
			<a href={cms.contactLink} target="_blank"><button class="btn btn-primary w-full" onclick={() => isMenuOpen = false}>{cms.cta}</button></a>
		</div>
	</div>
{/if}