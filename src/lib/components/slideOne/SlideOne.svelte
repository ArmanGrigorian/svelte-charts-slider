<script lang="ts">
	import type { I_Total, I_Miscellaneous } from '../../types/types';
	import { Slide } from '../reusable/index';
	import SlideOneChart from './SlideOneChart.svelte';

	const totalData: I_Total[] = $state([
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
	]);

	const miscellaneousData: I_Miscellaneous[] = $state([
		{
			id: 0,
			count: '90x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 1,
			count: '140x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: 2,
			count: '70x',
			text: 'Lorem ipsum dolor sit amet consectetur.'
		}
	]);
</script>

<Slide
	title="Lorem ipsum dolor sit amet consectetur 1."
	description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos itaque possimus officiis neque quam atque corporis."
	ChartComponent={SlideOneChart}
	{totalData}
	{miscellaneousData}
/>
