<script>
	import { HelpCircle } from 'lucide-svelte';
	import cms from '$lib/cms.svelte';

	// State für Mitarbeiteranzahl
	let rangeValue = $state(0); // Startwert

	// Exponentielles Mapping für den Range Slider
	const employeeCount = $derived(
		Math.floor(10 * (Math.pow(Math.E, (rangeValue / 100) * Math.log(100)) - 1) + 10)
	);

	// Berechnung der Mitarbeiterkosten (aufgerundet auf nächste 100)
	const employeeCost = $derived(Math.ceil(employeeCount / 50) * 100);

	// Gesamtkosten berechnen
	const monthlyTotal = $derived(299 + employeeCost);
	const oneTimePrice = 2999;
</script>

<section id="pricing" class="bg-white py-16">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold">{cms.pricing.title}</h2>
			<p class="mx-auto max-w-2xl text-lg text-base-content/70">{cms.pricing.description}</p>
		</div>

		<!-- Employee Range Slider -->
		<div class="mx-auto mb-8 max-w-3xl">
			<div class="rounded-box bg-base-200 p-6">
				<div class="form-control w-full">
					<div class="label">
						<span class="label-text font-semibold">Anzahl Mitarbeiter: {employeeCount}</span>
					</div>
					<input
						type="range"
						bind:value={rangeValue}
						min="0"
						max="100"
						class="range range-primary"
					/>
					<div class="label">
						<span class="label-text-alt">10</span>
						<span class="label-text-alt">1000+</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Pricing Table -->
		<div class="mx-auto max-w-3xl">
			<div class="overflow-hidden rounded-box border border-base-content/10">
				<table class="w-full">
					<thead>
						<tr class="bg-base-200">
							<th class="px-6 py-3 text-left font-semibold" colspan="3"> Enterprise Paket </th>
						</tr>
					</thead>
					<tbody class="divide-y divide-base-content/10">
						<tr>
							<td class="px-6 py-4">Software Lizenz</td>
							<td class="px-6 py-4">Einmalig</td>
							<td class="px-6 py-4">{oneTimePrice}€</td>
						</tr>
						<tr>
							<td class="px-6 py-4">Hosting der Plattform</td>
							<td class="px-6 py-4">Monatlich</td>
							<td class="px-6 py-4">299€</td>
						</tr>
						<tr>
							<td class="px-6 py-4">Usage</td>
							<td class="px-6 py-4">Monatlich</td>
							<td class="px-6 py-4">
								<div>Mitarbeiter ({employeeCount})</div>
								<div class="text-base-content/70">{employeeCost}€</div>
							</td>
						</tr>
					</tbody>
					<tfoot class="bg-base-200">
						<tr>
							<td class="px-6 py-4 font-semibold">Ihr Gesamtpreis:</td>
							<td class="px-6 py-4" colspan="2">
								<div>Einmalig: {oneTimePrice}€</div>
								<div>Monatlich: {monthlyTotal}€</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>

			<!-- FAQ Section -->
			<div id="faq" class="mt-16">
				<div class="mb-8 flex items-center justify-center gap-2">
					<HelpCircle class="h-5 w-5 text-primary" />
					<h3 class="text-xl font-bold">{cms.faq.title}</h3>
				</div>

				<div class="join join-vertical w-full">
					{#each cms.faq.list as faq}
						<div class="collapse join-item collapse-arrow border border-base-200">
							<input type="radio" name="faq" />
							<div class="collapse-title font-medium">
								{faq.question}
							</div>
							<div class="collapse-content text-base-content/70">
								<p>{faq.answer}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
