//import "./Messenger.css";
import Dashboard from './components/Dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'
import { SocketProvider } from './contexts/SocketProvider';

const Messenger = ({ userToken }) => {
  //const [idUser, setIdUser] = useLocalStorage('idusername', null) 
  const idUser = {_id: userToken.id, username: userToken.username}
  const token = localStorage.getItem('token')
  //reminder: idUser = {_id, username}

  return (   
      <SocketProvider idUser={idUser}>
        <ContactsProvider token={token}>
          <ConversationsProvider idUser={idUser} token={token}>
            <Dashboard idUser={idUser}/>
          </ConversationsProvider>
        </ContactsProvider>
      </SocketProvider>
  );
}

export default Messenger;
