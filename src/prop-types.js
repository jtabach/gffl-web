import PropTypes from 'prop-types';

const teamInLeague = PropTypes.shape({
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
});

const teamInUser = PropTypes.shape({
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  league: PropTypes.object.isRequired
});

const postInLeague = PropTypes.shape({
  date: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  team: PropTypes.object.isRequired
});

// const teamInPost =

const league = PropTypes.shape({
  admin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(postInLeague).isRequired,
  teams: PropTypes.arrayOf(teamInLeague).isRequired
});

const user = PropTypes.shape({
  email: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(teamInUser).isRequired
});

const team = PropTypes.shape({
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
});

// const post = PropTypes.

export default {
  league,
  user,
  team,
  teamInLeague,
  teamInUser
};
