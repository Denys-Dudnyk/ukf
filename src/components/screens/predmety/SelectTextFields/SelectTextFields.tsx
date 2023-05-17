import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const currencies = [
	{
		value: '22',
		label: '2022/2023 - 1zVDB22b - vzdelávanie dospelých a bezpečnosť práce',
	},
]

export default function SelectTextFields() {
	return (
		<Box
			component='form'
			sx={{
				'& .MuiTextField-root': { m: 1, width: '85%' },
				'& .css-v4u5dn-MuiInputBase-root-MuiInput-root': {
					// fontSize: '150%',
					// fontWeight: 'bold',
					color: '#000',
					// width: '100%',
					whiteSpace: ' nowrap',
				},
				'& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before': {
					borderBottom: '1px solid  rgba(0,0,0,.42)',
				},
			}}
			noValidate
			autoComplete='off'
		>
			<div>
				<TextField
					id='standard-select-currency'
					select
					label=''
					defaultValue='22'
					variant='standard'
				>
					{currencies.map(option => (
						<MenuItem
							key={option.value}
							value={option.value}
							sx={
								{
									// fontSize: '2rem',
								}
							}
						>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</div>
		</Box>
	)
}
