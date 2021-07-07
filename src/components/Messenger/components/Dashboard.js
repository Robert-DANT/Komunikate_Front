import Sidebar from "./Sidebar"
import OpenConversations from "./OpenConversations"
import { useConversations } from '../contexts/ConversationsProvider'


export default function Dashboard({ idUser }) {
    const { selectedConversation } = useConversations()
    console.log(idUser)
    
    return (
<<<<<<< HEAD
        <div className='d-flex' style={{ height: '90vh' }}>
=======
        <div className='d-flex' style={{ height: '80vh' }}>
>>>>>>> 160b85d5b7b10dd2d4054d91cceedd900150fb88
            <Sidebar idUser={idUser}/>
            {selectedConversation && <OpenConversations/>}
        </div>        
    )
}
