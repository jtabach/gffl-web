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

const league = PropTypes.shape({
  admin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  posts: PropTypes.array,
  teams: PropTypes.arrayOf(teamInLeague).isRequired
});

const user = PropTypes.shape({
  email: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(teamInUser).isRequired
});

export default {
  league,
  user,
  teamInLeague,
  teamInUser
};
