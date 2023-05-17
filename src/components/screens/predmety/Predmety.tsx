import { FC } from 'react'
import styles from './Predmety.module.scss'
import Meta from '@/shared/meta/Meta'

import Footer from '../student/Footer/Footer'
import ProminentAppBarPred from './AppBarRozvrh/ProminentAppBarPred'
import SelectTextFields from './SelectTextFields/SelectTextFields'
import TablePred from './TablePred/TablePred'

const Predmety: FC = () => {
	return (
		<Meta title='Rozvrh'>
			<ProminentAppBarPred />
			<section className={styles.rozvrh}>
				<div className={styles.rozvrhContainer}>
					<div className={styles.title}>
						<div className={styles.titleCon}>
							<div className={styles.form_field}>
								<SelectTextFields />
							</div>
						</div>
					</div>

					<TablePred />

					{/* <div className={styles.radioButtons}>
						<RadioButtons />
					</div> */}
				</div>
				<Footer />
			</section>
		</Meta>
	)
}
export default Predmety
