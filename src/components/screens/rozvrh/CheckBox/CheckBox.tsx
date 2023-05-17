import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function CheckBox() {
	return (
		<FormGroup>
			<FormControlLabel
				control={<Checkbox defaultChecked />}
				label='Zobraziť aj neaktuálne'
				sx={{
					'& .css-ahj2mt-MuiTypography-root': {
						fontSize: '80%',
					},
					'& .css-zun73v.Mui-checked': {
						color: '#ff4081',
					},
				}}
			/>
		</FormGroup>
	)
}
