<script>
	import Header from '$lib/components/Header.svelte';
	import Modules from '$lib/components/Modules.svelte';
	import Privacy from '$lib/components/Privacy.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Description from '$lib/components/Description.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import { PUBLIC_PROJECT_TITLE } from '$env/static/public';
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>{PUBLIC_PROJECT_TITLE}</title>
</svelte:head>

<Header />
<Hero />
<div class="h-1 w-full bg-primary"></div>
<Description />
<Modules />
<Pricing />
<Privacy />
<CTA />
<Footer />