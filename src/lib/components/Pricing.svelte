<script>
	import { Check, HelpCircle } from 'lucide-svelte';
	import cms from '$lib/cms.svelte';

	let isAnnual = true;
</script>

<section class="py-16 bg-base-100" id="pricing">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold mb-4">{cms.pricing.title}</h2>
			<p class="text-base-content/70 text-lg max-w-2xl mx-auto mb-8">{cms.pricing.description}</p>

			<!-- Billing Toggle -->
			<div class="flex items-center justify-center gap-4 mb-8">
				<span class="text-base-content/70" class:font-bold={!isAnnual}>{cms.pricing.monthly}</span>
				<label class="swap">
					<input bind:checked={isAnnual} type="checkbox" />
					<div class="swap-on btn btn-primary btn-sm">{cms.pricing.yearlySale}</div>
					<div class="swap-off btn btn-primary btn-sm btn-outline">{cms.pricing.yearlySale}</div>
				</label>
				<span class="text-base-content/70" class:font-bold={isAnnual}>{cms.pricing.yearly}</span>
			</div>
		</div>

		<!-- Pricing Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{#each cms.pricing.plans as plan}
				<div
					class="relative rounded-box border border-base-content/10 bg-base-100 hover:shadow-xl transition-shadow duration-300 {plan.popular ? 'ring-2 ring-primary' : ''}">
					{#if plan.popular}
						<div class="absolute -top-4 left-1/2 -translate-x-1/2">
							<span class="badge badge-primary">{cms.pricing.mostPopular}</span>
						</div>
					{/if}

					<div class="p-8">
						<!-- Plan Header -->
						<h3 class="text-2xl font-bold mb-2">{plan.name}</h3>
						<p class="text-base-content/70 mb-4">{plan.description}</p>

						<!-- Price -->
						<div class="mb-6">
							{#if plan.customPrice}
								<div class="text-3xl font-bold">{cms.pricing.individual}</div>
								<div class="text-base-content/70">{cms.pricing.custom}</div>
							{:else}
								<div class="text-3xl font-bold">
									{isAnnual ? plan.annualPrice : plan.monthlyPrice}€
									<span class="text-base font-normal text-base-content/70">/{cms.pricing.month}</span>
								</div>
								{#if isAnnual}
									<div class="text-sm text-base-content/70">
										{cms.pricing.ifYearly}
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
						<button class="btn {plan.buttonStyle} w-full">{cms.call}</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- FAQ Section -->
		<div class="mt-16 max-w-3xl mx-auto">
			<div class="flex items-center gap-2 justify-center mb-8">
				<HelpCircle class="w-5 h-5 text-primary" />
				<h3 class="text-xl font-bold">{cms.faq.title}</h3>
			</div>

			<div class="join join-vertical w-full">
				{#each cms.faq.list as faq}
					<div class="collapse collapse-arrow join-item border border-base-200">
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
</section>