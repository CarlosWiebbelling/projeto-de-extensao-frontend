import React, { useState } from 'react'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

export default () => {
	const [login, setLogin] = useState(true)

	// return <Dashboard />

	return login ? (
		<Login changeMode={() => setLogin(false)} />
	) : (
		<Register changeMode={() => setLogin(true)} />
	)
}