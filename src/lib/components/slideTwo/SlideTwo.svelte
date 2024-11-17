<script lang="ts">
	import type { I_Miscellaneous, I_Total } from '../../types/types';
	import { Slide } from '../reusable/index';
	import SlideTwoChart from './SlideTwoChart.svelte';

	const totalData: I_Total[] = $state([
		{
			id: 0,
			title: 'Lorem ipsum.',
			count: '256',
			unit: 'kWp'
		},
		{
			id: 1,
			title: 'Lorem ipsum.',
			count: '384',
			unit: ''
		}
	]);

	const miscellaneousData: I_Miscellaneous[] = $state([
		{
			id: 0,
			count: '80x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 1,
			count: '160x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 2,
			count: '120x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		}
	]);
</script>

<Slide
	title="Lorem ipsum dolor sit amet consectetur 2."
	description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos itaque possimus officiis neque quam atque corporis."
	ChartComponent={SlideTwoChart}
	{totalData}
	{miscellaneousData}
/>
