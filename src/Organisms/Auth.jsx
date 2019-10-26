import React, { useState } from 'react'

import Login from './Login'
import Register from './Register'

const Auth = props => {
    const [login, setLogin] = useState(true)
    const changeMode = () => setLogin(!login)

    return login ? <Login changeMode={ changeMode } /> : <Register changeMode={ changeMode } />
}

export default Auth