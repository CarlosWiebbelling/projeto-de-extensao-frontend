import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Project = ({ handleSubmit }) => (
	<Formik
		initialValues={{ email: '', level: '' }}

		validate={values => {
			let errors = {}
			return errors
		}}

		onSubmit={(values, { setSubmitting }) => {
			handleSubmit(values)
			setSubmitting(false)
		}}>

		{({ isSubmitting }) => (
			<Form>
				<label htmlFor='name'>Email do usuário</label>
				<Field className='form form-control' type='email' name='email' />
				<ErrorMessage name='name' component='div' />

				<label htmlFor='description'>Level</label>
				<Field
					className='form form-control'
					type='number'
					name='level'
					style={{ marginBottom: '25px' }}
				/>
				<br />

				<button
					type='submit'
					className='btn btn-primary btn-login'
					style={{ float: 'right', marginLeft: '10px' }}
					disabled={isSubmitting} >
					Atualizar usuário
				</button>

			</Form>
		)}
	</Formik>
)


export default Project
