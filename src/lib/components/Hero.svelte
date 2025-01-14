<script lang="ts">
	import cms from '$lib/cms.svelte';
	import NewFeatureBadge from '$lib/components/NewFeatureBadge.svelte';
	let test: HTMLElement;
</script>

<section bind:this={test} class="hero min-h-svh bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
	<!-- Decorative background elements -->
	<div class="absolute inset-0">
		<div class="absolute top-0 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
		<div class="absolute top-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
		<div class="absolute -bottom-8 left-1/4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
	</div>

	<!-- Main content -->
	<div class="hero-content text-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="max-w-3xl mx-auto">
			<NewFeatureBadge />

			<!-- Main heading -->
			<h1 class="text-5xl md:text-6xl font-bold pb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{cms.hero.title}</h1>

			<!-- Subheading -->
			<p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">{cms.hero.description}</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<button class="btn btn-primary btn-lg px-8">
					{cms.call}
				</button>
				<button
					onclick={() => window.scrollTo({
						top: window.scrollY + window.innerHeight,
						behavior: 'smooth'
					})} class="btn btn-outline btn-lg px-8">
					{cms.moreInfo}
				</button>
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