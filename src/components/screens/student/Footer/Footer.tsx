import { FC } from 'react'
import styles from './Footer.module.scss'
const Footer: FC = () => {
	return (
		<nav className={styles.footer}>
			Akademický informačný systém AiS2 © UPJŠ Košice
		</nav>
	)
}
export default Footer
