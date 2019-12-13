import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Project = ({ handleSubmit, afterSubmit }) => (
	<Formik
		initialValues={{ name: '', description: '', tags: '', projectAdmins: '' }}
		validate={values => {
			let errors = {}

			if (!values.name)
			    errors.name = 'Required'

			if (!values.description)
				errors.description = 'Required'

			if (!values.tags)
				errors.tags = 'Required'

			if (!values.projectAdmins)
			    errors.projectAdmins = 'Required'

			return errors
		}}
		onSubmit={(values, { setSubmitting }) => {
			handleSubmit(values)
			setSubmitting(false)
			afterSubmit()
		}}>
		{({ isSubmitting }) => (
			<Form>
				<label htmlFor='name'>Nome do projeto</label>
				<Field className='form form-control' type='text' name='name' />
				<ErrorMessage name='name' component='div' />

				<label htmlFor='description'>Description</label>
				<Field className='form form-control' type='text' name='description' />
				<ErrorMessage name='description' component='div' />

				<label htmlFor='tags'>Tags</label>
				<Field className='form form-control' type='text' name='tags' />
				<ErrorMessage name='tags' component='div' />

				<label htmlFor='projectAdmins'>Administradores</label>
				<Field className='form form-control' type='text' name='projectAdmins' />
				<ErrorMessage name='projectAdmins' component='div' />
				<br/>
				
				<button
					type='submit'
					className='btn btn-primary btn-login'
					style={{ float: 'right', marginLeft: '10px' }}
					disabled={isSubmitting} >
					Cadastrar projeto
				</button>

			</Form>
		)}
	</Formik>
)


export default Project
