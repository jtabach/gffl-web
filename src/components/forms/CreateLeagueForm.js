import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
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
      <button type="submit">Submit</button>
    </form>
  );
};

CreateLeagueForm = reduxForm({
  // a unique name for the form
  form: 'createLeague',
  validate
})(CreateLeagueForm);

export default CreateLeagueForm;
