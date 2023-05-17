import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const currencies = [
	{
		value: '23',
		label: '2023/2024',
	},
	{
		value: '22',
		label: '2022/2023',
	},
	{
		value: '21',
		label: '2021/2022',
	},
	{
		value: '20',
		label: '2020/2021',
	},
]

export default function SelectTextFields() {
	return (
		<Box
			component='form'
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
				'& .css-v4u5dn-MuiInputBase-root-MuiInput-root': {
					fontSize: '150%',
					fontWeight: 'bold',
					color: 'rgb(0, 75, 190)',
				},
				'& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before': {
					borderBottom: '1px solid transparent',
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
