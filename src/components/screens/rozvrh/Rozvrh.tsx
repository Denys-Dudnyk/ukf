import { FC } from 'react'
import styles from './Rozvrh.module.scss'
import Meta from '@/shared/meta/Meta'

import ProminentAppBarRozvrh from './AppBarRozvrh/ProminentAppBarRozvrh'
import SelectTextFields from './SelectTextFields/SelectTextFields'
import RadioButtons from './RadioButtons/RadioButtons'
import CheckBox from './CheckBox/CheckBox'
import Table from './Table/Table'
import Footer from '../student/Footer/Footer'

const Rozvrh: FC = () => {
	return (
		<Meta title='Rozvrh'>
			<ProminentAppBarRozvrh />
			<section className={styles.rozvrh}>
				<div className={styles.rozvrhContainer}>
					<div className={styles.title}>
						<div className={styles.titleCon}>
							<div className={styles.user}>Oleksandr Levkov</div>
							<div className={styles.form_field}>
								<SelectTextFields />
							</div>
						</div>
					</div>

					<div className={styles.radioButtons}>
						<RadioButtons />
					</div>

					<div className={styles.checkbox}>
						<CheckBox />
					</div>
					<Table />
				</div>
				<Footer />
			</section>
		</Meta>
	)
}
export default Rozvrh
