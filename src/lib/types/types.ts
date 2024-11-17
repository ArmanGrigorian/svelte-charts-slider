import type { Component } from 'svelte';
export interface I_SlideData {
	id: number;
	date: number;
	value: number;
}

export interface I_SlideFiveData {
	id: number;
	date: Date;
	value: number;
}

export interface I_Total {
	id: number;
	title: string;
	count: string;
	unit?: string;
}

export interface I_Miscellaneous {
	id: number;
	count: string;
	text: string;
}

export interface I_SlideProps {
	title?: string;
	description?: string;
	totalData?: I_Total[];
	miscellaneousData?: I_Miscellaneous[];
	ChartComponent?: Component;
}
