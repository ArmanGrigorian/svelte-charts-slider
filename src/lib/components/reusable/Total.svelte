<script lang="ts">
	import type { I_Total } from '../../types/types';

	const defaultData: I_Total[] = [
		{
			id: 0,
			title: 'Lorem ipsum',
			count: '512',
			unit: 'kWp'
		},
		{
			id: 1,
			title: 'Lorem ipsum',
			count: '1024',
			unit: ''
		}
	];

	let { totalData = defaultData } = $props();
</script>

<article class="relative z-10 h-fit w-fit">
	<div class="flex h-56 w-60 flex-col items-center justify-center border border-black bg-white p-4">
		<h2
			class="absolute left-1/2 top-0 flex h-7 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black text-base text-white"
		>
			Total
		</h2>

		<ul class="flex flex-col items-center justify-center gap-2">
			{#each totalData as { id, title, count, unit } (id)}
				<li>
					<h3 class="text-center text-base text-black">{title}</h3>

					<p class="text-center text-red-border">
						<strong class="text-5xl"
							>{count}<span class="pl-0.5 text-xl">{unit ? unit : ''}</span></strong
						>
					</p>
				</li>
			{/each}
		</ul>
	</div>

	<div class="absolute left-3 top-3 -z-10 h-56 w-60 border border-black bg-white"></div>
</article>
