<!-- +error.svelte -->
<script>
	import { Home, ArrowLeft, Bot } from 'lucide-svelte';
</script>

<div class="h-screen flex flex-col overflow-hidden">
	<main class="flex-grow flex items-center justify-center py-16 px-4">
		<div class="max-w-2xl w-full text-center">
			<!-- Animated Bot Icon -->
			<div class="mb-8 relative">
				<div class="w-24 h-24 mx-auto relative">
					<Bot class="w-24 h-24 text-primary absolute top-0 left-0 animate-pulse" />
					<div class="w-24 h-24 bg-primary/10 rounded-full absolute top-0 left-0 animate-ping"></div>
				</div>
			</div>

			<!-- Error Message -->
			<h1 class="font-bold mb-2">
				<span class="text-8xl text-primary">404</span>
			</h1>
			<h2 class="text-2xl font-bold mb-4">Diese Seite konnte nicht gefunden werden</h2>
			<p class="text-base-content/70 text-lg mb-8 max-w-lg mx-auto">
				Unsere KI hat überall gesucht, aber leider nichts gefunden.
				Vielleicht wurde die Seite verschoben oder der Link ist nicht mehr aktuell.
			</p>

			<!-- Quick Actions -->
			<div class="grid gap-4 max-w-sm mx-auto mb-12">
				<a
					href="/"
					class="btn btn-primary gap-2"
				>
					<Home class="w-4 h-4" />
					Zur Startseite
				</a>
				<button
					class="btn btn-outline gap-2"
					onclick={() => history.back()}
				>
					<ArrowLeft class="w-4 h-4" />
					Zurück zur vorherigen Seite
				</button>
			</div>

		</div>
	</main>
</div>