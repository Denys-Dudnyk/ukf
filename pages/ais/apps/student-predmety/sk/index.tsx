import { useAuth } from '@/hooks/useAuth'
import { FC, useEffect } from 'react'

import { useRouter } from 'next/router'

import Predmety from '@/components/screens/predmety/Predmety'

const PredmetyPage: FC = () => {
	const { user } = useAuth()
	const { query, push } = useRouter()
	const redirectToLogin = query.redirect
		? String(query.redirect)
		: '/ais/start.do'
	// if (!user) {
	// 	push(redirectToLogin)
	// }

	useEffect(() => {
		if (!user) push(redirectToLogin)
	}, [user, redirectToLogin, push])

	return <Predmety />
}
export default PredmetyPage
