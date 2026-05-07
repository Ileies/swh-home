<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	let view = $state(0);
	let visible = $state(true);
	let interval: ReturnType<typeof setInterval>;
	let timeout: ReturnType<typeof setTimeout>;

	const views = ['chat', 'form', 'modules'] as const;

	function cycle() {
		visible = false;
		timeout = setTimeout(() => {
			view = (view + 1) % 3;
			visible = true;
		}, 350);
	}

	onMount(() => {
		interval = setInterval(cycle, 3800);
	});

	onDestroy(() => {
		clearInterval(interval);
		clearTimeout(timeout);
	});
</script>

<div class="w-full select-none">
	<div class="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white">

		<!-- Browser chrome -->
		<div class="bg-gray-100 px-3 py-2.5 flex items-center gap-2 border-b border-gray-200">
			<div class="flex gap-1.5 shrink-0">
				<div class="w-3 h-3 rounded-full bg-gray-300"></div>
				<div class="w-3 h-3 rounded-full bg-gray-300"></div>
				<div class="w-3 h-3 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex-1 bg-white border border-gray-200 rounded-full px-3 py-0.5 text-xs text-gray-400 text-center truncate">
				demo.smartworkhub.de
			</div>
		</div>

		<!-- App shell -->
		<div class="flex" style="height: 340px;">

			<!-- Sidebar -->
			<div class="w-14 bg-gray-50 flex flex-col items-center pt-4 pb-3 gap-2.5 border-r border-gray-200 shrink-0">
				<div class="w-7 h-7 rounded-lg bg-gray-300 mb-1"></div>
				{#each [true, false, false, false, false] as active, i}
					<div class="w-9 h-9 rounded-xl {view === 0 && i === 0 ? 'bg-gray-400' : view === 1 && i === 1 ? 'bg-gray-400' : view === 2 && i === 2 ? 'bg-gray-400' : 'bg-gray-200'}
						transition-colors duration-500"></div>
				{/each}
			</div>

			<!-- Main area -->
			<div class="flex-1 flex flex-col min-w-0 relative overflow-hidden">

				<!-- Topbar -->
				<div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3 bg-white shrink-0">
					<div class="h-3.5 rounded-full bg-gray-200 {view === 0 ? 'w-36' : view === 1 ? 'w-44' : 'w-40'} transition-all duration-500"></div>
					<div class="ml-auto h-6 w-20 rounded-full bg-gray-100 border border-gray-200"></div>
				</div>

				<!-- Content panel -->
				<div class="flex-1 overflow-hidden">
					{#if visible}
						{#if view === 0}
							<!-- Chat view -->
							<div class="h-full flex flex-col p-4 gap-3" in:fade={{ duration: 300 }}>
								<!-- AI message -->
								<div class="flex gap-2.5 items-end">
									<div class="w-6 h-6 rounded-full bg-gray-300 shrink-0"></div>
									<div class="space-y-1.5 max-w-[72%]">
										<div class="h-3 w-48 bg-gray-200 rounded-full"></div>
										<div class="h-3 w-40 bg-gray-200 rounded-full"></div>
										<div class="h-3 w-32 bg-gray-200 rounded-full"></div>
									</div>
								</div>
								<!-- User message -->
								<div class="flex justify-end">
									<div class="bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[70%] space-y-1.5">
										<div class="h-3 w-40 bg-gray-300 rounded-full"></div>
										<div class="h-3 w-28 bg-gray-300 rounded-full"></div>
									</div>
								</div>
								<!-- AI typing -->
								<div class="flex gap-2.5 items-end">
									<div class="w-6 h-6 rounded-full bg-gray-300 shrink-0"></div>
									<div class="space-y-1.5 max-w-[72%]">
										<div class="h-3 w-52 bg-gray-200 rounded-full animate-pulse"></div>
										<div class="h-3 w-36 bg-gray-200 rounded-full animate-pulse" style="animation-delay: 100ms"></div>
										<div class="flex gap-1 mt-1">
											<div class="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style="animation-delay: 0ms"></div>
											<div class="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style="animation-delay: 150ms"></div>
											<div class="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style="animation-delay: 300ms"></div>
										</div>
									</div>
								</div>
								<!-- Input -->
								<div class="mt-auto border-t border-gray-100 pt-3">
									<div class="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2.5">
										<div class="flex-1 h-3 w-24 bg-gray-300 rounded-full opacity-40"></div>
										<div class="w-7 h-7 rounded-lg bg-gray-300 shrink-0"></div>
									</div>
								</div>
							</div>

						{:else if view === 1}
							<!-- Form agent view -->
							<div class="h-full flex flex-col p-4 gap-3" in:fade={{ duration: 300 }}>
								<div class="space-y-3">
									<div>
										<div class="h-2.5 w-16 bg-gray-300 rounded-full mb-1.5"></div>
										<div class="h-8 w-full bg-gray-100 border border-gray-200 rounded-lg"></div>
									</div>
									<div>
										<div class="h-2.5 w-24 bg-gray-300 rounded-full mb-1.5"></div>
										<div class="h-8 w-full bg-gray-100 border border-gray-200 rounded-lg"></div>
									</div>
									<div>
										<div class="h-2.5 w-20 bg-gray-300 rounded-full mb-1.5"></div>
										<div class="h-16 w-full bg-gray-100 border border-gray-200 rounded-lg animate-pulse"></div>
									</div>
									<div class="h-9 w-full bg-gray-300 rounded-lg mt-1"></div>
								</div>
								<div class="mt-auto pt-2 border-t border-gray-100">
									<div class="flex gap-2">
										<div class="h-2.5 w-28 bg-gray-200 rounded-full"></div>
										<div class="h-2.5 w-20 bg-gray-200 rounded-full"></div>
									</div>
								</div>
							</div>

						{:else}
							<!-- Module grid view -->
							<div class="h-full p-4 overflow-hidden" in:fade={{ duration: 300 }}>
								<div class="h-2.5 w-32 bg-gray-200 rounded-full mb-4"></div>
								<div class="grid grid-cols-3 gap-2.5">
									{#each Array(9) as _, i}
										<div class="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col gap-2
											{i === 0 ? 'border-gray-300 bg-gray-100' : ''}">
											<div class="w-7 h-7 rounded-lg bg-gray-300 {i === 0 ? 'opacity-100' : 'opacity-60'}"></div>
											<div class="h-2 rounded-full bg-gray-200 w-full"></div>
											<div class="h-2 rounded-full bg-gray-200 w-3/4"></div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					{/if}
				</div>

			</div>
		</div>

		<!-- Tab indicators at bottom -->
		<div class="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center justify-center gap-2">
			{#each [0, 1, 2] as i}
				<div class="h-1.5 rounded-full transition-all duration-500 {view === i ? 'w-6 bg-gray-400' : 'w-1.5 bg-gray-300'}"></div>
			{/each}
		</div>
	</div>
</div>
