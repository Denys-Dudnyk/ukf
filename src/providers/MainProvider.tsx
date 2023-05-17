import Layout from '@/components/layout/Layout'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { FC } from 'react'

// import 'react-toastify/dist/ReactToastify.min.css'
// import { ToastContainer } from 'react-toastify'

// import 'react-toastify/dist/ReactToastify.min.css'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import AuthProvider from './AuthProvider/AuthProvider'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import HeadProvider from './HeadProvider'
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
