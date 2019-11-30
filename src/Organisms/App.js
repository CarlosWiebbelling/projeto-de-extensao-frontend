import React from 'react'
import { useSelector } from 'react-redux'

import Project from '../Pages/Projects'
import Auth from './Auth'

export default () => {
	const token = useSelector(state => state.Auth.token)
	return token === null ? <Project /> : <Auth />
	// return token === null ? <Auth /> : <Project /> 
}