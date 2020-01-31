// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/Portinput'



const validateInputs = (values) => {
  const errors = {};

  Object.keys(values).forEach((key) => {

    if (!values[key]) {
      errors[key] = `Field ${key} is required!`
    }

  })

  return errors;
}



const PortfolioNewForm = ({ initialValues, onSubmit }) => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

          <Field
            type='text'
            name="title"
            label="Title"
            component={PortInput} />

          <Field
            type='text'
            name="category"
            label="Category"
            component={PortInput} />


          <Field
            type='textarea'
            name="description"
            label="Description"
            component={PortInput} />

          <Field
            type='text'
            name="skills"
            label="Skills"
            component={PortInput} />

          <Field
            type='text'
            name="link"
            label="Github Link"
            component={PortInput} />

          <Button size="lg" color="primary" type="submit" disabled={isSubmitting}>
            Create
            </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioNewForm;