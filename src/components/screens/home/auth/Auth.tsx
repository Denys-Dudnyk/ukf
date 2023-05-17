import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'
import Meta from '@/shared/meta/Meta'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import ais from '/public/ais.png'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		// <Meta title='Auth'>
		<section className={styles.wrapper}>
			<div className={styles.authContainer}>
				<div className={styles.leftSide}>
					<div className={styles.snip}>
						<div className={styles.title}>Prihlásenie</div>
						<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							<AuthFields
								formState={formState}
								register={registerInput}
								isPasswordRequired
							/>

							<div className={styles.buttons}>
								<Button
									type='submit'
									onClick={() => setType('login')}
									disabled={isLoading}
								>
									Prihlásiť
								</Button>
								{/* <Button
									type='submit'
									onClick={() => setType('register')}
									disabled={isLoading}
								>
									Register
								</Button> */}
							</div>
						</form>
					</div>
					<div className={styles.snip}>
						<div className={styles.title}>Test prehliadača</div>
						<p>
							Pomocou tohoto testu môžete overiť správnosť nastavení vášho
							prehliadača pre prácu s AiS2.
						</p>
						<div className={styles.buttonss}>
							<Button
								onClick={() =>
									(location.href =
										'https://ais2.ukf.sk/ais/checkSettings/settings.jsp')
								}
								disabled={isLoading}
							>
								Spustiť test
							</Button>
						</div>
					</div>

					<div className={styles.snip}>
						<div className={styles.title}>Projekt AiS2</div>
						<p>
							Projekt AiS2 bol v rokoch 2005-2007 podporovaný MŠ SR formou
							centrálneho rozvojového projektu. Viac informácií je dostupných na
							Portáli AiS2.
						</p>
						<div className={styles.buttonf}>
							<Button
								disabled={isLoading}
								onClick={() =>
									(location.href = 'https://www.ais2.sk/xwiki/bin/view/Domov/')
								}
							>
								Informačný portál AiS2
							</Button>
						</div>
						<div className={styles.button}>
							<Button
								disabled={isLoading}
								onClick={() =>
									(location.href = 'https://www.youtube.com/@AiS2')
								}
							>
								YouTube kanál AiS2
							</Button>
						</div>
					</div>
				</div>

				<div className={styles.rightSide}>
					<div className={styles.logo}></div>
					{/* <Image
						alt={'UKF'}
						src={ais}
						width={467}
						height={402}
						draggable={false}
						priority
					/> */}
				</div>
			</div>
		</section>
		// </Meta>
	)
}
export default Auth
