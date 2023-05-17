import HeadProvider from '@/providers/HeadProvider'
import MainProvider from '@/providers/MainProvider'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import '@/styles/globals.scss'

import '@/styles/react-select.scss'
import type { AppProps } from 'next/app'

import { PropsWithChildren } from 'react'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
