import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const EventForm = ({ handleSubmit }) => {
	return (
		<Formik
			initialValues={{
				name: '',
				description: '',
				tags: '',
				projectAdmins: ''
			}}
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
				console.log(values)
				handleSubmit(values)
				setSubmitting(false)
			}}>
			{({ isSubmitting }) => (
				<Form>
					<label htmlFor='name'>Nome do Evento</label>
					<Field className='form form-control' type='text' name='name' />
					<ErrorMessage name='name' component='div' />

					{/* <label htmlFor='project'>Projeto</label>
					<Field className='form form-control' type='text' name='project' />
					<ErrorMessage name='project' component='div' />

					<label htmlFor='schedule'>Cronograma do Evento</label>
					<Field className='form form-control' type='text' name='schedule' />
					<ErrorMessage name='schedule' component='div' />

					<label htmlFor='speaker'>Palestrante</label>
					<Field className='form form-control' type='text' name='speaker' />
					<ErrorMessage name='speaker' component='div' /> */}

					<br />

					<button
						type='submit'
						className='btn btn-primary btn-login'
						style={{ float: 'right' }}
						disabled={isSubmitting} >
						Cadastrar Evento
				</button>
				</Form>
			)}
		</Formik>
	)
}
export default EventForm