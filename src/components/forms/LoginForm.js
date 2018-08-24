import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import { validate, warn } from './validation/login';

let LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
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
          name="password"
          type="password"
          label="Password"
          component={RenderField}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login',
  validate,
  warn
})(LoginForm);

export default LoginForm;
