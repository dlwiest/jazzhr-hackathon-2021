// theme.ts
import { DefaultTheme } from 'styled-components'
interface ColorSet {
	[key: string]: string
}

declare module "styled-components" {
	export interface DefaultTheme {
		body: string;
		text: string;
		colors: ColorSet
	}
}

export const lightTheme: DefaultTheme = {
	body: '#fff',
	text: '#363636',
	colors: {
		primary: '#5A2D8A',
		success: '#4BA315',
		info: '#009199',
		warning: '#FC9700',
		danger: '#D81E2A',
	}
};

export const darkTheme: DefaultTheme = {
	body: '#363636',
	text: '#fff',
	colors: {
		primary: '#5A2D8A',
		success: '#4BA315',
		info: '#009199',
		warning: '#FC9700',
		danger: '#D81E2A',
	}
};