import React from 'react'
import { useDispatch } from 'react-redux'

import ifrsLogo from '../Utils/static/images/ifrs.png'
import LoginForm from './Form/LoginForm'
import { login } from '../Redux/Actions/Auth'

export default props => {
	const dispatch = useDispatch()
	const handleForm = values => dispatch(login(values))

	return (
		<div className='login'>
			<div className='login-content'>
				<div className='login-header'>
					<img src={ ifrsLogo } alt='logo' />
				</div>
				<div className='login-body' style={{ textAlign: 'center' }}>
					<LoginForm
						handleSubmit={ values => handleForm(values) }
						style={{ width: '100%' }} />
				</div>
				<hr />
				<div className='login-footer'>
					<h4>Esqueceu sua senha?<button className="fakeA">redefinir</button></h4>
					<h4>Não possui uma conta?<button className="fakeA" onClick={ props.changeMode }>criar conta</button></h4>
				</div>
			</div>
		</div>
	)
}
