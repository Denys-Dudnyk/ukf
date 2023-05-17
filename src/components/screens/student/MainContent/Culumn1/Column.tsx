import { FC } from 'react'
import styles from './Column.module.scss'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ContactlessIcon from '@mui/icons-material/Contactless'
import Link from 'next/link'
import Image from 'next/image'

import user from '../../../../../../public/svg/icon-user.png'
import users from '../../../../../../public/svg/icon-users.png'
import doc from '../../../../../../public/svg/icon-dokumenty.png'
import mess from '../../../../../../public/svg/icon-messenger.png'
import studia from '../../../../../../public/svg/icon-studia.png'
import prog from '../../../../../../public/svg/icon-programy.png'
import zlozka from '../../../../../../public/svg/icon-zlozka-blue.png'
import rozvrh from '../../../../../../public/svg/icon-rozvrh.png'
import calendar from '../../../../../../public/svg/icon-calendar.png'
import nastenka from '../../../../../../public/svg/icon-nastenka.png'
import hodnot from '../../../../../../public/svg/icon-hodnotenie-blue.png'
import hodnot2 from '../../../../../../public/svg/icon-hodnotenie-orange.png'
import check from '../../../../../../public/svg/icon-check-red.png'
import vyhl from '../../../../../../public/svg/icon-vyhladanie.png'
import praca from '../../../../../../public/svg/icon-praca.png'

const Column: FC = () => {
	const ruDate = new Intl.DateTimeFormat('ru', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	})
		.format(new Date())
		.replace(/(\s?\г\.?)/, '')

	const MenDate = new Intl.DateTimeFormat('sk', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	})
		.format(new Date())
		.replace(/(\s?\г\.?)/, '')

	return (
		<div className={styles.column}>
			<h6 className={styles.card_header}>Oleksandr Levkov</h6>
			<div className={styles.card_body}>
				<div>IDO: 321929</div>
				<br />
				<span>Posledné prihlásenie</span>
				<br />
				{ruDate}
				<br />
				194.160.208.10
				<div>
					<br />
					<span>Dnes je</span>: <b>{MenDate}</b>
				</div>
				<div>
					<span>Meniny má</span>: <b>Monika</b>
				</div>
			</div>

			<div className={styles.mt3}>
				<h6 className={styles.card_header}>
					<ArrowCircleRightIcon fontSize='medium' />
					&nbsp;
					<span>Aplikácie</span>
				</h6>
				<div className={styles.card_body2}>
					<div>
						<Link href={'#'}>
							<Image src={user} alt='user' width={20} height={20} />
							&nbsp;Osobné údaje
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={user} alt='user' width={20} height={20} />
							&nbsp;Osoba v AiS2
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={users} alt='user' width={20} height={20} />
							&nbsp;Správa používateľa
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={doc} alt='user' width={20} height={20} />
							&nbsp;Zverejnené dokumenty
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={mess} alt='user' width={20} height={20} />
							&nbsp;Správy
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={studia} alt='user' width={20} height={20} />
							&nbsp;Prehľad štúdií
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={prog} alt='user' width={20} height={20} />
							&nbsp;Študijné programy
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={zlozka} alt='user' width={20} height={20} />
							&nbsp;Register predmetov
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={rozvrh} alt='user' width={20} height={20} />
							&nbsp;Rozvrhy hodín
						</Link>
					</div>{' '}
					<div>
						<Link href={'#'}>
							<Image src={calendar} alt='user' width={20} height={20} />
							&nbsp;Dátumové intervaly
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={nastenka} alt='user' width={20} height={20} />
							&nbsp;Elektronická nástenka
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={hodnot} alt='user' width={20} height={20} />
							&nbsp;Prihlášky uchádzača
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={hodnot2} alt='user' width={20} height={20} />
							&nbsp;Návratky uchádzača
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={check} alt='user' width={20} height={20} />
							&nbsp;Prihlasovanie na skúšky
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={vyhl} alt='user' width={20} height={20} />
							&nbsp;Vyhľadávanie osôb
						</Link>
					</div>
					<div>
						<Link href={'#'}>
							<Image src={praca} alt='user' width={20} height={20} />
							&nbsp;Absolventi
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.mt33}>
				<h6 className={styles.card_header}>
					<ContactlessIcon fontSize='medium' />
					&nbsp;
					<span>Diskusia</span>
				</h6>
				<div className={styles.card_body}></div>
			</div>
		</div>
	)
}
export default Column
