export const validate = values => {
  const errors = {};

  if (!values.leagueName) {
    errors.leagueName = 'League Name required';
  }

  if (!values.teamName) {
    errors.teamName = 'Team Name required';
  }
  return errors;
};

export const warn = values => {
  const warnings = {};
  if (!values.leagueName) {
    // required so that values.password.length does not throw undefined error
  } else if (values.leagueName.length < 4) {
    warnings.password1 = 'You may want to consider a longer league name';
  }
  return warnings;
};
