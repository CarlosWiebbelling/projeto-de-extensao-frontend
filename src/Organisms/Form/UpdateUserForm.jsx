import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default ({ handleSubmit, afterSubmit }) => (
	<Formik
		initialValues={{
			name: '',
			email: '',
			password: '',
			confirmPassword: ''
		}}
		validate={values => {
			let errors = {}

			if (!values.name)
				errors.name = 'Por favor, insira um nome de usuário'
			else if (values.name.length <= 3)
				errors.name =
					'O nome de usuário deve conter mais que 3 caracteres'

			if (!values.email) errors.email = 'Por favor, insira um email'
			else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			)
				errors.email = 'Por favor, insira um email válido'

			if (!values.currentPassword)
				errors.currentPassword = 'Por favor, confirme sua senha'

			// if (!values.confirmPassword)
			// 	errors.confirmPassword = 'Por favor, confirme sua senha'
			// else if (values.confirmPassword !== values.password)
			// 	errors.confirmPassword = 'A senha difere da confirmação'

			return errors
		}}
		onSubmit={(values, { setSubmitting }) => {
			handleSubmit(values)
			setSubmitting(false)
			afterSubmit()
		}}>
		{({ isSubmitting }) => (
			<Form>
				<label htmlFor='name'>Nome</label>
				<Field className='form form-control' type='text' name='name' />
				<ErrorMessage
					name='name'
					component='div'
					className='error-msg'
				/>

				<label htmlFor='email'>Email</label>
				<Field
					className='form form-control'
					type='email'
					name='email'
				/>
				<ErrorMessage
					name='email'
					component='div'
					className='error-msg'
				/>

				<label htmlFor='enrollment'>Matrícula</label>
				<Field
					className='form form-control'
					type='text'
					name='enrollment'
				/>
				<ErrorMessage
					name='enrollment'
					component='div'
					className='error-msg'
				/>

				<label htmlFor='currentPassword'>Senha Atual</label>
				<Field
					className='form form-control'
					type='password'
					name='currentPassword'
					style={{ marginBottom: '25px' }}
				/>
				<ErrorMessage
					name='currentPassword'
					component='div'
					className='error-msg'
				/>

				<label htmlFor='newPassword'>Nova Senha</label>
				<Field
					className='form form-control'
					type='password'
					name='newPassword'
					style={{ marginBottom: '25px' }}
				/>
				<ErrorMessage
					name='newPassword'
					component='div'
					className='error-msg'
				/>

				<label htmlFor='confirmPassword'>Confirmar Nova Senha</label>
				<Field
					className='form form-control'
					type='password'
					name='confirmPassword'
					style={{ marginBottom: '25px' }}
				/>
				<ErrorMessage
					name='confirmPassword'
					component='div'
					className='error-msg'
				/>

				<label htmlFor='level'>Nível de Acesso</label>
				<Field
					className='form form-control'
					type='number'
					name='level'
					style={{ marginBottom: '25px' }}
				/>
				<ErrorMessage
					name='level'
					component='div'
					className='error-msg'
				/>

				<br />

				<button
					type='submit'
					className='btn btn-primary btn-login'
					disabled={isSubmitting}
                    style={{ float: 'right', marginLeft: '15px'}}>
					Atualizar
				</button>

				<button
					type='submit'
					className='btn btn-danger'
					disabled={isSubmitting}
                    style={{ float: 'right' }}>
					Deletar Usuário
				</button>
                <br/>
                <br/>
			</Form>
		)}
	</Formik>
)
