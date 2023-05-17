import { FC } from 'react'
import styles from './Table.module.scss'
const Table: FC = () => {
	return (
		<div className={styles.table}>
			<table>
				<thead>
					<tr>
						<th>Deň</th>
						<th>Obdobie</th>
						<th>Čas</th>
						<th>Skratka</th>
						<th>Názov</th>
						<th>Miestnosť</th>
						<th>Vyučujúci</th>
						<th>Poznámka</th>
					</tr>
				</thead>
			</table>
		</div>
	)
}
export default Table
