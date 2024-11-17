<script lang="ts">
	import sliderStore, { goToSlide } from '../../stores/sliderStore';
	import type { I_SlideProps } from '../../types/types';
	import {
		defaultChart,
		defaultDescription,
		defaultTotal,
		defaultMiscellaneous,
		defaultTitle
	} from './defaultData';
	import { Total, Miscellaneous } from './index';

	let {
		title = defaultTitle,
		description = defaultDescription,
		totalData = defaultTotal,
		miscellaneousData = defaultMiscellaneous,
		ChartComponent = defaultChart
	}: I_SlideProps = $props();
</script>

<section class="h-screen w-full">
	<hgroup class="flex h-[153px] flex-col gap-2 px-5 pb-7 pt-10 md:px-14">
		<h1 class="text-xl font-bold text-black-light md:text-title/title">{title}</h1>
		<p class="max-w-[595px] text-sm text-black-light md:text-lg/5">{description}</p>
	</hgroup>

	<div class="flex h-[calc(100vh-153px)] flex-col gap-4 bg-gray-background px-5 py-10 md:px-14">
		<div
			id="parent"
			class="relative w-full flex-1 border border-black bg-white md:w-[calc(100%-208px)]"
		>
			{#if ChartComponent}
				<ChartComponent />
			{/if}
			<div class="absolute right-1 top-16 flex flex-col items-center gap-16 md:-right-52">
				<Total {totalData} />
				<Miscellaneous {miscellaneousData} />
			</div>
		</div>
		<div class="flex w-full items-center justify-between gap-2 md:w-[calc(100%-208px)]">
			<ul class="flex h-10 w-28 items-center justify-center gap-0.5 border border-black bg-white">
				{#each $sliderStore.slides as _, idx}
					<li>
						<button
							class="h-2 rounded-full border border-black"
							class:bg-red-border={idx === $sliderStore.currentSlideIndex}
							class:w-5={idx === $sliderStore.currentSlideIndex}
							class:bg-gray-title={idx !== $sliderStore.currentSlideIndex}
							class:w-2={idx !== $sliderStore.currentSlideIndex}
							onclick={() => goToSlide(idx)}
							aria-label={`Go to slide ${idx + 1}`}
							aria-current={idx === $sliderStore.currentSlideIndex}
						></button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
