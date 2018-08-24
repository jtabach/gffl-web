export const validate = values => {
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

export const warn = values => {
  const warnings = {};
  console.log(values);
  if (!values.password) {
    // required so that values.password.length does not throw undefined error
  } else if (values.password.length < 8) {
    warnings.password = 'You may want to consider a longer password';
  }
  return warnings;
};
