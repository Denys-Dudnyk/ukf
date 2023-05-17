import { createAsyncThunk } from '@reduxjs/toolkit'

import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/api/api.helper'

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)

			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* login */
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)

			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

/* logout */
export const logout = createAsyncThunk('/logout', async (_, thunkApi) => {
	await AuthService.logout()
})

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
