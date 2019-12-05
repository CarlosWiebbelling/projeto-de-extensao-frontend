import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

export default ({ handleSubmit }) => (
    <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        validate={values => {
            let errors = {}

            if (!values.name)
                errors.name = "Por favor, insira um nome de usuário"

            else if (values.name.length <= 3)
                errors.name = "O nome de usuário deve conter mais que 3 caracteres"

            if (!values.email)
                errors.email = "Por favor, insira um email"

            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                errors.email = "Por favor, insira um email válido"

            if (!values.password)
                errors.password = "Por favor, insira uma senha"

            else if (values.password.length < 8)
                errors.password = "A senha deve conter no mínimo 8 caracteres"

            if (!values.confirmPassword)
                errors.confirmPassword = "Por favor, confirme sua senha"

            else if (values.confirmPassword !== values.password)
                errors.confirmPassword = "A senha difere da confirmação"

            return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
            setSubmitting(false)
        }}>
        {({ isSubmitting }) => (
            <Form>
                <h4 htmlFor="name">Nome</h4>
                <Field className="form" type="text" name="name" />
                <ErrorMessage name='name' component='div' className='error-msg' />

                <h4 htmlFor="email">Email</h4>
                <Field className="form" type="email" name="email" />
                <ErrorMessage name='email' component='div' className='error-msg' />

                <h4 htmlFor="enrollment">Matrícula</h4>
                <Field className="form" type="text" name="enrollment" />
                <ErrorMessage name='enrollment' component='div' className='error-msg' />

                <h4 htmlFor="currentPassword">Senha Atual</h4>
                <Field className="form" type="password" name="currentPassword" style={{ marginBottom: "25px" }} />
                <ErrorMessage name='currentPassword' component='div' className='error-msg' />

                <h4 htmlFor="newPassword">Nova Senha</h4>
                <Field className="form" type="password" name="newPassword" style={{ marginBottom: "25px" }} />
                <ErrorMessage name='newPassword' component='div' className='error-msg' />

                <h4 htmlFor="confirmPassword">Confirmar Nova Senha</h4>
                <Field className="form" type="password" name="confirmPassword" style={{ marginBottom: "25px" }} />
                <ErrorMessage name='confirmPassword' component='div' className='error-msg' />

                <h4 htmlFor="level">Nível de Acesso</h4>
                <Field className="form" type="number" name="level" style={{ marginBottom: "25px" }} />
                <ErrorMessage name='level' component='div' className='error-msg' />

                <br/>
                
                <button type="submit" className="btn btn-primary btn-login" disabled={isSubmitting}>
                    Atualizar
                </button>

                <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
                    Deletar Usuário
                </button>
            </Form>
        )}
    </Formik>
)