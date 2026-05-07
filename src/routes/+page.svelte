<script lang="ts">
	import Modules from '$lib/components/Modules.svelte';
	import Privacy from '$lib/components/Privacy.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Description from '$lib/components/Description.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import {
		PUBLIC_PROJECT_TITLE,
		PUBLIC_PROJECT_DESCRIPTION,
		PUBLIC_ORIGIN
	} from '$env/static/public';
	import Hero from '$lib/components/Hero.svelte';
	import DemoShowcase from '$lib/components/DemoShowcase.svelte';

	const jsonLdOrganization = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'OFF LIMITS IT Services GmbH',
		url: PUBLIC_ORIGIN,
		logo: `${PUBLIC_ORIGIN}/favicon.png`,
		email: 'smartworkhub@offlimits-it.com',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Johann-Philipp-Reis-Straße 8',
			postalCode: '53332',
			addressLocality: 'Bornheim',
			addressCountry: 'DE'
		}
	};

	const jsonLdWebApplication = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: PUBLIC_PROJECT_TITLE,
		url: PUBLIC_ORIGIN,
		description: PUBLIC_PROJECT_DESCRIPTION,
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		inLanguage: 'de-DE',
		offers: [
			{
				'@type': 'Offer',
				name: 'Einmallizenz',
				price: '2999',
				priceCurrency: 'EUR',
				description: 'Einmalige Software-Lizenz'
			},
			{
				'@type': 'Offer',
				name: 'Hosting & Usage (monatlich)',
				price: '399',
				priceCurrency: 'EUR',
				description: 'Monatliche Hosting- und Nutzungsgebühr (ab 10 Mitarbeitern)'
			}
		],
		provider: {
			'@type': 'Organization',
			name: 'OFF LIMITS IT Services GmbH'
		},
		featureList: [
			'KI-Chat Assistent',
			'Automatische Übersetzung',
			'PowerShell Generator',
			'Social Media Beiträge',
			'E-Mail Generator',
			'Angebotsgenerator',
			'Dokumentations-Generator',
			'Prozessanalyse',
			'Präsentations-Outline-Builder',
			'Projektplan Generator',
			'Rechtschreib- und Grammatikkorrektur',
			'Budget-Planungs-Assistent',
			'Change-Management-Kommunikationsplaner',
			'Compliance-Checklisten-Generator',
			'Feedbackformular-Generator',
			'Interview-Fragen-Generator',
			'KPI-Dashboard-Planer',
			'Motivationsschreiben-Generator',
			'Produktbeschreibungs-Optimierer',
			'Prozess-Dokumentations-Wizard',
			'Prüfung Generator',
			'Recherche-Zusammenfassung',
			'Risikomanagement-Matrix',
			'Technischer Problemlöser',
			'Vertragsklausel-Generator',
			'Wartungsprotokoll-Generator',
			'Kundenbeschwerde E-Mail',
			'Prozessanalyse Assistent'
		]
	};
</script>

<svelte:head>
	<title>{PUBLIC_PROJECT_TITLE} – KI-Automatisierung für Unternehmen</title>
	<meta name="robots" content="index, follow" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLdOrganization)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLdWebApplication)}</script>`}
</svelte:head>

<Hero />
<DemoShowcase />
<div class="h-1 w-full bg-accent"></div>
<Description />
<div class="h-1 w-full bg-accent"></div>
<Modules />
<Pricing />
<Privacy />
<CTA />
