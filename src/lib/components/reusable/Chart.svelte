<script lang="ts">
	import * as d3 from 'd3';
	import { onDestroy, onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import type { I_SlideData } from '../../types/types';

	const data: I_SlideData[] = $state([
		{ id: 0, date: 1, value: 70 },
		{ id: 1, date: 2, value: 90 },
		{ id: 2, date: 3, value: 80 },
		{ id: 3, date: 4, value: 100 },
		{ id: 4, date: 5, value: 80 },
		{ id: 5, date: 6, value: 110 },
		{ id: 6, date: 7, value: 140 }
	]);

	let width = $state(800);
	let height = $state(400);
	let chartContainer: HTMLElement | null = $state(null);
	let parentElement: HTMLElement | null = $state(null);
	let svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = $state(null);

	const margin = {
		top: 56,
		right: 60,
		bottom: 56,
		left: 71
	};

	function debounce<T extends (...args: any[]) => void>(
		func: T,
		wait: number
	): (...args: Parameters<T>) => void {
		let timeout: number;
		return (...args: Parameters<T>) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => func(...args), wait);
		};
	}

	const updateSize = debounce(() => {
		if (!parentElement) return;

		width = parentElement.clientWidth;
		height = parentElement.clientHeight;

		renderChart();
	}, 250);

	function createScales(innerWidth: number, innerHeight: number) {
		return {
			x: d3
				.scaleLinear()
				.domain([data[0].date, data[data.length - 1].date])
				.range([0, innerWidth]),
			y: d3.scaleLinear().domain([0, 200]).range([innerHeight, 0])
		};
	}

	function createGradient(g: d3.Selection<SVGGElement, unknown, null, undefined>) {
		const gradientDefs = g.append('defs');
		const redGradient = gradientDefs
			.append('linearGradient')
			.attr('id', 'red-gradient')
			.attr('x1', '0%')
			.attr('y1', '0%')
			.attr('x2', '0%')
			.attr('y2', '100%');

		redGradient.append('stop').attr('offset', '0%').attr('stop-color', '#E30613');
		redGradient.append('stop').attr('offset', '100%').attr('stop-color', 'rgba(255, 255, 255, 0)');
	}

	function renderChart() {
		if (!chartContainer || !browser) return;

		d3.select(chartContainer).selectAll('svg').remove();

		const innerWidth = width - margin.left - margin.right;
		const innerHeight = height - margin.top - margin.bottom;

		svg = d3.select(chartContainer).append('svg').attr('width', '100%').attr('height', height);

		svg.append('rect').attr('width', '100%').attr('height', height).attr('fill', 'white');

		const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

		const { x, y } = createScales(innerWidth, innerHeight);

		g.selectAll('line.horizontal-grid')
			.data(y.ticks(5))
			.join('line')
			.attr('class', 'horizontal-grid')
			.attr('x1', 0)
			.attr('x2', innerWidth)
			.attr('y1', (d) => y(d))
			.attr('y2', (d) => y(d))
			.attr('stroke', '#E3E3E3')
			.attr('stroke-width', '1');

		createGradient(g);

		const area = d3
			.area<I_SlideData>()
			.x((d) => x(d.date))
			.y0(innerHeight)
			.y1((d) => y(d.value))
			.curve(d3.curveCatmullRom.alpha(0.5));

		const line = d3
			.line<I_SlideData>()
			.x((d) => x(d.date))
			.y((d) => y(d.value))
			.curve(d3.curveCatmullRom.alpha(0.5));

		g.append('path')
			.datum(data)
			.attr('class', 'area')
			.attr('d', area)
			.style('fill', 'url(#red-gradient)');

		g.append('path')
			.datum(data)
			.attr('class', 'line')
			.attr('fill', 'none')
			.attr('stroke', '#E30613')
			.attr('stroke-width', 2)
			.attr('d', line);

		const xAxis = g
			.append('g')
			.attr('class', 'x-axis')
			.attr('transform', `translate(0,${innerHeight + 12})`)
			.call(d3.axisBottom(x).ticks(data.length).tickSize(0))
			.call((g) => g.select('.domain').remove());

		const yAxis = g
			.append('g')
			.attr('class', 'y-axis')
			.call(d3.axisLeft(y).ticks(5).tickSize(0))
			.call((g) => g.select('.domain').remove());

		xAxis.selectAll('text').attr('class', 'text-xs text-[#1818196B]');
		yAxis.selectAll('text').attr('class', 'text-xs text-[#1818196B]');
	}

	onMount(async () => {
		if (!browser) return;

		parentElement = document.getElementById('parent');
		await tick();

		updateSize();
		window.addEventListener('resize', updateSize);
	});

	onDestroy(() => {
		if (!browser) return;

		window.removeEventListener('resize', updateSize);
		if (svg) {
			svg.remove();
		}
	});
</script>

<div bind:this={chartContainer}></div>

<style>
	:global(.line) {
		filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));
	}

	:global(.area) {
		opacity: 0.8;
	}

	:global(.horizontal-grid) {
		pointer-events: none;
	}
</style>
