<script>
	import { Home, ArrowLeft, Bot } from 'lucide-svelte';
</script>

<svelte:head>
	<title>404 – Seite nicht gefunden | SmartWorkHub</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex h-screen flex-col overflow-hidden">
	<main class="flex flex-grow items-center justify-center px-4 py-16">
		<div class="w-full max-w-2xl text-center">
			<!-- Animated Bot Icon -->
			<div class="relative mb-8">
				<div class="relative mx-auto h-24 w-24">
					<Bot class="absolute left-0 top-0 h-24 w-24 animate-pulse text-primary" />
					<div
						class="absolute left-0 top-0 h-24 w-24 animate-ping rounded-full bg-primary/10"
					></div>
				</div>
			</div>

			<!-- Error Message -->
			<h1 class="mb-2 font-bold">
				<span class="text-8xl text-primary">404</span>
			</h1>
			<h2 class="mb-4 text-2xl font-bold">Diese Seite konnte nicht gefunden werden</h2>
			<p class="mx-auto mb-8 max-w-lg text-lg text-base-content/70">
				Unsere KI hat überall gesucht, aber leider nichts gefunden. Vielleicht wurde die Seite
				verschoben oder der Link ist nicht mehr aktuell.
			</p>

			<!-- Quick Actions -->
			<div class="mx-auto mb-12 grid max-w-sm gap-4">
				<a href="/" class="btn btn-primary gap-2">
					<Home class="h-4 w-4" />
					Zur Startseite
				</a>
				<button class="btn btn-outline gap-2" onclick={() => history.back()}>
					<ArrowLeft class="h-4 w-4" />
					Zurück zur vorherigen Seite
				</button>
			</div>
		</div>
	</main>
</div>
