import React from 'react';
import { Field, reduxForm } from 'redux-form';

let JoinLeague = props => {
  const { handleJoinLeagueSubmit } = props;
  return (
    <form onSubmit={handleJoinLeagueSubmit}>
      <div>
        <label htmlFor="leagueId">League ID</label>
        <Field name="leagueId" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="teamName">Team Name</label>
        <Field name="teamName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

JoinLeague = reduxForm({
  // a unique name for the form
  form: 'joinLeague'
})(JoinLeague);

export default JoinLeague;
