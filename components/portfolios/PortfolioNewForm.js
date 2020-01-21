// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';



const validateInputs = (validate) => {
    const errors = {};

/*     if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors; */

      return errors;
}



const PortfolioNewForm = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ title: '', description: '' , skills: '', link: ''}}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <FormGroup>
                <Label>Title</Label>
                <Field className="form-control" type='text' name="title" />
                <ErrorMessage name="title" component="div" />
            </FormGroup>

             <FormGroup>
                <Label>Description</Label>
                <Field className="form-control" type="textarea" name="description"  component="textarea"/>
                <ErrorMessage name="description" component="div" />
            </FormGroup>

            <FormGroup>
                <Label>Skills</Label>
                <Field className="form-control" type='text' name="skills" />
                <ErrorMessage name="skills" component="div" />
            </FormGroup>


            <FormGroup>
                <Label>Github Link</Label>
                <Field className="form-control" type='text' name="link" />
                <ErrorMessage name="link" component="div" />
            </FormGroup>


            <button type="submit" disabled={isSubmitting}>
                Create
            </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioNewForm;