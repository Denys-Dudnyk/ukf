import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function RadioButtons() {
	return (
		<FormControl sx={{ display: { md: 'flex', xs: 'none', sm: 'flex' } }}>
			<RadioGroup
				row
				aria-labelledby='demo-row-radio-buttons-group-label'
				name='row-radio-buttons-group'
				defaultValue='Celý rok'
			>
				<FormControlLabel
					value='Celý rok'
					control={<Radio />}
					label='Celý rok'
					sx={{
						mr: '3rem',
						'& .css-1a5icme.Mui-checked': {
							color: '#ff4081',
						},
					}}
				/>
				<FormControlLabel
					value='Zimný semester'
					control={<Radio />}
					label='Zimný semester'
					sx={{
						mr: '3rem',
						'& .css-1a5icme.Mui-checked': {
							color: '#ff4081',
						},
					}}
				/>
				<FormControlLabel
					value='Letný semester'
					control={<Radio />}
					label='Letný semester'
					sx={{
						'& .css-1a5icme.Mui-checked': {
							color: '#ff4081',
						},
					}}
				/>
			</RadioGroup>
		</FormControl>
	)
}
