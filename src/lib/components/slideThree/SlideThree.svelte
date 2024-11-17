<script lang="ts">
	import type { I_Miscellaneous, I_Total } from '../../types/types';
	import { Slide } from '../reusable/index';
	import SlideThreeChart from './SlideThreeChart.svelte';

	const totalData: I_Total[] = $state([
		{
			id: 0,
			title: 'Lorem ipsum.',
			count: '512',
			unit: 't'
		}
	]);

	const miscellaneousData: I_Miscellaneous[] = $state([
		{
			id: 0,
			count: '64x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 1,
			count: '128x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 2,
			count: '32x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		}
	]);
</script>

<Slide
	title="Lorem ipsum dolor sit amet consectetur 3."
	description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos itaque possimus officiis neque quam atque corporis."
	ChartComponent={SlideThreeChart}
	{totalData}
	{miscellaneousData}
/>
