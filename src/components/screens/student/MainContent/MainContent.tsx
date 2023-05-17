import Grid from '@mui/material/Unstable_Grid2'
import { FC } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Column from './Culumn1/Column'
import SimpleAccordion from './Column2/SimpleAccordion'
const MainContent: FC = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}))

	return (
		<Grid
			container
			sx={{
				flexGrow: 1,
				// mr: '15px',
				// ml: '15px',
				mx: '0 auto',
				mt: '100px',
			}}
		>
			<Grid
				md={2}
				mdOffset={0}
				sx={{
					pr: '15px',
					pl: '15px',
					display: { flex: { xs: 'none' } },
					maxWidth: '16.666667%',
				}}
			>
				{/* <Item>1</Item> */}
			</Grid>
			<Grid
				xs={12}
				md={2}
				mdOffset='auto'
				sx={{
					pr: '15px',
					pl: '15px',
					display: { flex: { xs: '100%', md: '0 0 16.666667%' } },
					maxWidth: { xs: '100%', md: '16.666667%' },
					overflow: 'auto',
					height: { xs: 'none', md: 'calc(100vh - 160px)' },
				}}
			>
				<Column />
			</Grid>
			<Grid
				xs={12}
				md={8}
				mdOffset={0}
				sx={{
					pr: '15px',
					pl: '15px',
					display: { flex: { xs: '100%', md: '0 0 16.666667%' } },
					maxWidth: { xs: '100%', md: '66.666667%' },
					overflow: 'auto',
					height: 'calc(100vh - 160px)',
				}}
			>
				<SimpleAccordion />
			</Grid>

			{/* <Grid
				xs={6}
				xsOffset={3}
				md={2}
				mdOffset={0}
				sx={{
					pr: '15px',
					pl: '15px',
					display: { flex: '0 0 16.666667%' },
					maxWidth: '16.666667%',
				}}
			>
				
			</Grid> */}
		</Grid>
	)
}
export default MainContent
