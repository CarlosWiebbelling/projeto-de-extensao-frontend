import React from 'react'
import { useDispatch } from 'react-redux'

import UpdateUserForm from './Form/UpdateUserForm'
import { update } from '../Redux/Actions/Auth'
import ifrsLogo from '../Utils/static/images/ifrs.png'

export default ({}) => {
	const dispatch = useDispatch()
	const handleForm = values => dispatch(update(values))

	return (
		<div className='login'>
			<div className='login-content'>
				<div className='login-header'>
					<img src={ifrsLogo} alt='logo' />
				</div>
				<div className='login-body' style={{ textAlign: 'center' }}>
					<UpdateUserForm
						handleSubmit={values => handleForm(values)}
						style={{ width: '100%' }} />
				</div>
				<hr />
				<div className='login-footer'>
					<h4>Esqueceu sua senha?<a href="https://lmgtfy.com/?q=qual+a+minha+senha%3F&s=g">redefinir</a></h4>
				</div>
			</div>
		</div>
	)
}