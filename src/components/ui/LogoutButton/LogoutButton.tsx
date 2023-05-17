import { FC, MouseEvent } from 'react'

// import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

// import styles from '../Menu.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}
	return (
		<li>
			<a onClick={handleLogout} className='cursor-pointer '>
				{/* <MaterialIcon name="MdLogout" /> */}
				<span>Odhlásiť</span>
			</a>
		</li>
	)
}

export default LogoutButton
