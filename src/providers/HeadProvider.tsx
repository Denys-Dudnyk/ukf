import { accentColor } from '@/config/constants'
import FavIcon from '@/shared/FavIcon'
import Head from 'next/head'


import { PropsWithChildren } from 'react'

export default function HeadProvider({ children }: PropsWithChildren) {
	return (
		<>
			<Head>
				<FavIcon />
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='application-name' content='SIGMANIT OÜ' />
				<meta name='theme-color' content={'#F4F5FE'} />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				{/* <meta name='apple-mobile-web-app-status-bar-style' content='' /> */}
				<meta name='apple-mobile-web-app-title' content='SIGMANIT OÜ' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='msapplication-tap-highlight' content='no' />
				<meta
					http-equiv='Content-Security-Policy'
					content='upgrade-insecure-requests'
				></meta>
			</Head>
			{children}
		</>
	)
}
