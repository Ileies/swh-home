<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		demo: 'chat-vector' | 'form-agent' | 'builder';
	}

	const { demo }: Props = $props();

	let containerEl: HTMLDivElement;
	let isVisible = $state(false);
	let prefersReducedMotion = $state(false);
	let observer: IntersectionObserver;
	let timers: ReturnType<typeof setTimeout>[] = [];

	function clearTimers() {
		timers.forEach((id) => clearTimeout(id));
		timers = [];
	}

	function later(ms: number, fn: () => void): void {
		const id = setTimeout(fn, ms);
		timers.push(id);
	}

	function typeText(
		target: string,
		setter: (s: string) => void,
		speed: number,
		done: () => void
	): void {
		let i = 0;
		const id = setInterval(() => {
			i++;
			setter(target.slice(0, i));
			if (i >= target.length) {
				clearInterval(id);
				done();
			}
		}, speed) as unknown as ReturnType<typeof setTimeout>;
		timers.push(id);
	}

	// =====================
	// Demo 1: Chat + Vector Store
	// =====================
	type ChatPhase = 'idle' | 'typing-user' | 'file-search' | 'streaming-ai' | 'pause';
	let chatPhase = $state<ChatPhase>('idle');
	let chatUserText = $state('');
	let chatAiText = $state('');

	const CHAT_USER = 'Wie lange ist die Kündigungsfrist nach 10 Jahren Betriebszugehörigkeit?';
	const CHAT_AI =
		'Laut Kap. 4.2 des Mitarbeiterhandbuchs gilt:\n\nAb 10 Jahren: 3 Monate zum Monatsende.\n\n[Quelle: HR-Handbuch, S. 47]';

	function runChat(restart = false) {
		if (restart) {
			chatUserText = '';
			chatAiText = '';
		}
		chatPhase = 'typing-user';
		typeText(
			CHAT_USER,
			(s) => (chatUserText = s),
			26,
			() => {
				chatPhase = 'file-search';
				later(1900, () => {
					chatPhase = 'streaming-ai';
					typeText(
						CHAT_AI,
						(s) => (chatAiText = s),
						15,
						() => {
							chatPhase = 'pause';
							later(4500, () => runChat(true));
						}
					);
				});
			}
		);
	}

	// =====================
	// Demo 2: Form Agent
	// =====================
	type FormPhase =
		| 'idle'
		| 'focus-datum'
		| 'focus-teilnehmer'
		| 'focus-stichpunkte'
		| 'submitting'
		| 'loading'
		| 'streaming'
		| 'pause';
	let formPhase = $state<FormPhase>('idle');
	let formDatum = $state('');
	let formTeilnehmer = $state('');
	let formStichpunkte = $state('');
	let formResult = $state('');
	let activeField = $state<string | null>(null);

	const FORM_DATUM = '06.05.2026';
	const FORM_TEILNEHMER = 'Anna M., Ben K., Tom S.';
	const FORM_STICHPUNKTE = 'Launch auf 15. Juni verschoben\nBen: Landingpage\nBudget im Plan';
	const FORM_RESULT =
		'MEETING-PROTOKOLL - 06.05.2026\nAnna M., Ben K., Tom S.\n\nBeschlüsse:\n- Launch-Termin: 15. Juni\n- Landingpage: Ben K.\n\nAufgaben:\n- Ben K.: bis 08.06.\n- Anna M.: Freigabe bis 05.06.';

	const isFormInput = $derived(
		formPhase === 'idle' ||
			formPhase === 'focus-datum' ||
			formPhase === 'focus-teilnehmer' ||
			formPhase === 'focus-stichpunkte' ||
			formPhase === 'submitting'
	);

	function runForm(restart = false) {
		if (restart) {
			formDatum = '';
			formTeilnehmer = '';
			formStichpunkte = '';
			formResult = '';
		}
		activeField = 'datum';
		formPhase = 'focus-datum';
		later(200, () => {
			typeText(
				FORM_DATUM,
				(s) => (formDatum = s),
				55,
				() => {
					activeField = 'teilnehmer';
					formPhase = 'focus-teilnehmer';
					later(250, () => {
						typeText(
							FORM_TEILNEHMER,
							(s) => (formTeilnehmer = s),
							36,
							() => {
								activeField = 'stichpunkte';
								formPhase = 'focus-stichpunkte';
								later(250, () => {
									typeText(
										FORM_STICHPUNKTE,
										(s) => (formStichpunkte = s),
										26,
										() => {
											activeField = null;
											formPhase = 'submitting';
											later(700, () => {
												formPhase = 'loading';
												later(1400, () => {
													formPhase = 'streaming';
													typeText(
														FORM_RESULT,
														(s) => (formResult = s),
														14,
														() => {
															formPhase = 'pause';
															later(4500, () => runForm(true));
														}
													);
												});
											});
										}
									);
								});
							}
						);
					});
				}
			);
		});
	}

	// =====================
	// Demo 3: Module Builder
	// =====================
	type BuilderPhase =
		| 'idle'
		| 'typing-name'
		| 'typing-desc'
		| 'adding-fields'
		| 'saving'
		| 'success'
		| 'pause';
	let builderPhase = $state<BuilderPhase>('idle');
	let builderName = $state('');
	let builderDesc = $state('');
	let builderFields = $state<string[]>([]);
	let builderActiveField = $state<string | null>(null);
	let builderSaved = $state(false);

	const BUILDER_NAME = 'Angebots-Generator';
	const BUILDER_DESC = 'Erstellt professionelle Angebote';
	const BUILDER_FIELDS = ['Produkt / Dienstleistung', 'Kundenwunsch', 'Budget-Rahmen'];

	function runBuilder(restart = false) {
		if (restart) {
			builderName = '';
			builderDesc = '';
			builderFields = [];
			builderSaved = false;
		}
		builderActiveField = 'name';
		builderPhase = 'typing-name';
		later(200, () => {
			typeText(
				BUILDER_NAME,
				(s) => (builderName = s),
				46,
				() => {
					builderActiveField = 'desc';
					builderPhase = 'typing-desc';
					later(300, () => {
						typeText(
							BUILDER_DESC,
							(s) => (builderDesc = s),
							36,
							() => {
								builderActiveField = null;
								builderPhase = 'adding-fields';
								later(500, () => {
									builderFields = [BUILDER_FIELDS[0]];
									later(650, () => {
										builderFields = [BUILDER_FIELDS[0], BUILDER_FIELDS[1]];
										later(650, () => {
											builderFields = BUILDER_FIELDS.slice();
											builderPhase = 'saving';
											later(700, () => {
												builderSaved = true;
												builderPhase = 'success';
												later(3800, () => {
													builderSaved = false;
													runBuilder(true);
												});
											});
										});
									});
								});
							}
						);
					});
				}
			);
		});
	}

	// =====================
	// Lifecycle
	// =====================
	function startAnimation() {
		if (demo === 'chat-vector') runChat();
		else if (demo === 'form-agent') runForm();
		else runBuilder();
	}

	function showStatic() {
		if (demo === 'chat-vector') {
			chatUserText = CHAT_USER;
			chatAiText = CHAT_AI;
			chatPhase = 'pause';
		} else if (demo === 'form-agent') {
			formDatum = FORM_DATUM;
			formTeilnehmer = FORM_TEILNEHMER;
			formStichpunkte = FORM_STICHPUNKTE;
			formResult = FORM_RESULT;
			formPhase = 'pause';
		} else {
			builderName = BUILDER_NAME;
			builderDesc = BUILDER_DESC;
			builderFields = BUILDER_FIELDS.slice();
			builderSaved = true;
			builderPhase = 'success';
		}
	}

	onMount(() => {
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					isVisible = true;
					if (prefersReducedMotion) showStatic();
					else later(350, startAnimation);
				}
			},
			{ threshold: 0.2 }
		);
		if (containerEl) observer.observe(containerEl);
	});

	onDestroy(() => {
		clearTimers();
		if (observer) observer.disconnect();
	});

	const chatSidebar = [
		{ icon: '📚', label: 'HR-Handbuch' },
		{ icon: '🔧', label: 'IT-Richtlinien' },
		{ icon: '⚖️', label: 'Compliance' },
		{ icon: '📦', label: 'Produktkatalog' }
	];

	const formSidebar = [
		{ icon: '📋', label: 'Protokoll' },
		{ icon: '✉️', label: 'E-Mail' },
		{ icon: '🌐', label: 'Übersetzung' },
		{ icon: '📊', label: 'Planung' }
	];
</script>

<div bind:this={containerEl} class="w-full">
	<div class="overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 shadow-xl">
		<!-- Browser chrome -->
		<div class="flex items-center gap-2 border-b border-base-content/10 bg-base-300 px-3 py-2">
			<div class="flex shrink-0 gap-1.5">
				<div class="h-2.5 w-2.5 rounded-full bg-error/50"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-warning/50"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-success/50"></div>
			</div>
			<div
				class="flex-1 truncate rounded-full bg-base-100 px-3 py-0.5 text-center text-[11px] text-base-content/50"
			>
				{demo === 'builder' ? 'demo.smartworkhub.de/builder' : 'demo.smartworkhub.de'}
			</div>
		</div>

		{#if demo === 'chat-vector'}
			<!-- ====== CHAT + VECTOR STORE ====== -->
			<div class="flex h-[380px]">
				<!-- Sidebar -->
				<div
					class="flex w-12 shrink-0 flex-col items-center gap-2.5 border-r border-base-content/10 bg-base-200 py-3 md:w-14"
				>
					{#each chatSidebar as mod, i}
						<div
							title={mod.label}
							class="flex h-9 w-9 items-center justify-center rounded-xl text-sm transition-all duration-300
							{i === 0 ? 'bg-primary shadow-md' : 'bg-base-100 opacity-50'}"
						>
							{mod.icon}
						</div>
					{/each}
				</div>

				<!-- Chat area -->
				<div class="flex min-w-0 flex-1 flex-col">
					<!-- Module header -->
					<div class="flex items-center gap-2 border-b border-base-content/10 px-3 py-2">
						<span class="text-sm">📚</span>
						<span class="truncate text-sm font-semibold">HR-Handbuch-Assistent</span>
						<span
							class="ml-auto flex hidden shrink-0 items-center gap-1 text-[10px] text-success sm:flex"
						>
							<span class="inline-block h-1.5 w-1.5 rounded-full bg-success"></span>
							Vector Store
						</span>
					</div>

					<!-- Messages -->
					<div class="flex-1 space-y-2.5 overflow-hidden p-3">
						{#if chatUserText}
							<div class="flex justify-end">
								<div
									class="max-w-[82%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-xs leading-relaxed text-primary-content"
								>
									{chatUserText}{#if chatPhase === 'typing-user'}<span
											class="ml-px inline-block h-3.5 w-px animate-pulse bg-primary-content/80"
										></span>{/if}
								</div>
							</div>
						{/if}

						{#if chatPhase === 'file-search'}
							<div class="flex justify-start">
								<div
									class="flex items-center gap-2 rounded-2xl rounded-tl-sm border border-warning/30 bg-warning/10 px-3 py-1.5 text-xs text-warning-content"
								>
									<span
										class="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-warning border-t-transparent"
									></span>
									<span class="text-base-content/70">Durchsuche HR-Handbuch...</span>
								</div>
							</div>
						{/if}

						{#if chatAiText}
							<div class="flex justify-start">
								<div
									class="max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-sm bg-base-200 px-3 py-2 text-xs leading-relaxed"
								>
									{chatAiText}{#if chatPhase === 'streaming-ai'}<span
											class="ml-px inline-block h-3.5 w-px animate-pulse bg-base-content/70"
										></span>{/if}
								</div>
							</div>
						{/if}
					</div>

					<!-- Input bar -->
					<div class="border-t border-base-content/10 px-3 py-2.5">
						<div class="rounded-full bg-base-200 px-3 py-1.5 text-xs text-base-content/30">
							Nachricht eingeben...
						</div>
					</div>
				</div>
			</div>
		{:else if demo === 'form-agent'}
			<!-- ====== FORM AGENT ====== -->
			<div class="flex h-[380px]">
				<!-- Sidebar -->
				<div
					class="flex w-12 shrink-0 flex-col items-center gap-2.5 border-r border-base-content/10 bg-base-200 py-3 md:w-14"
				>
					{#each formSidebar as mod, i}
						<div
							title={mod.label}
							class="flex h-9 w-9 items-center justify-center rounded-xl text-sm transition-all duration-300
							{i === 0 ? 'bg-primary shadow-md' : 'bg-base-100 opacity-50'}"
						>
							{mod.icon}
						</div>
					{/each}
				</div>

				<!-- Form / Result area -->
				<div class="flex min-w-0 flex-1 flex-col">
					<!-- Module header -->
					<div class="flex items-center gap-2 border-b border-base-content/10 px-3 py-2">
						<span class="text-sm">📋</span>
						<span class="text-sm font-semibold">Meeting-Protokoll</span>
					</div>

					<div class="flex-1 overflow-hidden p-3">
						{#if isFormInput}
							<!-- Form -->
							<div class="space-y-2">
								<div>
									<label class="mb-1 block text-[11px] font-medium text-base-content/60"
										>Datum *</label
									>
									<div
										class="flex h-7 items-center rounded-lg border px-2.5 py-1.5 text-xs
									{activeField === 'datum'
											? 'border-primary bg-base-100 ring-1 ring-primary/30'
											: 'border-base-content/20 bg-base-200'}"
									>
										{formDatum}{#if activeField === 'datum'}<span
												class="ml-px inline-block h-3.5 w-px animate-pulse bg-primary"
											></span>{/if}
									</div>
								</div>
								<div>
									<label class="mb-1 block text-[11px] font-medium text-base-content/60"
										>Teilnehmer *</label
									>
									<div
										class="flex h-7 items-center rounded-lg border px-2.5 py-1.5 text-xs
									{activeField === 'teilnehmer'
											? 'border-primary bg-base-100 ring-1 ring-primary/30'
											: 'border-base-content/20 bg-base-200'}"
									>
										{formTeilnehmer}{#if activeField === 'teilnehmer'}<span
												class="ml-px inline-block h-3.5 w-px animate-pulse bg-primary"
											></span>{/if}
									</div>
								</div>
								<div>
									<label class="mb-1 block text-[11px] font-medium text-base-content/60"
										>Stichpunkte *</label
									>
									<div
										class="min-h-[52px] rounded-lg border px-2.5 py-2 text-xs
									{activeField === 'stichpunkte'
											? 'border-primary bg-base-100 ring-1 ring-primary/30'
											: 'border-base-content/20 bg-base-200'}"
									>
										<span class="whitespace-pre-line">{formStichpunkte}</span
										>{#if activeField === 'stichpunkte'}<span
												class="ml-px inline-block h-3.5 w-px animate-pulse bg-primary"
											></span>{/if}
									</div>
								</div>
								<button
									class="btn btn-primary btn-sm w-full text-xs transition-all duration-150
									{formPhase === 'submitting'
										? 'scale-[0.97] opacity-75'
										: formPhase === 'idle'
											? 'cursor-default opacity-40'
											: ''}"
								>
									Protokoll erstellen →
								</button>
							</div>
						{:else if formPhase === 'loading'}
							<div class="flex items-center justify-center" style="min-height: 140px;">
								<div class="flex gap-1.5 rounded-2xl bg-base-200 px-5 py-3">
									<div
										class="h-2 w-2 animate-bounce rounded-full bg-base-content/40"
										style="animation-delay: 0ms"
									></div>
									<div
										class="h-2 w-2 animate-bounce rounded-full bg-base-content/40"
										style="animation-delay: 150ms"
									></div>
									<div
										class="h-2 w-2 animate-bounce rounded-full bg-base-content/40"
										style="animation-delay: 300ms"
									></div>
								</div>
							</div>
						{:else}
							<!-- Result -->
							<div
								class="max-h-[200px] overflow-y-auto whitespace-pre-line rounded-xl bg-base-200 p-3 text-xs leading-relaxed"
							>
								{formResult}{#if formPhase === 'streaming'}<span
										class="ml-px inline-block h-3.5 w-px animate-pulse bg-base-content/70"
									></span>{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>
		{:else}
			<!-- ====== MODULE BUILDER ====== -->
			<div class="h-[380px] overflow-hidden">
				<!-- Builder header -->
				<div
					class="flex items-center gap-2 border-b border-base-content/10 bg-base-200/50 px-3 py-2"
				>
					<span class="text-sm">⚙️</span>
					<span class="text-sm font-semibold">Modul-Builder</span>
				</div>

				<div class="space-y-2.5 p-3">
					<!-- Name field -->
					<div>
						<label class="mb-1 block text-[11px] font-medium text-base-content/60"
							>Modul-Name *</label
						>
						<div
							class="flex h-7 items-center rounded-lg border px-2.5 py-1.5 text-xs
						{builderActiveField === 'name'
								? 'border-primary bg-base-100 ring-1 ring-primary/30'
								: 'border-base-content/20 bg-base-200'}"
						>
							{builderName}{#if builderActiveField === 'name'}<span
									class="ml-px inline-block h-3.5 w-px animate-pulse bg-primary"
								></span>{/if}
						</div>
					</div>

					<!-- Desc field -->
					<div>
						<label class="mb-1 block text-[11px] font-medium text-base-content/60"
							>Beschreibung</label
						>
						<div
							class="flex h-7 items-center rounded-lg border px-2.5 py-1.5 text-xs
						{builderActiveField === 'desc'
								? 'border-primary bg-base-100 ring-1 ring-primary/30'
								: 'border-base-content/20 bg-base-200'}"
						>
							{builderDesc}{#if builderActiveField === 'desc'}<span
									class="ml-px inline-block h-3.5 w-px animate-pulse bg-primary"
								></span>{/if}
						</div>
					</div>

					<!-- Fields list -->
					<div>
						<label class="mb-1.5 block text-[11px] font-medium text-base-content/60"
							>Formularfelder</label
						>
						<div class="space-y-1.5">
							{#each builderFields as fieldLabel}
								<div
									class="flex items-center gap-2 rounded-lg border border-base-content/10 bg-base-200 px-2 py-1.5 text-xs"
								>
									<span
										class="shrink-0 rounded bg-base-100 px-1 py-px font-mono text-[10px] text-base-content/50"
										>T</span
									>
									<span class="flex-1 truncate">{fieldLabel}</span>
									<span class="shrink-0 text-[10px] text-base-content/30">✕</span>
								</div>
							{/each}
							{#if builderFields.length < 3}
								<div class="flex select-none items-center gap-1.5 px-0.5 text-xs text-primary/60">
									<span class="text-base font-bold leading-none">+</span>
									<span>Feld hinzufügen</span>
								</div>
							{/if}
						</div>
					</div>

					<!-- Save button -->
					<button
						class="btn btn-primary btn-sm w-full text-xs transition-all duration-150
						{builderPhase === 'saving'
							? 'scale-[0.97] opacity-70'
							: builderPhase === 'idle' ||
								  builderPhase === 'typing-name' ||
								  builderPhase === 'typing-desc'
								? 'cursor-default opacity-40'
								: ''}"
					>
						{#if builderPhase === 'saving'}
							<span class="loading loading-spinner loading-xs"></span>
						{:else}
							Modul speichern →
						{/if}
					</button>

					<!-- Success toast -->
					{#if builderSaved}
						<div
							class="flex items-center gap-2 rounded-xl border border-success/20 bg-success/10 px-3 py-2 text-xs font-medium text-success"
						>
							<span>✓</span>
							<span>Gespeichert - jetzt in der Sidebar verfügbar!</span>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>
