// import PropTypes from 'prop-types'
import props from './props'

const UserCard = (prop) => {
  const { user, onSendInvite, onSendLetter } = prop

  return (
    <div className="user-card">
      <p>
        {user.name} {user.surname}
      </p>
      <div className="user-card-flex">
        <button type="button" onClick={onSendInvite}>
          Отправить запрос
        </button>
        <button type="button" onClick={onSendLetter}>
          Написать письмо
        </button>
      </div>
    </div>
  )
}

// UserCard.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired,
//   }).isRequired,

//   onSendLetter: PropTypes.func.isRequired,
// }

// UserCard.defaultProps = {}

UserCard.propTypes = props

export default UserCard
