import { forwardRef } from 'react'

import styles from './Field.module.scss'
import clsx from 'clsx'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type = 'text', error, ...rest }, ref) => {
		return (
			<div
				className={clsx(styles.field, {
					[styles.errorField]: error,
				})}
			>
				<span>{placeholder}</span>
				<label>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
