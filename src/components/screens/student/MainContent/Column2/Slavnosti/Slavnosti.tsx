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

const SlavnostiList: FC = () => {
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
					Slávnosti
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					padding: '0 24px ',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
				}}
			></AccordionDetails>
			<div className='mx-6 pb-4'>
				<div className='line2  '> </div>
				<a className='text-sm text-textBlue font-bold' href='#'>
					Prihlásiť sa na slávnosť
				</a>
			</div>
		</Accordion>
	)
}
export default SlavnostiList
