<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { PUBLIC_PROJECT_TITLE, PUBLIC_KEYWORDS } from '$env/static/public';
	//import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<meta content={PUBLIC_PROJECT_TITLE} name="application-name" />
	<meta content={PUBLIC_KEYWORDS} name="keywords" />
	<meta content="noindex, nofollow" name="robots">
	<!--<meta content={page.data.seo.pageTitle} name="og:title">-->
	<meta content={PUBLIC_PROJECT_TITLE} name="og:site_name">
	<!--<meta content={page.data.seo.ogUrl} name="og:url">
	<meta content={page.data.seo.ogImage} name="og:image">-->
	<meta content="website" name="og:type">
	<!--<meta content={page.data.seo.pageDescription} name="og:description">-->
	<meta content="de_DE" name="og:locale">
	<!--<title>{page.data.seo.pageTitle}</title>-->
</svelte:head>

<Header />
{@render children()}
<Footer />