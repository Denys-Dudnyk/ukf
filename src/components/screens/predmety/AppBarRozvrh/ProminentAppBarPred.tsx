import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/MoreVert'
import { Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LogoutButton from '@/components/ui/LogoutButton/LogoutButton'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './ProminentAppBarPred.module.scss'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: 'flex-start',
	// minHeight: 128,
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	// Override media queries injected by theme.mixins.toolbar
	'@media all': {
		minHeight: 60,
	},
}))
import Container from '@mui/material/Container'
import AdbIcon from '@mui/icons-material/Adb'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import LockResetIcon from '@mui/icons-material/LockReset'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Image from 'next/image'
import logo from '../../../../../public/ais-logo.png'
import logo2 from '../../../../../public/ais-logo2.png'
import Link from 'next/link'

export default function ProminentAppBarPred() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar
			position='fixed'
			sx={{
				backgroundColor: '#0069c8',
				height: { xs: 'auto', md: '65px' },
				padding: { xs: '5px 0' },
			}}
		>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
						<div className={styles.logo}>
							<Link className={styles.unhidden} href={'/ais/apps/student/sk'}>
								<Image src={logo} alt={'Logo'} />
							</Link>
							<Link className={styles.hidden} href={'/ais/apps/student/sk'}>
								<Image src={logo2} alt={'Logo'} />
							</Link>
						</div>
					</Box>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							display: { xs: 'flex', md: 'flex' },
							flexGrow: 1,
							textAlign: 'center',
							alignItems: 'center',
							fontWeight: '700',

							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Moje predmety
					</Typography>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								color='inherit'
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<AccountCircle />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '30px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'center',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							<MenuItem
								onClick={handleCloseUserMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<LockResetIcon />
								</IconButton>
								<p>Zmeniť heslo</p>
								{/* <Typography textAlign='center'></Typography> */}
							</MenuItem>
							<div className='line'> </div>
							<MenuItem
								onClick={handleCloseUserMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<ClearIcon />
								</IconButton>
								<LogoutButton />
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						noWrap
						sx={{
							ml: 2,
							display: { xs: 'none', md: 'flex', sm: 'flex' },
							// flexGrow: 1,
							fontSize: '12.8px',
							textDecoration: 'none',
						}}
					>
						Oleksandr Levkov
					</Typography>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								size='medium'
								color='inherit'
								onClick={handleOpenNavMenu}
								sx={{ p: 0, ml: 2 }}
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
							<div className='line'> </div>

							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<FiberManualRecordIcon />
								</IconButton>
								<p>Nastavenia</p>
								{/* <Typography textAlign='center'></Typography> */}
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<FiberManualRecordIcon />
								</IconButton>
								<p>Kontakt</p>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<FiberManualRecordIcon />
								</IconButton>
								<p>Oznamy</p>
							</MenuItem>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<FiberManualRecordIcon />
								</IconButton>
								<p>Pre verejnosť</p>
							</MenuItem>
							<div className='line'> </div>
							<MenuItem
								onClick={handleCloseNavMenu}
								sx={{ paddingY: '0.25rem', paddingX: '1.5rem' }}
							>
								<IconButton
									size='small'
									color='inherit'
									sx={{ padding: '0', mr: 1 }}
								>
									<ArrowBackIcon />
								</IconButton>
								<a href='/ais2/apps/student/sk'>Univerzálne zobrazenie</a>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
