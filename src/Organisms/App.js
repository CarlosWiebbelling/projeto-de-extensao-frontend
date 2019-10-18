import React, { useState } from 'react'

import Login from './Login'
import Register from './Register'

export default () => {
	const [login, setLogin] = useState(true)

	return login ? (
		<Login changeMode={() => setLogin(false)} />
	) : (
		<Register changeMode={() => setLogin(true)} />
	)
}