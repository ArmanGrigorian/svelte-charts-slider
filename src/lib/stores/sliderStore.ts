import SlideOne from '../components/slideOne/SlideOne.svelte';
import SlideTwo from '../components/slideTwo/SlideTwo.svelte';
import SlideThree from '../components/slideThree/SlideThree.svelte';

import type { Component } from 'svelte';
import { writable, type Writable } from 'svelte/store';

interface I_SliderStore {
	slides: { id: number; SliderComponent: Component }[];
	currentSlideIndex: number;
}

const sliderStore: Writable<I_SliderStore> = writable({
	slides: [
		{ id: 1, SliderComponent: SlideOne },
		{ id: 2, SliderComponent: SlideTwo },
		{ id: 3, SliderComponent: SlideThree }
	],
	currentSlideIndex: 0
});

export function nextSlide() {
	sliderStore.update((state) => {
		const nextSlideIndex = (state.currentSlideIndex + 1) % state.slides.length;
		return {
			...state,
			currentSlideIndex: nextSlideIndex
		};
	});
}

export function previousSlide() {
	sliderStore.update((state) => {
		const previousSlideIndex =
			(state.currentSlideIndex - 1 + state.slides.length) % state.slides.length;
		return {
			...state,
			currentSlideIndex: previousSlideIndex
		};
	});
}

export function goToSlide(idx: number) {
	sliderStore.update((state) => {
		return {
			...state,
			currentSlideIndex: idx
		};
	});
}

export default sliderStore;
