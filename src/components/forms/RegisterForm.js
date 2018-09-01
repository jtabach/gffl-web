import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import Button from '../common/Button';
import { validate, warn } from './validation/register';

let RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          type="text"
          label="First Name"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="lastName"
          type="text"
          label="Last Name"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="email"
          type="email"
          label="Email"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="password1"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="password2"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <Button label="Register" type="submit" variant="primary" />
    </form>
  );
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register',
  validate,
  warn
})(RegisterForm);

export default RegisterForm;
