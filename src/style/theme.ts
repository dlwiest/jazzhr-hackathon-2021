// theme.ts
import { DefaultTheme } from 'styled-components'

declare module "styled-components" {
	export interface DefaultTheme {
		body: string;
		text: string;
	}
}

export const lightTheme: DefaultTheme = {
	body: '#fff',
	text: '#363636',
};

export const darkTheme: DefaultTheme = {
	body: '#363636',
	text: '#fff',
};