<script>
	import cms from '$lib/cms.svelte';
	import AnimatedChatPreview from '$lib/components/AnimatedChatPreview.svelte';
</script>

<section class="py-20 bg-base-200">
	<div class="container mx-auto px-4">
		<div class="text-center mb-10">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Überzeugen Sie sich selbst – live, in Echtzeit
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Testen Sie SmartWorkHub direkt im Browser – ohne Anmeldung, ohne Einrichtung.
			</p>
		</div>

		<AnimatedChatPreview />

		<div class="text-center mt-10">
			<a href={cms.demoUrl} target="_blank">
				<button class="btn btn-primary btn-lg px-10">
					Live Demo starten →
				</button>
			</a>
			<p class="text-sm text-base-content/50 mt-3">Keine Registrierung · Keine Kreditkarte</p>
		</div>
	</div>
</section>
