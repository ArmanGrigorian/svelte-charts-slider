import { Chart } from '.';
import type { I_Total, I_Miscellaneous } from '../../types/types';

export const defaultTitle = 'Einsparung durch installierte PV-Anlagen';
export const defaultDescription =
	'Ein zusätzliches Textfeld, das für beliebige Informationen genutzt werden kann, wie z.B. die Anzahl modernisierter Heizungsanlagen im Jahr.';

export const defaultChart = Chart;

export const defaultTotal: I_Total[] = [
	{
		id: 0,
		title: 'Einsparung PV-Anlagen',
		count: '450',
		unit: 'kWp'
	},
	{
		id: 1,
		title: 'Gebaute PV-Anlagen',
		count: '1029',
		unit: ''
	}
];

export const defaultMiscellaneous: I_Miscellaneous[] = [
	{
		id: 0,
		count: '120x',
		text: 'modernisierte Heizungsanlagen in diesem Jahr'
	},
	{
		id: 1,
		count: '150x',
		text: 'energieeffiziente Solaranlagen in diesem Jahr installiert.'
	},
	{
		id: 2,
		count: '74x',
		text: 'erneuerte Wärmepumpensysteme erfolgreich in diesem Jahr umgesetzt.'
	}
];
