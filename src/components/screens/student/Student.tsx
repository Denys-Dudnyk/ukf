import { FC } from 'react'

import Meta from '@/shared/meta/Meta'
import LogoutButton from '@/components/ui/LogoutButton/LogoutButton'
import ProminentAppBar from './AppBar/ProminentAppBar'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'

const Student: FC = () => {
	return (
		<Meta title='Študent'>
			<ProminentAppBar />
			<MainContent />
			<Footer />
			{/* <HomeSection /> */}
			{/* <About /> */}
			{/* <ProductContainer /> */}
			{/* <Contacts /> */}
			{/* <Footer /> */}
		</Meta>
	)
}
export default Student
