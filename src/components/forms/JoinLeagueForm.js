import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './RenderField';
import Button from '../common/button';
import { validate } from './validation/joinLeague';

let JoinLeague = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="leagueId"
          type="text"
          label="League ID"
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
      <Button label="Join League" type="submit" style="primary" />
    </form>
  );
};

JoinLeague = reduxForm({
  // a unique name for the form
  form: 'joinLeague',
  validate
})(JoinLeague);

export default JoinLeague;
