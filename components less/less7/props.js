import PropTypes from 'prop-types'

export default {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
}
