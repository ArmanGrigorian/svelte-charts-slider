<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import sliderStore, { nextSlide, previousSlide } from '../../stores/sliderStore';

	let transitionTime = 3000;
	let autoPlay = true;
	let interval: number | undefined = $state(undefined);

	$effect(() => {
		if (autoPlay) {
			interval = setInterval(nextSlide, transitionTime);
		}
		return () => clearInterval(interval);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	function handleKeydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowLeft':
				previousSlide();
				break;
			case 'ArrowRight':
				nextSlide();
				break;
			default:
				break;
		}
	}
</script>

<div
	class="relative h-screen w-full overflow-hidden bg-white"
	role="tablist"
	aria-label="Image Slider"
	tabindex="0"
	onkeydown={handleKeydown}
>
	{#each $sliderStore.slides as { SliderComponent, id }, idx (id)}
		<div
			class="slide absolute flex h-full w-full items-center justify-center"
			in:fade={{ duration: 1000 }}
			out:fade={{ duration: 1000 }}
			class:active={idx === $sliderStore.currentSlideIndex}
			aria-hidden={idx !== $sliderStore.currentSlideIndex}
			aria-label={`Slide ${idx + 1} of ${$sliderStore.slides.length}`}
		>
			{#if SliderComponent}
				<SliderComponent />
			{/if}
		</div>
	{/each}
</div>

<style>
	.slide {
		transition: opacity 1s ease-in-out;
		opacity: 0;
	}

	.slide.active {
		opacity: 1;
	}
</style>
