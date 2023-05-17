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

export default function BasicCard2() {
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
					Teória a metodika výchovy dospelých
				</Typography>
				<Typography sx={{ fontSize: '14px' }} color='text.secondary'>
					bVDB07 (SK)
				</Typography>
			</CardContent>
			<CardContent>
				<Typography
					sx={{ fontWeight: '700', fontSize: '14px', textAlign: 'right' }}
				>
					5K, LS
				</Typography>
				<Typography
					variant='h5'
					component='div'
					sx={{ fontSize: '14px' }}
					color='text.secondary'
				>
					doc. PaedDr. Marianna Müller de Morais, PhD.
				</Typography>
			</CardContent>
		</Card>
	)
}
