import { FC } from 'react'
import styles from './Banner.module.scss'
import Image from 'next/image'
import ais2 from '/public/AiS2_logo.png'
import ukf from '/public/top_UKF_gray.png'
const Banner: FC = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.bannerContainer}>
				<div className={styles.logoAis}></div>
				{/* <Image
					alt={'Ais2'}
					src={ais2}
					width={130}
					height={66}
					draggable={false}
					priority
				/> */}
				<div className={styles.mobileText}>
					<div>Univerzita Konštantína Filozofa v Nitre</div>
				</div>

				<div className={styles.ukf}>
					<Image
						alt={'UKF'}
						src={ukf}
						width={700}
						height={140}
						draggable={false}
						priority
					/>
				</div>
			</div>
		</section>
	)
}
export default Banner
