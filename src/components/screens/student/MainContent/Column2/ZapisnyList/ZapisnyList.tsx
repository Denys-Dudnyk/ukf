import { FC, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Box from '@mui/material/Box'

import IconButton from '@mui/material/IconButton'

import { Menu, MenuItem } from '@mui/material'

import Tooltip from '@mui/material/Tooltip'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import HarmDialog from '@/components/ui/Dialog/HarmDialog'

const ZapisnyList: FC = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<Accordion
			sx={{
				// display: { flex: '0 0 66.666667%' },

				// maxWidth: '65.656667%',
				borderTopLeftRadius: '15px !important',
				borderTopRightRadius: '15px !important',
				borderRadius: '15px !important',
				':before': {
					display: 'none',
				},
				// mt: '1rem',
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
					Zápisné listy
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					padding: '0 24px ',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
				}}
			>
				<div>
					<a
						className='text-sm text-textBlue font-bold'
						href='/ais/apps/student-predmety/sk'
					>
						Moje predmety v 2022/2023 (1zVDB22b)
					</a>
					<div className='text-sm '>
						<span className=' font-bold'>Dátum zápisu</span>: 1. 9. 2022&nbsp;
					</div>
					<div className='text-sm'>
						<span>Zápis bol potvrdený študijným oddelením</span>
					</div>
					<br />
					<div className='text-sm'>
						<span className=' font-bold'>Elektronický zápis</span>: vytvorený
						potvrdený dňa : 21. 7. 2022
					</div>
				</div>

				<div>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								color='inherit'
								onClick={handleOpenNavMenu}
								sx={{ p: 0, fontSize: '10px' }}
							>
								<MoreVertIcon />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '30px' }}
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
						>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{
									paddingX: '0 16px',
									color: 'rgba(0,0,0,.87)',
									height: '48px',
									lineHeight: '48px',
								}}
							>
								<IconButton
									size='small'
									sx={{ padding: '0', mr: '16px', color: 'rgba(0,0,0,.54)' }}
								>
									<FiberManualRecordIcon
										sx={{ width: '20px', height: '20px' }}
									/>
								</IconButton>
								{/* <p className='text-sm'>Harmonogram ak. roka</p> */}
								<HarmDialog />
								{/* <Typography textAlign='center'></Typography> */}
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{
									paddingX: '0 16px',
									color: 'rgba(0,0,0,.87)',
									height: '48px',
									lineHeight: '48px',
								}}
							>
								<IconButton
									sx={{ padding: '0', mr: '16px', color: 'rgba(0,0,0,.54)' }}
								>
									<FiberManualRecordIcon
										sx={{ width: '20px', height: '20px' }}
									/>
								</IconButton>
								<p className='text-sm'>Odobrať zápisný list</p>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{
									paddingX: '0 16px',
									color: 'rgba(0,0,0,.87)',
									height: '48px',
									lineHeight: '48px',
								}}
							>
								<IconButton
									size='small'
									sx={{ padding: '0', mr: '16px', color: 'rgba(0,0,0,.54)' }}
								>
									<FiberManualRecordIcon
										sx={{ width: '20px', height: '20px' }}
									/>
								</IconButton>
								<p className='text-sm'>Tlač dokumentov</p>
							</MenuItem>
						</Menu>
					</Box>
				</div>
			</AccordionDetails>
			<div className='mx-6 pb-4'>
				<div className='line2  '> </div>
				<a className='text-sm text-textBlue font-bold' href='#'>
					Vytvoriť zápisný list
				</a>
			</div>
		</Accordion>
	)
}
export default ZapisnyList
