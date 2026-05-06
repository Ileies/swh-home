<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface UseCase {
		moduleId: string;
		moduleLabel: string;
		moduleIcon: string;
		userMessage: string;
		aiResponse: string;
	}

	const useCases: UseCase[] = [
		{
			moduleId: 'meetingprotokoll',
			moduleLabel: 'Meeting-Protokoll',
			moduleIcon: '📋',
			userMessage: 'Erstelle ein Protokoll: Teams-Meeting Projektstand Website-Relaunch, 45 Min, Teilnehmer: Anna, Ben, Clara. Ergebnis: Launch verschoben auf 15. Juni, Ben übernimmt Landingpage.',
			aiResponse: '**Meeting-Protokoll**\n📅 Datum: ' + new Date().toLocaleDateString('de-DE') + '\n👥 Teilnehmer: Anna, Ben, Clara\n\n**Beschlüsse:**\n- Launch-Termin verschoben auf 15. Juni\n- Ben verantwortlich für Landingpage\n\n**Nächste Schritte:**\n- Ben: Landingpage bis 8. Juni\n- Anna: Freigabe Texte bis 5. Juni'
		},
		{
			moduleId: 'email',
			moduleLabel: 'E-Mail Generator',
			moduleIcon: '✉️',
			userMessage: 'Schreibe eine professionelle Absage an Bewerber Max Müller für die Stelle als Projektleiter. Freundlich, mit Dank für das Interesse.',
			aiResponse: 'Betreff: Ihre Bewerbung als Projektleiter\n\nSehr geehrter Herr Müller,\n\nvielen Dank für Ihr Interesse und die Zeit, die Sie in Ihre Bewerbung investiert haben. Nach sorgfältiger Prüfung müssen wir Ihnen leider mitteilen, dass wir uns für einen anderen Kandidaten entschieden haben.\n\nWir wünschen Ihnen für Ihren weiteren Berufsweg alles Gute.\n\nMit freundlichen Grüßen'
		},
		{
			moduleId: 'uebersetzung',
			moduleLabel: 'Übersetzung',
			moduleIcon: '🌐',
			userMessage: "Übersetze ins Englische, professionell: 'Wir freuen uns, Ihnen mitteilen zu können, dass Ihr Angebot angenommen wurde. Die Vertragsunterlagen erhalten Sie in Kürze.'",
			aiResponse: "We are pleased to inform you that your offer has been accepted. You will receive the contract documents shortly.\n\n*Übersetzungshinweis: 'in Kürze' wurde als 'shortly' übersetzt – alternativ auch 'in the near future' für formellere Kontexte.*"
		}
	];

	const sidebarModules = [
		{ id: 'meetingprotokoll', label: 'Protokoll', icon: '📋' },
		{ id: 'email', label: 'E-Mail', icon: '✉️' },
		{ id: 'uebersetzung', label: 'Übersetzung', icon: '🌐' },
		{ id: 'projektplan', label: 'Projektplan', icon: '📊' },
	];

	let currentCaseIndex = $state(0);
	let phase = $state<'typing-user' | 'loading' | 'streaming-ai' | 'pause'>('pause');
	let displayedUserMessage = $state('');
	let displayedAiResponse = $state('');
	let isVisible = $state(false);
	let containerEl: HTMLDivElement;
	let prefersReducedMotion = $state(false);

	let timeoutId: ReturnType<typeof setTimeout> | null = null;
	let intervalId: ReturnType<typeof setInterval> | null = null;
	let observer: IntersectionObserver;

	function clearTimers() {
		if (timeoutId) { clearTimeout(timeoutId); timeoutId = null; }
		if (intervalId) { clearInterval(intervalId); intervalId = null; }
	}

	function showStaticState() {
		const uc = useCases[0];
		displayedUserMessage = uc.userMessage;
		displayedAiResponse = uc.aiResponse;
		phase = 'pause';
	}

	function runCase(index: number) {
		const uc = useCases[index];
		displayedUserMessage = '';
		displayedAiResponse = '';
		phase = 'typing-user';

		let charIndex = 0;
		intervalId = setInterval(() => {
			charIndex++;
			displayedUserMessage = uc.userMessage.slice(0, charIndex);
			if (charIndex >= uc.userMessage.length) {
				clearTimers();
				phase = 'loading';
				timeoutId = setTimeout(() => {
					phase = 'streaming-ai';
					let aiChar = 0;
					intervalId = setInterval(() => {
						aiChar++;
						displayedAiResponse = uc.aiResponse.slice(0, aiChar);
						if (aiChar >= uc.aiResponse.length) {
							clearTimers();
							phase = 'pause';
							timeoutId = setTimeout(() => {
								currentCaseIndex = (index + 1) % useCases.length;
								runCase(currentCaseIndex);
							}, 3000);
						}
					}, 18);
				}, 1200);
			}
		}, 28);
	}

	onMount(() => {
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					isVisible = true;
					if (prefersReducedMotion) {
						showStaticState();
					} else {
						timeoutId = setTimeout(() => runCase(0), 600);
					}
				}
			},
			{ threshold: 0.3 }
		);
		if (containerEl) observer.observe(containerEl);
	});

	onDestroy(() => {
		clearTimers();
		if (observer) observer.disconnect();
	});

	const currentCase = $derived(useCases[currentCaseIndex]);
</script>

<div bind:this={containerEl} class="w-full max-w-3xl mx-auto">

	<!-- Desktop: Two-panel layout -->
	<div class="hidden md:flex rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl bg-base-100">
		<!-- Sidebar -->
		<div class="w-16 bg-base-300 flex flex-col items-center py-4 gap-3">
			{#each sidebarModules as mod}
				<div
					class="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 cursor-default
						{currentCase.moduleId === mod.id ? 'bg-primary shadow-md scale-110' : 'bg-base-200 opacity-60'}"
					title={mod.label}
				>
					{mod.icon}
				</div>
			{/each}
		</div>

		<!-- Chat area -->
		<div class="flex-1 flex flex-col">
			<!-- Browser chrome -->
			<div class="bg-base-200 px-4 py-2 flex items-center gap-2 border-b border-base-content/10">
				<div class="flex gap-1.5">
					<div class="w-3 h-3 rounded-full bg-error/50"></div>
					<div class="w-3 h-3 rounded-full bg-warning/50"></div>
					<div class="w-3 h-3 rounded-full bg-success/50"></div>
				</div>
				<div class="flex-1 bg-base-100 rounded-full px-3 py-0.5 text-xs text-base-content/50 text-center">
					demo.smartworkhub.de
				</div>
			</div>

			<!-- Module header -->
			<div class="px-4 py-2 border-b border-base-content/10 flex items-center gap-2">
				<span class="text-base">{currentCase.moduleIcon}</span>
				<span class="font-medium text-sm">{currentCase.moduleLabel}</span>
			</div>

			<!-- Messages -->
			<div class="flex-1 p-4 space-y-3 min-h-[220px] overflow-hidden">
				{#if displayedUserMessage}
					<div class="flex justify-end">
						<div class="bg-primary text-primary-content rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] text-sm leading-relaxed">
							{displayedUserMessage}{#if phase === 'typing-user'}<span class="inline-block w-0.5 h-4 bg-primary-content/70 ml-0.5 animate-pulse"></span>{/if}
						</div>
					</div>
				{/if}

				{#if phase === 'loading'}
					<div class="flex justify-start">
						<div class="bg-base-200 rounded-2xl rounded-tl-sm px-4 py-3">
							<div class="flex gap-1">
								<div class="w-2 h-2 rounded-full bg-base-content/40 animate-bounce" style="animation-delay: 0ms"></div>
								<div class="w-2 h-2 rounded-full bg-base-content/40 animate-bounce" style="animation-delay: 150ms"></div>
								<div class="w-2 h-2 rounded-full bg-base-content/40 animate-bounce" style="animation-delay: 300ms"></div>
							</div>
						</div>
					</div>
				{/if}

				{#if displayedAiResponse}
					<div class="flex justify-start">
						<div class="bg-base-200 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] text-sm leading-relaxed whitespace-pre-line">
							{displayedAiResponse}{#if phase === 'streaming-ai'}<span class="inline-block w-0.5 h-4 bg-base-content/70 ml-0.5 animate-pulse"></span>{/if}
						</div>
					</div>
				{/if}
			</div>

			<!-- Input bar (decorative) -->
			<div class="px-4 py-3 border-t border-base-content/10">
				<div class="bg-base-200 rounded-full px-4 py-2 text-sm text-base-content/30">
					Nachricht eingeben...
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile: Chat bubbles only -->
	<div class="md:hidden rounded-2xl overflow-hidden border border-base-content/10 shadow-xl bg-base-100">
		<!-- Module badge -->
		<div class="px-4 py-3 border-b border-base-content/10 flex items-center gap-2 bg-base-200">
			<span class="text-base">{useCases[0].moduleIcon}</span>
			<span class="font-medium text-sm">{useCases[0].moduleLabel}</span>
			<span class="ml-auto text-xs text-base-content/40">demo.smartworkhub.de</span>
		</div>

		<div class="p-4 space-y-3 min-h-[200px]">
			{#if displayedUserMessage}
				<div class="flex justify-end">
					<div class="bg-primary text-primary-content rounded-2xl rounded-tr-sm px-4 py-2 max-w-[85%] text-sm leading-relaxed">
						{displayedUserMessage}{#if phase === 'typing-user'}<span class="inline-block w-0.5 h-4 bg-primary-content/70 ml-0.5 animate-pulse"></span>{/if}
					</div>
				</div>
			{/if}

			{#if phase === 'loading'}
				<div class="flex justify-start">
					<div class="bg-base-200 rounded-2xl rounded-tl-sm px-4 py-3">
						<div class="flex gap-1">
							<div class="w-2 h-2 rounded-full bg-base-content/40 animate-bounce" style="animation-delay: 0ms"></div>
							<div class="w-2 h-2 rounded-full bg-base-content/40 animate-bounce" style="animation-delay: 150ms"></div>
							<div class="w-2 h-2 rounded-full bg-base-content/40 animate-bounce" style="animation-delay: 300ms"></div>
						</div>
					</div>
				</div>
			{/if}

			{#if displayedAiResponse}
				<div class="flex justify-start">
					<div class="bg-base-200 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] text-sm leading-relaxed whitespace-pre-line">
						{displayedAiResponse}{#if phase === 'streaming-ai'}<span class="inline-block w-0.5 h-4 bg-base-content/70 ml-0.5 animate-pulse"></span>{/if}
					</div>
				</div>
			{/if}
		</div>

		<div class="px-4 py-3 border-t border-base-content/10">
			<div class="bg-base-200 rounded-full px-4 py-2 text-sm text-base-content/30">
				Nachricht eingeben...
			</div>
		</div>
	</div>
</div>
