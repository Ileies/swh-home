<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		PUBLIC_PROJECT_TITLE,
		PUBLIC_KEYWORDS,
		PUBLIC_PROJECT_DESCRIPTION,
		PUBLIC_ORIGIN
	} from '$env/static/public';
	import { page } from '$app/state';

	let { children } = $props();

	const canonicalUrl = $derived(`${PUBLIC_ORIGIN}${page.url.pathname}`);
	const ogImageUrl = `${PUBLIC_ORIGIN}/screenshot.png`;
</script>

<svelte:head>
	<meta name="description" content={PUBLIC_PROJECT_DESCRIPTION} />
	<meta name="application-name" content={PUBLIC_PROJECT_TITLE} />
	<meta name="keywords" content={PUBLIC_KEYWORDS} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:site_name" content={PUBLIC_PROJECT_TITLE} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={PUBLIC_PROJECT_TITLE} />
	<meta property="og:description" content={PUBLIC_PROJECT_DESCRIPTION} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:secure_url" content={ogImageUrl} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="{PUBLIC_PROJECT_TITLE} – KI-Automatisierung für Unternehmen"
	/>
	<meta property="og:locale" content="de_DE" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={PUBLIC_PROJECT_TITLE} />
	<meta name="twitter:description" content={PUBLIC_PROJECT_DESCRIPTION} />
	<meta name="twitter:image" content={ogImageUrl} />
	<meta
		name="twitter:image:alt"
		content="{PUBLIC_PROJECT_TITLE} – KI-Automatisierung für Unternehmen"
	/>
</svelte:head>

<Header />
{@render children()}
<Footer />
