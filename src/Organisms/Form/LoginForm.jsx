import React from "react";
import { Formik, Form } from "formik";
import FormInput from "../../Molecules/FormInput";

const Login = ({ handleSubmit }) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={values => {
      let errors = {};

      if (!values.email) errors.email = "Required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        errors.email = "Invalid email address";

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      handleSubmit(values);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormInput name="email" placeholder="Email" type="email" />
        <FormInput name="password" placeholder="Senha" type="password" />

        <div className="row">
          <div className="col-9"></div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-login"
              disabled={isSubmitting}
            >
              Entrar
            </button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

export default Login;
