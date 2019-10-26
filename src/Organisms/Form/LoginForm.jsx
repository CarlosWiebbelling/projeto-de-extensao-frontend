import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Login = ({ handleSubmit }) => (
	<Formik
		initialValues={{ email: '', password: '' }}
		validate={values => {
			let errors = {}

			if (!values.email)
				errors.email = 'Required'

			else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
				errors.email = 'Invalid email address'

			return errors
		}}
		onSubmit={(values, { setSubmitting }) => {
			handleSubmit(values)
			setSubmitting(false)
		}}>
		{({ isSubmitting }) => (
			<Form>
				<h4 htmlFor='email'>Email</h4>
				<Field className='form' type='email' name='email' />
				<ErrorMessage name='email' component='div' />

				<h4 htmlFor='password'>Senha</h4>
				<Field className='form' type='password' name='password' style={{ marginBottom: '25px' }} />
				<ErrorMessage name='password' component='div' />

				<div className='row'>
					<div className='col-9'>
					</div>
					<div className='col-3'>
						<button
							type='submit'
							className='btn btn-login'
							disabled={isSubmitting}>
							Entrar
							</button>
					</div>
				</div>
			</Form>
		)}
	</Formik>
)


export default Login
