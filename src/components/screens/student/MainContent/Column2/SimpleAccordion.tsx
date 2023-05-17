import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ScheduleIcon from '@mui/icons-material/Schedule'
import Badge from '@mui/material/Badge'
import { alignProperty } from '@mui/material/styles/cssUtils'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import styles from './SimpleAccordion.module.scss'
import { Button } from '@mui/material'
import ZapisnyList from './ZapisnyList/ZapisnyList'
import ZaverList from './ZaverecnePracy/Zaver'
import StatList from './StatneSkusky/Statne'
import SlavnostiList from './Slavnosti/Slavnosti'
import Link from 'next/link'
export default function SimpleAccordion() {
	return (
		<div className='mt-4'>
			<Accordion
				sx={{
					// display: { flex: '0 0 66.666667%' },
					maxWidth: { xs: '100%', md: '65.656667%' },
					borderTopLeftRadius: '15px !important',
					borderTopRightRadius: '15px !important',
					borderRadius: '15px !important',
					':before': {
						display: 'none',
					},
					boxShadow: '2px 2px 10px lightgray !important',
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
					sx={{
						padding: '0 24px',
					}}
				>
					<Typography color='#555555' fontWeight={'700'} fontSize={'1rem'}>
						Novinka
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{ padding: '0 24px 16px', color: '#0069c8 !important' }}
				>
					<iframe
						width='100%'
						height='315px'
						src='https://www.youtube.com/embed/aUEBuxoY6G4?rel=0'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					></iframe>
					<hr className='line2' />
					<div className='flex justify-end'>
						<div className='mr-4'>
							<b>
								<a href='#'>Viac nezobrazovať</a>
							</b>
						</div>
					</div>
				</AccordionDetails>
			</Accordion>

			<Accordion
				sx={{
					// display: { flex: '0 0 66.666667%' },
					maxWidth: { xs: '100%', md: '65.656667%' },

					borderTopLeftRadius: '15px !important',
					borderTopRightRadius: '15px !important',
					borderRadius: '15px !important',
					':before': {
						display: 'none',
					},
					mt: '1rem',
					boxShadow: '2px 2px 10px lightgray !important',
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
					sx={{
						padding: '0 24px',
					}}
				>
					<Typography color='#555555' fontWeight={'700'} fontSize={'1rem'}>
						Dotazníky
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '0 24px 16px' }}>
					<a className='text-sm text-textBlue font-bold' href='#'>
						Hodnotenie vzdelávania a učiteľov študentmi ZS 2022/23
					</a>

					<div className='text-sm'>
						<span>Obdobie vypĺňania</span>: 13. 2. 2023&nbsp;
						<span className='text-xs text-gray-500'>
							&nbsp;
							<ScheduleIcon
								sx={{
									fontSize: '12px',
									width: '14px',
									height: '24px',
								}}
							/>
							08:55&nbsp;
						</span>
						&nbsp;&nbsp;-&nbsp;&nbsp; 13. 6. 2023&nbsp;
						<span className='text-xs text-gray-500'>
							&nbsp;
							<ScheduleIcon
								sx={{
									fontSize: '12px',
									width: '14px',
									height: '24px',
								}}
							/>
							23:59&nbsp;
						</span>
					</div>
					<div className='text-sm'>
						<span>rozpracovaný</span>: Nie,&nbsp;
						<span>ukončený</span>: Nie,
					</div>
				</AccordionDetails>
			</Accordion>

			<Accordion
				sx={{
					// display: { flex: '0 0 66.666667%' },
					maxWidth: { xs: '100%', md: '65.656667%' },

					borderTopLeftRadius: '15px !important',
					borderTopRightRadius: '15px !important',
					borderRadius: '15px !important',
					':before': {
						display: 'none',
					},
					mt: '1rem',
					boxShadow: '2px 2px 10px lightgray !important',
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
					sx={{
						padding: '0 24px',
					}}
				>
					<Typography color='#555555' fontWeight={'700'} fontSize={'1rem'}>
						Nové správy
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '0 24px 16px' }}>
					<div className='text-sm mb-4'>
						Správy o predpisoch platieb
						<Badge badgeContent={1} color='primary' sx={{ ml: '15px' }}></Badge>
					</div>
					<div className='text-sm mb-4'>
						Správy o platbách
						<Badge badgeContent={2} color='primary' sx={{ ml: '15px' }}></Badge>
					</div>
					<div className='text-sm mb-4'>
						Správy o hodnoteniach predmetov
						<Badge badgeContent={3} color='primary' sx={{ ml: '15px' }}></Badge>
					</div>
					<div className='text-sm mb-4'>
						Správy o termínoch hodnotenia
						<Badge
							badgeContent={24}
							color='primary'
							sx={{ ml: '15px' }}
						></Badge>
					</div>
					<div className='text-sm'>
						Správy o dokumentoch
						<Badge
							badgeContent={24}
							color='primary'
							sx={{ ml: '15px' }}
						></Badge>
					</div>
					<hr className='line3 ' />
					<div className=''>
						<a href='#' className='text-sm text-textBlue font-bold'>
							Otvoriť aplikáciu "Správy"
						</a>
					</div>
				</AccordionDetails>
			</Accordion>

			<div className={styles.btn_rozvrh}>
				<Link href={'/ais/apps/rozvrh/sk/zoznam'}>
					<div className={styles.in}>
						<div>Môj rozvrh, vyhľadávanie rozvrhu</div>
						<button>
							<span className={styles.icon}>
								<CalendarTodayIcon />
							</span>
							{/* <span className={styles.ripple}></span> */}
						</button>
					</div>
				</Link>
			</div>

			<Accordion
				sx={{
					// display: { flex: '0 0 66.666667%' },
					padding: '12px 0',
					maxWidth: { xs: '100%', md: '65.656667%' },

					borderTopLeftRadius: '15px !important',
					borderTopRightRadius: '15px !important',
					borderRadius: '15px !important',
					':before': {
						display: 'none',
					},
					mt: '1rem',
					boxShadow: '2px 2px 10px lightgray !important',
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
					sx={{
						padding: '0 24px',
						// margin: ' 24px',
						// bgcolor: '#0069c8',
					}}
				>
					<Typography color='#555555' fontWeight={'500'} fontSize={'1rem'}>
						1zVDB22b - vzdelávanie dospelých a bezpečnosť práce (2022/2023)
					</Typography>
				</AccordionSummary>

				<AccordionDetails sx={{ padding: '0 24px 16px' }}>
					<ZapisnyList />
					<ZaverList />
					<StatList />
					<SlavnostiList />
				</AccordionDetails>
			</Accordion>
		</div>
	)
}
