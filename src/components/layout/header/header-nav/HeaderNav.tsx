import { FC } from 'react'
import styles from './HeaderNav.module.scss'
import { IHeaderNav } from './header-nav.interface'
import clsx from 'clsx'
import HeaderNavItem from './HeaderNavItem'
import { useOutside } from '@/hooks/useOutside'
import Button from '@/components/ui/button/Button'

import Modal from '@/components/ui/modal/Modal'
import Form from '@/components/ui/form/Form'
const HeaderNav: FC<IHeaderNav> = ({ links, setIsVisible, variant }) => {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<>
			<nav className='flex justify-between items-center'>
				<ul
					className={clsx(styles.nav, {
						[styles.verticalNav]: variant === 'inside',
					})}
				>
					{variant === 'outside'}
					{links.map(l => (
						<HeaderNavItem
							link={l.link}
							text={l.text}
							key={l.link}
							setIsVisible={setIsVisible}
							variant={variant}
						/>
					))}
				</ul>
				<ul className={styles.yazyky}>
					<li>
						<a href=''>SK</a>
					</li>
					<li>
						<a href=''>EN</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
export default HeaderNav
