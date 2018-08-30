import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import Button from '../common/Button';
import { validate } from './validation/createLeague';

let CreateLeagueForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="leagueName"
          type="text"
          label="League Name"
          component={RenderField}
        />
      </div>
      <div>
        <Field
          name="teamName"
          type="text"
          label="Team Name"
          component={RenderField}
        />
      </div>
      <Button label="Create League" type="submit" style="primary" />
    </form>
  );
};

CreateLeagueForm = reduxForm({
  // a unique name for the form
  form: 'createLeague',
  validate
})(CreateLeagueForm);

export default CreateLeagueForm;
