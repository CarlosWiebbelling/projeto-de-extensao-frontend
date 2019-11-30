import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default ({ handleSubmit }) => (
	<Formik
		initialValues={{ name: '', description: '', tags: '', projectAdmins: '' }}
		validate={values => {
			let errors = {}

			// if (!values.name)
			//     errors.name = 'Required'

			// if (!values.description)
			// 	errors.description = 'Required'

			// if (!values.tags)
			// 	errors.tags = 'Required'

			// if (!values.projectAdmins)
			//     errors.projectAdmins = 'Required'

			return errors
		}}
		onSubmit={(values, { setSubmitting }) => {
			handleSubmit(values)
			setSubmitting(false)
		}}>
		{({ isSubmitting }) => (
			<Form>
				<h4 htmlFor='name'>Nome do Evento</h4>
				<Field className='form' type='text' name='name' />
				<ErrorMessage name='name' component='div' />

				<h4 htmlFor='project'>Projeto</h4>
				<Field className='form' type='text' name='project' />
				<ErrorMessage name='project' component='div' />

				<h4 htmlFor='schedule'>Cronograma do Evento</h4>
				<Field className='form' type='text' name='schedule' />
				<ErrorMessage name='schedule' component='div' />

				<h4 htmlFor='speaker'>Palestrante</h4>
				<Field className='form' type='text' name='speaker' />
				<ErrorMessage name='speaker' component='div' />

				<button
					type='submit'
					className='btn-login'
					disabled={isSubmitting} >
					Cadastrar Evento
				</button>

			</Form>
		)}
	</Formik>
)
