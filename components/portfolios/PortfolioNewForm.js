// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/Portinput'



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
 
            <Field 
                type='text' 
                name="title" 
                label="Title"
                component={PortInput}/>
            
            <Field 
                type='textarea' 
                name="description"
                label="Description" 
                component={PortInput}/>
            
            <Field 
                type='text' 
                name="skills" 
                label="Skills"
                component={PortInput}/>

            <Field 
                type='text' 
                name="link" 
                label="Github Link"
                component={PortInput}/>


            <button type="submit" disabled={isSubmitting}>
                Create
            </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioNewForm;