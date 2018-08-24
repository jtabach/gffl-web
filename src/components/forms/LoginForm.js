import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password required';
  } else if (values.password.length < 7) {
    errors.password = 'Password is not strong enough';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  console.log(values);
  if (!values.password) {
    // required so that values.password.length does not throw undefined error
  } else if (values.password.length < 8) {
    warnings.password = 'You may want to consider a longer password';
  }
  return warnings;
};

const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

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
