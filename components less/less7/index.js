import UserCard from './UserCard'
import useInputRequired from './CustomHooks'

const onChanger = useInputRequired('Введите пароль', true)

const users = [
  { id: 1, name: 'Евгений', surname: 'Ерёмин' },
  { id: 2, name: 'Ярополк', surname: 'Воронов' },
  { id: 3, name: 'Елисей', surname: 'Светлодаров' },
]

const AppCard = () => (
  <div>
    <input type="text" onChange={onChanger.error} />
    <UserCard user={users[1]} onSendLetter={() => console.log(users[0])} />
    <UserCard user={users[2]} onSendLetter={() => console.log(users[0])} />
  </div>
)

export default AppCard
