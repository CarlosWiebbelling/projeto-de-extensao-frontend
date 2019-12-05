import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Project = ({ handleSubmit }) => (
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
				<h4 htmlFor='name'>Nome do projeto</h4>
				<Field className='form' type='text' name='name' />
				<ErrorMessage name='name' component='div' />

				<h4 htmlFor='description'>description</h4>
				<Field className='form' type='text' name='description' />
				<ErrorMessage name='description' component='div' />

				<h4 htmlFor='tags'>tags</h4>
				<Field className='form' type='text' name='tags' />
				<ErrorMessage name='tags' component='div' />

				<h4 htmlFor='projectAdmins'>projectAdmins</h4>
				<Field className='form' type='text' name='projectAdmins' />
				<ErrorMessage name='projectAdmins' component='div' />
				<br/>
				<button
					type='submit'
					className='btn-login'
					disabled={isSubmitting} >
					Cadastrar projeto
				</button>

			</Form>
		)}
	</Formik>
)


export default Project
