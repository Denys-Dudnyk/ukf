import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const bull = (
	<Box
		component='span'
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
)

export default function BasicCard3() {
	return (
		<Card
			sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
		>
			<CardContent>
				<Typography
					variant='h5'
					component='div'
					sx={{ fontWeight: '700', fontSize: '14px' }}
				>
					Ďalšie profesijné vzdelávanie dospelých - teória a prax
				</Typography>
				<Typography sx={{ fontSize: '14px' }} color='text.secondary'>
					bVDB08 (SK)
				</Typography>
			</CardContent>
			<CardContent>
				<Typography
					sx={{ fontWeight: '700', fontSize: '14px', textAlign: 'right' }}
				>
					8K, LS
				</Typography>
				<Typography
					variant='h5'
					component='div'
					sx={{ fontSize: '14px' }}
					color='text.secondary'
				>
					doc. PhDr. Dominika Temiaková, PhD., prof. PhDr. Gabriela Petrová,
					CSc.
				</Typography>
			</CardContent>
		</Card>
	)
}
