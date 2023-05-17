import { FC } from 'react'

import Footer from '@/components/layout/footer/Footer'
import Meta from '@/shared/meta/Meta'

import ProductContainer from './products/ProductContainer'
import About from './about-us/About'
import Contacts from './contacts/Contacts'
import HomeSection from './home-section/HomeSection'
import Banner from './banner/Banner'
import Auth from './auth/Auth'
import Versia from './versia/Versia'
import Header from '@/components/layout/header/Header'
import styles from './Home.module.scss'
const Home: FC = () => {
	return (
		<Meta title='AiS2'>
			<div className={styles.bg}>
				<Header />
				<Banner />
				<Auth />
				<Versia />
			</div>
			{/* <HomeSection /> */}
			{/* <About /> */}
			{/* <ProductContainer /> */}
			{/* <Contacts /> */}
			{/* <Footer /> */}
		</Meta>
	)
}
export default Home
