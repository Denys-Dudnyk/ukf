import { FC } from 'react'
import styles from './TablePred.module.scss'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import RuleIcon from '@mui/icons-material/Rule'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import RadioButtons from '../RadioButtons/RadioButtons'
import BasicCard from './Cards/Card'
import BasicCard2 from './Cards/Card2'
import BasicCard3 from './Cards/Card3'
import BasicCard4 from './Cards/Card4'
import BasicCard5 from './Cards/Card5'
import BasicCard6 from './Cards/Card6'
import BasicCard7 from './Cards/Card7'
import BasicCard8 from './Cards/Card8'
const TablePred: FC = () => {
	return (
		<div className={styles.group}>
			<div className={styles.table}>
				<div className={styles.tablist}>
					<div className={styles.labels}>
						<div className={styles.item}>
							<div className={styles.content}>
								<MenuBookIcon />
								<span>Predmety</span>
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<RuleIcon />
								<span>Skúšky</span>
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<PublishedWithChangesIcon />
								<span>Priebežné hodnotenia</span>
							</div>
						</div>
					</div>
					<div className={styles.checked}></div>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body_content}>
					<div className={styles.radio}>
						<RadioButtons />
					</div>

					<div className={styles.content}>
						<table>
							<tbody>
								<tr>
									<td>
										<div>
											<div>Študijná časť</div>
										</div>
									</td>
								</tr>

								<tr className='text-black font-bold opacity-100 '>
									<td>
										<div>
											<div>Povinné predmety</div>
											<div>
												<span>Kredity</span>: 0/52
											</div>
										</div>
									</td>
								</tr>
								<tr className=' '>
									<td>
										<div>
											<BasicCard />
										</div>
										<div>
											<BasicCard2 />
										</div>
										<div>
											<BasicCard3 />
										</div>
										<div>
											<BasicCard4 />
										</div>
										<div>
											<BasicCard5 />
										</div>
										<div>
											<BasicCard6 />
										</div>
										<div>
											<BasicCard7 />
										</div>
										<div>
											<BasicCard8 />
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
export default TablePred
