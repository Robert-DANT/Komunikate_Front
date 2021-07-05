//import "./Messenger.css";
import Dashboard from './components/Dashboard'
import useLocalStorage from './hooks/useLocalStorage';
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider'
import { SocketProvider } from './contexts/SocketProvider';

const Messenger = () => {
  const [idUser, setIdUser] = useLocalStorage('idusername', null) //this i have to get from the token
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
