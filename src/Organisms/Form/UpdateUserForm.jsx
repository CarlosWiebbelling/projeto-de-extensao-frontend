import React from "react";
import { Col, Button } from "antd";
import { Formik, Form } from "formik";
import FormInput from "../../Molecules/FormInput";
/**
 *
 * nome
 * email
 * matricula
 * senha
 * nova senha
 * confirmar senha
 * level [admin]
 *
 */
const Register = ({ handleSubmit }) => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      enrollment: "",
      password: "",
      newPassword: "",
      confirmPassword: ""
    }}
    validate={values => {
      let errors = {};

      if (!values.name) errors.name = "Por favor, insira um nome de usuário";
      else if (values.name.length <= 3)
        errors.name = "O nome de usuário deve conter mais que 3 caracteres";

      if (!values.email) errors.email = "Por favor, insira um email";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = "Por favor, insira um email válido";

      if (!values.password) errors.password = "Por favor, insira uma senha";
      else if (values.password.length < 8)
        errors.password = "A senha deve conter no mínimo 8 caracteres";

      if (!values.confirmPassword)
        errors.confirmPassword = "Por favor, confirme sua senha";
      else if (values.confirmPassword !== values.password)
        errors.confirmPassword = "A senha difere da confirmação";

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      handleSubmit(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormInput name="name" placeholder="Nome" type="text" />
        <FormInput name="email" placeholder="Email" type="email" />
        <FormInput name="enrollment" placeholder="Matrícula" type="text" />
        <FormInput name="password" placeholder="Senha Atual" type="password" />
        <FormInput
          name="newPassword"
          placeholder="Nova Senha"
          type="password"
        />
        <FormInput
          name="confirmPassword"
          placeholder="Confirmar Nova Senha"
          type="password"
        />
        {/* if is admin
                    <FormInput name="confirmPassword" placeholder="Confirmar Nova Senha" type="password" />
                */}
        <Col>
          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Atualizar
          </Button>
        </Col>
        {/* <div className="col-3">
          <button
            type="submit"
            className="btn btn-login"
            disabled={isSubmitting}
          >
            Entrar
          </button>
        </div> */}
      </Form>
    )}
  </Formik>
);

export default Register;
