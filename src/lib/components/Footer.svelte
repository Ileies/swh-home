<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import cms from '$lib/cms.svelte';
</script>

<footer class="bg-base-200 pt-16 pb-8">
	<div class="container mx-auto px-4">
		<!-- Main Footer Content -->
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
			<!-- Company Info -->
			<div class="md:col-span-2">
				<h3 class="font-bold text-lg mb-4">{ PUBLIC_PROJECT_TITLE }</h3>
				<p class="text-base-content/70 mb-4 max-w-md">{cms.footer.description}</p>
				<!--<div class="flex gap-4">
					<a href="https://linkedin.com" class="text-base-content/70 hover:text-primary" aria-label="LinkedIn">
						<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</a>
					<a href="https://twitter.com" class="text-base-content/70 hover:text-primary" aria-label="Twitter">
						<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
					</a>
				</div>-->
			</div>

			<!-- Links -->
			{#each cms.footer.links as category}
				<div>
					<h4 class="font-bold mb-4">{category.category}</h4>
					<ul class="space-y-2">
						{#each Object.entries(category.links) as [href, text]}
							<li><a {href} class="text-base-content/70 hover:text-primary">{text}</a></li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-base-content/10 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
				<div class="text-base-content/70">
					© 2024 - {new Date().getFullYear()} { PUBLIC_PROJECT_TITLE }. {cms.footer.copyright}
				</div>
				<div class="flex flex-wrap gap-6">
					{#each Object.entries(cms.footer.bottomLinks) as [href, text]}
						<a {href} class="text-base-content/70 hover:text-primary">{text}</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>