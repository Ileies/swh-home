<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	// Optional: Animation für das Erscheinen der Elemente
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<section class="hero min-h-[90vh] bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
	<!-- Decorative background elements -->
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
		<div class="absolute top-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
		<div class="absolute -bottom-8 left-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
	</div>

	<!-- Main content -->
	<div class="hero-content text-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="max-w-3xl mx-auto">
			<!-- Badge -->
			<div class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
        <span class="relative flex h-2 w-2 mr-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
				Neu: KI-powered Workflow Automation
			</div>

			<!-- Main heading -->
			<h1 class="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
				Revolutioniere deinen Arbeitsalltag mit KI
			</h1>

			<!-- Subheading -->
			<p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
				SmartWorkHub automatisiert deine repetitiven Aufgaben mit modernster KI-Technologie. Spare Zeit und fokussiere dich auf das Wesentliche.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button class="btn btn-primary btn-lg px-8">
					Kostenloses Beratungsgespräch
				</button>
				<button class="btn btn-outline btn-lg px-8">
					Mehr erfahren
				</button>
			</div>

			<!-- Optional: Metrics -->
			<div class="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
				<div class="text-center">
					<div class="text-4xl font-bold text-blue-600">500+</div>
					<div class="text-gray-600">Aktive Nutzer</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-blue-600">98%</div>
					<div class="text-gray-600">Zeitersparnis</div>
				</div>
				<div class="text-center hidden md:block">
					<div class="text-4xl font-bold text-blue-600">24/7</div>
					<div class="text-gray-600">Support</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }

    .animate-blob {
        animation: blob 7s infinite;
    }

    .animation-delay-2000 {
        animation-delay: 2s;
    }

    .animation-delay-4000 {
        animation-delay: 4s;
    }
</style>