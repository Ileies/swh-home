<!-- CTA.svelte -->
<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<section id="contact" class="py-12 bg-primary text-primary-content">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
			<!-- Left side: Main content -->
			<div class="md:w-2/3">
				<h2 class="text-3xl font-bold mb-4">
					Steigern Sie Ihre Produktivität mit KI
				</h2>
				<p class="text-primary-content/90 text-lg mb-6 max-w-xl">
					Über 500 Unternehmen vertrauen bereits auf unsere KI-Module.
					Starten Sie jetzt Ihre 14-tägige kostenlose Testphase und erleben Sie
					den Unterschied.
				</p>

				<!-- Stats -->
				<div class="flex flex-wrap gap-8 mt-4 text-sm">
					<div>
						<div class="font-bold text-2xl">30+</div>
						<div class="opacity-90">KI-Module</div>
					</div>
					<div>
						<div class="font-bold text-2xl">24/7</div>
						<div class="opacity-90">Verfügbar</div>
					</div>
					<div>
						<div class="font-bold text-2xl">98%</div>
						<div class="opacity-90">Zeitersparnis</div>
					</div>
				</div>
			</div>

			<!-- Right side: CTA Card -->
			<div class="md:w-1/3">
				<div class="bg-base-100 text-base-content rounded-box p-6 shadow-xl">
					<h3 class="font-bold text-xl mb-4">Kostenlose Beratung</h3>
					<ul class="space-y-3 mb-6">
						<li class="flex items-center gap-2">
							<ArrowRight class="w-4 h-4 text-primary" />
							<span>Individuelle Lösungsanalyse</span>
						</li>
						<li class="flex items-center gap-2">
							<ArrowRight class="w-4 h-4 text-primary" />
							<span>Persönlicher Ansprechpartner</span>
						</li>
						<li class="flex items-center gap-2">
							<ArrowRight class="w-4 h-4 text-primary" />
							<span>Maßgeschneiderte Strategien</span>
						</li>
					</ul>
					<button class="btn btn-primary w-full">
						Jetzt Termin vereinbaren
					</button>
					<p class="text-xs text-center mt-4 text-base-content/70">
						Individuell und unverbindlich
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
