<!-- Pricing.svelte -->
<script>
	import { Check, HelpCircle } from 'lucide-svelte';

	let isAnnual = true;

	const plans = [
		{
			name: "Starter",
			description: "Ideal für Einzelpersonen und kleine Teams",
			monthlyPrice: 49,
			annualPrice: 39,
			features: [
				"5 KI-Module nach Wahl",
				"Bis zu 3 Team-Mitglieder",
				"5.000 API Calls pro Monat",
				"Community Support",
				"Standard Reporting"
			],
			buttonStyle: "btn-outline"
		},
		{
			name: "Professional",
			description: "Perfekt für wachsende Unternehmen",
			monthlyPrice: 99,
			annualPrice: 79,
			popular: true,
			features: [
				"Alle KI-Module inklusive",
				"Bis zu 10 Team-Mitglieder",
				"50.000 API Calls pro Monat",
				"Priority Support",
				"Advanced Reporting & Analytics",
				"Eigene API-Zugänge",
				"Custom Workflows"
			],
			buttonStyle: "btn-primary"
		},
		{
			name: "Enterprise",
			description: "Maßgeschneiderte Lösungen für Großunternehmen",
			customPrice: true,
			features: [
				"Unbegrenzte KI-Module",
				"Unbegrenzte Team-Mitglieder",
				"Individuelle API Limits",
				"24/7 Premium Support",
				"Custom Reporting & Analytics",
				"Eigene API-Zugänge",
				"Custom Workflows",
				"On-Premises Installation",
				"SLA Garantie"
			],
			buttonStyle: "btn-outline"
		}
	];
</script>

<section id="pricing" class="py-16 bg-base-100">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">Transparente Preise für jede Unternehmensgröße</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto mb-8">
				Wählen Sie den passenden Tarif für Ihr Unternehmen. Alle Pläne beinhalten eine 14-tägige kostenlose Testphase.
			</p>

			<!-- Billing Toggle -->
			<div class="flex items-center justify-center gap-4 mb-8">
				<span class="text-base-content/70" class:font-bold={!isAnnual}>Monatlich</span>
				<label class="swap">
					<input
						type="checkbox"
						bind:checked={isAnnual}
					/>
					<div class="swap-on btn btn-primary btn-sm">Jährlich (-20%)</div>
					<div class="swap-off btn btn-primary btn-sm btn-outline">Jährlich (-20%)</div>
				</label>
				<span class="text-base-content/70" class:font-bold={isAnnual}>Jährlich</span>
			</div>
		</div>

		<!-- Pricing Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{#each plans as plan}
				<div class="relative rounded-box border border-base-content/10 bg-base-100 hover:shadow-xl transition-shadow duration-300 {plan.popular ? 'ring-2 ring-primary' : ''}">
					{#if plan.popular}
						<div class="absolute -top-4 left-1/2 -translate-x-1/2">
							<span class="badge badge-primary">Beliebteste Wahl</span>
						</div>
					{/if}

					<div class="p-8">
						<!-- Plan Header -->
						<h3 class="text-2xl font-bold mb-2">{plan.name}</h3>
						<p class="text-base-content/70 mb-4">{plan.description}</p>

						<!-- Price -->
						<div class="mb-6">
							{#if plan.customPrice}
								<div class="text-3xl font-bold">Individuell</div>
								<div class="text-base-content/70">Maßgeschneiderte Preise</div>
							{:else}
								<div class="text-3xl font-bold">
									{isAnnual ? plan.annualPrice : plan.monthlyPrice}€
									<span class="text-base font-normal text-base-content/70">/Monat</span>
								</div>
								{#if isAnnual}
									<div class="text-sm text-base-content/70">
										Bei jährlicher Zahlung
									</div>
								{/if}
							{/if}
						</div>

						<!-- Features -->
						<ul class="space-y-4 mb-8">
							{#each plan.features as feature}
								<li class="flex items-start gap-2">
									<Check class="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>

						<!-- CTA Button -->
						<button class="btn {plan.buttonStyle} w-full">
							{plan.customPrice ? 'Kontakt aufnehmen' : 'Kostenlos testen'}
						</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- FAQ Section -->
		<div class="mt-16 max-w-3xl mx-auto">
			<div class="flex items-center gap-2 justify-center mb-8">
				<HelpCircle class="w-5 h-5 text-primary" />
				<h3 class="text-xl font-bold">Häufige Fragen</h3>
			</div>

			<div class="join join-vertical w-full">
				<div class="collapse collapse-arrow join-item border border-base-200">
					<input type="radio" name="pricing-faq" />
					<div class="collapse-title font-medium">
						Kann ich den Plan später wechseln?
					</div>
					<div class="collapse-content text-base-content/70">
						<p>Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Die Abrechnung wird anteilig angepasst.</p>
					</div>
				</div>
				<div class="collapse collapse-arrow join-item border border-base-200">
					<input type="radio" name="pricing-faq" />
					<div class="collapse-title font-medium">
						Was passiert nach der kostenlosen Testphase?
					</div>
					<div class="collapse-content text-base-content/70">
						<p>Nach Ablauf der 14-tägigen Testphase wird Ihr ausgewählter Plan aktiv. Sie können jederzeit vor Ende der Testphase kündigen.</p>
					</div>
				</div>
				<div class="collapse collapse-arrow join-item border border-base-200">
					<input type="radio" name="pricing-faq" />
					<div class="collapse-title font-medium">
						Gibt es versteckte Kosten?
					</div>
					<div class="collapse-content text-base-content/70">
						<p>Nein, alle Preise verstehen sich inklusive Mehrwertsteuer und beinhalten alle genannten Features ohne versteckte Zusatzkosten.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>