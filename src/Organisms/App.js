import React from 'react'
import { useSelector } from 'react-redux'

import Project from '../Pages/Projects'
import Auth from './Auth'
import { jwtValidator } from '../Helpers/JWT'

export default () => {
	const token = useSelector(state => state.Auth.token)

	return token && jwtValidator(token) ? <Project /> : <Auth />
}