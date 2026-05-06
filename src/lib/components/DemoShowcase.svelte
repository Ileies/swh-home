<script lang="ts">
	import cms from '$lib/cms.svelte';
	import AnimatedChatPreview from '$lib/components/AnimatedChatPreview.svelte';

	const demos = [
		{
			mode: 'chat-vector' as const,
			badge: 'KI-Chat',
			title: 'Fragen stellen – Antworten aus Ihren Dokumenten',
			description:
				'Verbinden Sie den KI-Chat mit Ihren eigenen Unterlagen: Handbücher, Richtlinien, Verträge. Die KI findet relevante Passagen und antwortet präzise – inklusive Quellenangabe.',
			bullets: [
				'Eigene Dokumente als Wissensbasis (Vector Store)',
				'Quellenangaben transparent und nachvollziehbar',
				'Kein Suchen in Ordnern und Laufwerken mehr'
			]
		},
		{
			mode: 'form-agent' as const,
			badge: 'Formular-Agenten',
			title: '40+ Agenten für wiederkehrende Aufgaben',
			description:
				'Strukturierte Formulare führen Ihre Mitarbeiter durch komplexe Prozesse – kein langer Prompt, kein Herumraten. Von Protokollen bis Angeboten: fertig in Sekunden.',
			bullets: [
				'40+ sofort einsatzbereite Agenten',
				'Strukturierte Felder statt leerer Seite',
				'Ergebnisse direkt kopierbar und weiterbearbeitbar'
			]
		},
		{
			mode: 'builder' as const,
			badge: 'No-Code Builder',
			title: 'Eigene Agenten ohne Programmierkenntnisse',
			description:
				'Jeder Fachmitarbeiter erstellt eigene KI-Agenten mit seinen Formularen und Anweisungen – fertig in Minuten, sofort für alle Mitarbeiter nutzbar.',
			bullets: [
				'Keine Programmierkenntnisse erforderlich',
				'System-Prompt und Felder per Klick konfigurieren',
				'Sofort für alle Mitarbeiter des Unternehmens verfügbar'
			]
		}
	];
</script>

<section class="py-20 bg-base-200" id="demo">
	<div class="container mx-auto px-4 max-w-6xl">

		<!-- Section header -->
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				SmartWorkHub in Aktion
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Drei Wege, wie Ihre Mitarbeiter KI täglich sinnvoll einsetzen – live, ohne Anmeldung testbar.
			</p>
		</div>

		<!-- Demo rows -->
		{#each demos as demo, i}
			<div
				class="flex flex-col items-center gap-10 md:gap-14
					{i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
					{i < demos.length - 1 ? 'mb-20 md:mb-24' : ''}"
			>
				<!-- Description -->
				<div class="w-full md:w-5/12 space-y-4">
					<div class="badge badge-primary badge-outline text-xs font-medium">{demo.badge}</div>
					<h3 class="text-xl md:text-2xl font-bold leading-snug">{demo.title}</h3>
					<p class="text-base-content/70 leading-relaxed text-sm md:text-base">{demo.description}</p>
					<ul class="space-y-2">
						{#each demo.bullets as bullet}
							<li class="flex items-start gap-2.5 text-sm">
								<span class="text-primary font-bold mt-0.5 shrink-0">✓</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Animation -->
				<div class="w-full md:w-7/12">
					<AnimatedChatPreview demo={demo.mode} />
				</div>
			</div>
		{/each}

		<!-- CTA -->
		<div class="text-center mt-16 pt-8 border-t border-base-content/10">
			<a href={cms.demoUrl} target="_blank" rel="noopener noreferrer">
				<button class="btn btn-primary btn-lg px-10">
					Live Demo starten →
				</button>
			</a>
			<p class="text-sm text-base-content/50 mt-3">Keine Registrierung · Keine Kreditkarte</p>
		</div>
	</div>
</section>
