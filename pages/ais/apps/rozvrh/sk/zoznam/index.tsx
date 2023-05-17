import Home from '@/components/screens/home/Home'
import LogoutButton from '@/components/ui/LogoutButton/LogoutButton'
import { useAuth } from '@/hooks/useAuth'
import { FC, useEffect } from 'react'

import { useRouter } from 'next/router'
import Student from '@/components/screens/student/Student'
import Rozvrh from '@/components/screens/rozvrh/Rozvrh'

const RozvrhPage: FC = () => {
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

	return <Rozvrh />
}
export default RozvrhPage
