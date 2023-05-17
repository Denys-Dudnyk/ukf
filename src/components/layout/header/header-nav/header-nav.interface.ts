import { Dispatch, SetStateAction } from 'react'

export interface IHeaderNavItem {
	link: string
	text: string
	variant?: string
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export interface IHeaderNav {
	links: Omit<IHeaderNavItem, 'setIsVisible'>[]
	variant: 'inside' | 'outside'
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export const headerLinks: Pick<IHeaderNav, 'links'> = {
	links: [
		{
			link: '/',
			text: 'AiS2',
		},
		{
			link: '/',
			text: 'Nastavenia',
		},
		{
			link: '/',
			text: 'Kontakt',
		},
		{
			link: '/',
			text: 'Oznamy',
		},
		{
			link: '/',
			text: 'Pre verejnosť',
		},
	],
}
