//import "./Messenger.css";
import Dashboard from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'
import { SocketProvider } from './contexts/SocketProvider';


const Messenger = ({ userToken, user, setUser }) => {
  const idUser = {_id: userToken.id, username: userToken.username}
  const token = localStorage.getItem('token')
  //reminder: idUser = {_id, username}
  console.log(user, userToken)

  return (   
      <SocketProvider idUser={idUser}>
        <ContactsProvider token={token}>
          <ConversationsProvider idUser={idUser} token={token} user={user} setUser={setUser}>
            <Dashboard idUser={idUser}/>
          </ConversationsProvider>
        </ContactsProvider>
      </SocketProvider>
  );
}

export default Messenger;
