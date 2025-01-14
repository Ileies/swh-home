<script>
import cms from '$lib/cms.svelte';
</script>

<div class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
	<span class="relative flex h-2 w-2 mr-2">
		<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
		<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
	</span>
	{cms.hero.newFeature}
</div>