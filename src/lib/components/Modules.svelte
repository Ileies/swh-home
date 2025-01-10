<!-- Modules.svelte -->
<script>
	import { MessageSquare, Languages, Terminal, Share2, Users, ArrowRight } from 'lucide-svelte';

	const modules = [
		{
			title: "KI-Chat Modul",
			description: "Revolutionieren Sie Ihren Kundenservice mit einem KI-Assistenten, der 24/7 präzise Antworten liefert und aus jeder Interaktion lernt.",
			icon: MessageSquare
		},
		{
			title: "Übersetzungsmodul",
			description: "Brechen Sie Sprachbarrieren mit KI-gestützten Übersetzungen in 95+ Sprachen. Inklusive Branchenterminologie und Kontext-Erkennung.",
			icon: Languages
		},
		{
			title: "Powershell Script Generator",
			description: "Generieren Sie fehlerfreie PowerShell-Skripte in Sekunden. Mit integrierter Best-Practice-Prüfung und Sicherheitsvalidierung.",
			icon: Terminal
		},
		{
			title: "Social Media Generator",
			description: "Erstellen Sie virale Content-Kampagnen mit KI. Analysiert Trends, optimiert Hashtags und passt Tonalität automatisch an Ihre Zielgruppe an.",
			icon: Share2
		},
		{
			title: "Kundenmodul",
			description: "Entwickeln Sie personalisierte KI-Lösungen für Ihre Branche. Von Predictive Analytics bis zur automatisierten Dokumentenverarbeitung.",
			icon: Users
		}
	];
</script>

<section class="py-16">
	<div class="container mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">KI-Power für Ihr Business</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto">
				Unsere KI-Module automatisieren Ihre Prozesse, steigern die Produktivität und
				erschließen neue Geschäftspotenziale.
			</p>
		</div>

		<!-- Module Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
			{#each modules as module}
				<div class="rounded-box border border-base-content/10 bg-base-100 p-6 transition-all duration-300 hover:shadow-lg">
					<div class="mb-4">
						<svelte:component
							this={module.icon}
							class="w-8 h-8 text-primary"
						/>
					</div>
					<h3 class="font-bold text-xl mb-2">{module.title}</h3>
					<p class="text-base-content/70">{module.description}</p>
				</div>
			{/each}
		</div>

		<!-- View All Link -->
		<div class="text-center">
			<a
				href="/modules"
				class="btn btn-primary gap-2 px-8"
			>
				Entdecken Sie alle 30+ KI-Module
				<ArrowRight class="w-4 h-4" />
			</a>
		</div>

		<!-- Module Stats -->
		<div class="mt-16 bg-base-200 rounded-box p-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
				<div>
					<div class="font-bold text-3xl text-primary mb-2">500+</div>
					<div class="text-base-content/70">Zufriedene Unternehmen</div>
				</div>
				<div>
					<div class="font-bold text-3xl text-primary mb-2">1M+</div>
					<div class="text-base-content/70">Automatisierte Prozesse</div>
				</div>
				<div>
					<div class="font-bold text-3xl text-primary mb-2">98%</div>
					<div class="text-base-content/70">Zeitersparnis im Schnitt</div>
				</div>
			</div>
		</div>
	</div>
</section>