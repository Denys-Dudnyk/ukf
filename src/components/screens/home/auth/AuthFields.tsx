import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form/field/Field'
import { validateEmail } from '@/shared/validateEmail'

interface IAuthField {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					//required: 'Email is required',
				})}
				placeholder='Používateľ'
				// @ts-ignore
				error={errors.email}
			/>

			<Field
				{...register(
					'password'
					// isPasswordRequired
					// 	? {
					// 			required: 'Password is required',
					// 			minLength: {
					// 				value: 6,
					// 				message: 'Min length must be at least 6 symbols',
					// 			},
					// 	  }
					// 	: {}
				)}
				placeholder='Heslo'
				type='password'
				// @ts-ignore
				error={errors.password}
			/>
		</>
	)
}
export default AuthFields
