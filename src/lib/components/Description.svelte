<!-- Description.svelte -->
<script>
	import { Zap, Clock, ChartBar } from 'lucide-svelte';

	const benefits = [
		{
			icon: Zap,
			title: "Sofort einsetzbar",
			description: "Alle KI-Module sind sofort und ohne Installation nutzbar. Einfache Integration in bestehende Workflows durch standardisierte APIs."
		},
		{
			icon: Clock,
			title: "Zeit sparen",
			description: "Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf strategische Entscheidungen. Unsere KI-Module arbeiten 24/7 für Sie."
		},
		{
			icon: ChartBar,
			title: "Effizienz steigern",
			description: "Steigern Sie die Produktivität Ihres Teams messbar. Unsere KI-Module lernen kontinuierlich und werden immer effizienter."
		}
	];
</script>

<section class="py-24 bg-base-200">
	<div class="container mx-auto px-4">
		<!-- Main Description -->
		<div class="text-center max-w-3xl mx-auto mb-16">
			<h2 class="text-4xl font-bold mb-6">
				Intelligente Automatisierung für Ihr Unternehmen
			</h2>
			<p class="text-xl text-base-content/80">
				SmartWorkHub vereint leistungsstarke KI-Module in einer intuitiven Plattform.
				Entwickelt für moderne Unternehmen, die ihre Prozesse optimieren und
				Wachstum beschleunigen möchten.
			</p>
		</div>

		<!-- Benefits -->
		<div class="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
			{#each benefits as benefit}
				<div class="flex-1">
					<svelte:component
						this={benefit.icon}
						class="w-8 h-8 text-primary mb-6"
					/>
					<h3 class="text-xl font-bold mb-3">{benefit.title}</h3>
					<p class="text-base-content/70 leading-relaxed">
						{benefit.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>