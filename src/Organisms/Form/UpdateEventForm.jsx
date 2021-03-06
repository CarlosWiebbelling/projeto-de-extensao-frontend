import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default ({ handleSubmit }) => (
	<Formik
		initialValues={{ name: '', description: '', tags: '', projectAdmins: '' }}
		validate={values => {
			let errors = {}

			if (!values.name)
			    errors.name = 'Required'

			if (!values.schedule)
				errors.schedule = 'Required'

			if (!values.speaker)
				errors.speaker = 'Required'

			if (!values.attachments)
			    errors.attachments = 'Required'

			return errors
		}}
		onSubmit={(values, { setSubmitting }) => {
			handleSubmit(values)
			setSubmitting(false)
		}}>
		{({ isSubmitting }) => (
			<Form>
				<h4 htmlFor='name'>Nome do Evento</h4>
				<Field className='form form-control' type='text' name='name' />
				<ErrorMessage name='name' component='div' />

				<h4 htmlFor='schedule'>Cronograma do Evento</h4>
				<Field className='form form-control' type='text' name='schedule' />
				<ErrorMessage name='schedule' component='div' />

				<h4 htmlFor='speaker'>Palestrante</h4>
				<Field className='form form-control' type='text' name='speaker' />
				<ErrorMessage name='speaker' component='div' />

				<h4 htmlFor='attachments'>Anexos</h4>
				<Field className='form form-control' type='text' name='attachments' />
				<ErrorMessage name='attachments' component='div' />

				<button
					type='submit'
					className='btn btn-primary btn-login'
					style={{ float: 'right' }}
					disabled={isSubmitting} >
					Atualizar Evento
				</button>

			</Form>
		)}
	</Formik>
)
