<script lang="ts">
import ModuleGrid from '$lib/components/ModuleGrid.svelte';
import cms from '$lib/cms.svelte';
</script>

<div class="mt-32">
	<ModuleGrid modules={cms.modules.list} />
</div>