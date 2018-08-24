import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CreateLeagueForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="leagueName">League Name</label>
        <Field name="leagueName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="teamName">Team Name</label>
        <Field name="teamName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

CreateLeagueForm = reduxForm({
  // a unique name for the form
  form: 'createLeague'
})(CreateLeagueForm);

export default CreateLeagueForm;
