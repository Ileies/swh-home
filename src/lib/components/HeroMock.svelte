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
	<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
		<!-- Browser chrome -->
		<div class="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-3 py-2.5">
			<div class="flex shrink-0 gap-1.5">
				<div class="h-3 w-3 rounded-full bg-gray-300"></div>
				<div class="h-3 w-3 rounded-full bg-gray-300"></div>
				<div class="h-3 w-3 rounded-full bg-gray-300"></div>
			</div>
			<div
				class="flex-1 truncate rounded-full border border-gray-200 bg-white px-3 py-0.5 text-center text-xs text-gray-400"
			>
				demo.smartworkhub.de
			</div>
		</div>

		<!-- App shell -->
		<div class="flex" style="height: 340px;">
			<!-- Sidebar -->
			<div
				class="flex w-14 shrink-0 flex-col items-center gap-2.5 border-r border-gray-200 bg-gray-50 pb-3 pt-4"
			>
				<div class="mb-1 h-7 w-7 rounded-lg bg-gray-300"></div>
				{#each [true, false, false, false, false] as active, i}
					<div
						class="h-9 w-9 rounded-xl {view === 0 && i === 0
							? 'bg-gray-400'
							: view === 1 && i === 1
								? 'bg-gray-400'
								: view === 2 && i === 2
									? 'bg-gray-400'
									: 'bg-gray-200'}
						transition-colors duration-500"
					></div>
				{/each}
			</div>

			<!-- Main area -->
			<div class="relative flex min-w-0 flex-1 flex-col overflow-hidden">
				<!-- Topbar -->
				<div class="flex shrink-0 items-center gap-3 border-b border-gray-100 bg-white px-4 py-3">
					<div
						class="h-3.5 rounded-full bg-gray-200 {view === 0
							? 'w-36'
							: view === 1
								? 'w-44'
								: 'w-40'} transition-all duration-500"
					></div>
					<div class="ml-auto h-6 w-20 rounded-full border border-gray-200 bg-gray-100"></div>
				</div>

				<!-- Content panel -->
				<div class="flex-1 overflow-hidden">
					{#if visible}
						{#if view === 0}
							<!-- Chat view -->
							<div class="flex h-full flex-col gap-3 p-4" in:fade={{ duration: 300 }}>
								<!-- AI message -->
								<div class="flex items-end gap-2.5">
									<div class="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
									<div class="max-w-[72%] space-y-1.5">
										<div class="h-3 w-48 rounded-full bg-gray-200"></div>
										<div class="h-3 w-40 rounded-full bg-gray-200"></div>
										<div class="h-3 w-32 rounded-full bg-gray-200"></div>
									</div>
								</div>
								<!-- User message -->
								<div class="flex justify-end">
									<div
										class="max-w-[70%] space-y-1.5 rounded-2xl rounded-tr-sm bg-gray-200 px-4 py-2.5"
									>
										<div class="h-3 w-40 rounded-full bg-gray-300"></div>
										<div class="h-3 w-28 rounded-full bg-gray-300"></div>
									</div>
								</div>
								<!-- AI typing -->
								<div class="flex items-end gap-2.5">
									<div class="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
									<div class="max-w-[72%] space-y-1.5">
										<div class="h-3 w-52 animate-pulse rounded-full bg-gray-200"></div>
										<div
											class="h-3 w-36 animate-pulse rounded-full bg-gray-200"
											style="animation-delay: 100ms"
										></div>
										<div class="mt-1 flex gap-1">
											<div
												class="h-2 w-2 animate-bounce rounded-full bg-gray-300"
												style="animation-delay: 0ms"
											></div>
											<div
												class="h-2 w-2 animate-bounce rounded-full bg-gray-300"
												style="animation-delay: 150ms"
											></div>
											<div
												class="h-2 w-2 animate-bounce rounded-full bg-gray-300"
												style="animation-delay: 300ms"
											></div>
										</div>
									</div>
								</div>
								<!-- Input -->
								<div class="mt-auto border-t border-gray-100 pt-3">
									<div class="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2.5">
										<div class="h-3 w-24 flex-1 rounded-full bg-gray-300 opacity-40"></div>
										<div class="h-7 w-7 shrink-0 rounded-lg bg-gray-300"></div>
									</div>
								</div>
							</div>
						{:else if view === 1}
							<!-- Form agent view -->
							<div class="flex h-full flex-col gap-3 p-4" in:fade={{ duration: 300 }}>
								<div class="space-y-3">
									<div>
										<div class="mb-1.5 h-2.5 w-16 rounded-full bg-gray-300"></div>
										<div class="h-8 w-full rounded-lg border border-gray-200 bg-gray-100"></div>
									</div>
									<div>
										<div class="mb-1.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
										<div class="h-8 w-full rounded-lg border border-gray-200 bg-gray-100"></div>
									</div>
									<div>
										<div class="mb-1.5 h-2.5 w-20 rounded-full bg-gray-300"></div>
										<div
											class="h-16 w-full animate-pulse rounded-lg border border-gray-200 bg-gray-100"
										></div>
									</div>
									<div class="mt-1 h-9 w-full rounded-lg bg-gray-300"></div>
								</div>
								<div class="mt-auto border-t border-gray-100 pt-2">
									<div class="flex gap-2">
										<div class="h-2.5 w-28 rounded-full bg-gray-200"></div>
										<div class="h-2.5 w-20 rounded-full bg-gray-200"></div>
									</div>
								</div>
							</div>
						{:else}
							<!-- Module grid view -->
							<div class="h-full overflow-hidden p-4" in:fade={{ duration: 300 }}>
								<div class="mb-4 h-2.5 w-32 rounded-full bg-gray-200"></div>
								<div class="grid grid-cols-3 gap-2.5">
									{#each Array(9) as _, i}
										<div
											class="flex flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-3
											{i === 0 ? 'border-gray-300 bg-gray-100' : ''}"
										>
											<div
												class="h-7 w-7 rounded-lg bg-gray-300 {i === 0
													? 'opacity-100'
													: 'opacity-60'}"
											></div>
											<div class="h-2 w-full rounded-full bg-gray-200"></div>
											<div class="h-2 w-3/4 rounded-full bg-gray-200"></div>
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
		<div
			class="flex items-center justify-center gap-2 border-t border-gray-200 bg-gray-50 px-4 py-2"
		>
			{#each [0, 1, 2] as i}
				<div
					class="h-1.5 rounded-full transition-all duration-500 {view === i
						? 'w-6 bg-gray-400'
						: 'w-1.5 bg-gray-300'}"
				></div>
			{/each}
		</div>
	</div>
</div>
