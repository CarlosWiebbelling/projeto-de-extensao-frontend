import React from 'react'
import { useSelector } from 'react-redux'

import Dashboard from './Dashboard'
import Auth from './Auth'

export default () => {
	const token = useSelector(state => state.Auth.token)
	return token === null ? <Auth /> : <Dashboard /> 
}