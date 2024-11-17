<script lang="ts">
	import type { I_Miscellaneous } from '../../types/types';

	const defaultData: I_Miscellaneous[] = [
		{
			id: 0,
			count: '100x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 1,
			count: '140x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 2,
			count: '20x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		}
	];

	let { miscellaneousData = defaultData } = $props();
</script>

<article class="relative z-10 h-fit w-fit">
	<div class="flex h-56 w-60 flex-col items-center justify-center border border-black bg-white p-4">
		<h2
			class="absolute left-1/2 top-0 flex h-7 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black text-base text-white"
		>
			Misc.
		</h2>

		<ul class="flex flex-col items-center justify-center gap-2">
			{#each miscellaneousData as { id, text, count } (id)}
				<li>
					<p class="text-sm/[16px]">
						<strong class="font-bold text-red-border">{count}</strong>
						<span>{text}</span>
					</p>
				</li>
			{/each}
		</ul>
	</div>
	<div class="absolute left-3 top-3 -z-10 h-56 w-60 border border-black bg-white"></div>
</article>
