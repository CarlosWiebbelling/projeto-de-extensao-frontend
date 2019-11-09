import React from 'react'
import { Field, ErrorMessage } from "formik"

export default function FormInput({ name, placeholder, type }) {

  return (
    <>
      <h4 htmlFor={name}>{placeholder}</h4>
      <Field className="form" type={type} name={name} />
      <ErrorMessage name={name} component='div' className='error-msg' />
    </>
  )
}