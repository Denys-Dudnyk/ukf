import Image from 'next/image'
import Link from 'next/link'
import { FC, useState, useCallback } from 'react'
import styles from './Header.module.scss'
import logo from '/public/sigmanit.svg'

import HeaderNav from './header-nav/HeaderNav'
import { headerLinks } from './header-nav/header-nav.interface'
import dynamic from 'next/dynamic'

const Hamburger = dynamic(() => import('hamburger-react').then(h => h.Turn), {
	ssr: false,
})

const Header: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleBurgerClick = useCallback(() => {
		setIsVisible(!isVisible)
	}, [isVisible])

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.navContainer}>
						<HeaderNav
							links={headerLinks.links}
							variant='outside'
							setIsVisible={setIsVisible}
						/>
					</div>
				</div>
			</header>
		</>
	)
}
export default Header
