import { FC } from 'react'
import styles from './Versia.module.scss'
import Image from 'next/image'
import ais2 from '/public/AiS2_logo.png'
import ukf from '/public/top_UKF_gray.png'
const Versia: FC = () => {
	return (
		<section className={styles.versia}>
			<div className={styles.versiaContainer}>AiS2 verzia 2023.04.1.49</div>
			<div className={styles.copyright}>
				<span>Akademický informačný systém</span> AiS2 © UPJŠ Košice 2007-2023
			</div>
			<div className={styles.somshak}>dizajn © šomšák, 2009 - 2015</div>
		</section>
	)
}
export default Versia
