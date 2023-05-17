import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import clsx from 'clsx'

export default function HarmDialog() {
	const [open, setOpen] = React.useState(false)
	const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper')

	const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
		setOpen(true)
		setScroll(scrollType)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const descriptionElementRef = React.useRef<HTMLElement>(null)
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [open])

	return (
		<div>
			{/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
			<button onClick={handleClickOpen('body')}>
				<p>Harmonogram ak. roka</p>
			</button>
			<Dialog
				open={open}
				onClose={handleClose}
				// scroll={scroll}
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'
				sx={{
					// padding: '24px',
					// borderRadius: '4px',
					width: '100%',
					height: '100%',
					minHeight: 'inherit',
					maxHeight: 'inherit',
				}}
			>
				<DialogTitle id='scroll-dialog-title'>
					Harmonogram ak. roka 2022/2023
					<div className='line '></div>
				</DialogTitle>

				<DialogContent dividers={scroll === 'paper'}>
					<DialogContentText
						id='scroll-dialog-description'
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						<ul className='list-disc'>
							<li className='list-disc'>
								Prihlasovanie/odhlasovanie na rozvrh hodín – zimný semester:
								08.07.2022 {'->'} 19.09.2022
							</li>
							<li className='list-disc'>
								Predzápis: 01.09.2022 {'->'} 19.09.2022
								<ul>
									<li>
										študent si môže vytvoriť zápisný list, pridávať a odoberať
										ľubovoľné schválené predmety bez ohľadu na ich kapacitu
										(pokiaľ nie je aktívny Doplňujúci zápis)
									</li>
								</ul>
							</li>
							<li className='list-disc'>
								Doplňujúci zápis: 01.09.2022 {'->'} 19.09.2022
								<ul>
									<li>
										študent si už nemôže vytvoriť zápisný list ani odoberať
										predmety, môže už len pridávať schválené predmety, ktoré
										nemajú naplnenú alebo nastavenú kapacitu
									</li>
								</ul>
							</li>
							<li className='list-disc'>
								Zimný semester: 12.09.2022 {'->'} 10.12.2022
							</li>
							<li className='list-disc'>
								Predzápis: 21.09.2022 {'->'} 25.09.2022 (AI pre prax)
								<ul>
									<li>
										študent si môže vytvoriť zápisný list, pridávať a odoberať
										ľubovoľné schválené predmety bez ohľadu na ich kapacitu
										(pokiaľ nie je aktívny Doplňujúci zápis)
									</li>
								</ul>
							</li>
							<li className='list-disc'>
								Doplňujúci zápis: 21.09.2022 {'->'} 25.09.2022 (AI pre prax)
								<ul>
									<li>
										študent si už nemôže vytvoriť zápisný list ani odoberať
										predmety, môže už len pridávať schválené predmety, ktoré
										nemajú naplnenú alebo nastavenú kapacitu
									</li>
								</ul>
							</li>
							<li className='list-disc'>
								Zimné skúškové obdobie: 12.12.2022 {'->'} 11.02.2023
							</li>
							<li className='list-disc'>
								Prihlasovanie/odhlasovanie na rozvrh hodín – letný semester:
								12.12.2022 {'->'} 19.02.2023
							</li>
							<li className='list-disc'>
								Doplňujúci zápis - letný semester: 09.01.2023 {'->'} 19.02.2023
								<ul>
									<li>
										študent si už nemôže vytvoriť zápisný list ani odoberať
										predmety, môže už len pridávať schválené predmety, ktoré
										nemajú naplnenú alebo nastavenú kapacitu
									</li>
								</ul>
							</li>
							<li className='list-disc'>
								Predzápis - letný semester: 09.01.2023 {'->'} 19.02.2023
								<ul>
									<li>
										študent si môže pridávať a odoberať ľubovoľné schválené
										predmety bez ohľadu na ich kapacitu (pokiaľ nie je aktívny
										Doplňujúci zápis)
									</li>
								</ul>
							</li>
							<li className='list-disc'>
								Letný semester: 13.02.2023 {'->'} 15.04.2023 (Končiaci bakalári
								D -3.roč.)
							</li>
							<li className='list-disc'>
								Letný semester: 13.02.2023 {'->'} 13.05.2023
							</li>
							<li className='list-disc'>
								Letné skúškové obdobie: 17.04.2023 {'->'} 13.05.2023 (Končiaci
								bakalári D -3.roč.)
							</li>

							<li className='list-disc'>
								Letné skúškové obdobie: 15.05.2023 {'->'} 08.07.2023 
							</li>
						</ul>
					</DialogContentText>
				</DialogContent>

				<div className='line '></div>
				<DialogActions>
					<Button
						sx={{
							border: '1px solid currentColor',
							padding: '0 15px',
							lineHeight: '34px',
							color: 'black',
							borderColor: 'rgba(0,0,0,.12)',
							textTransform: 'none',
						}}
						onClick={handleClose}
					>
						Zavrieť
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
