import Sidebar from "./Sidebar"
import OpenConversations from "./OpenConversations"
import { useConversations } from '../contexts/ConversationsProvider'


export default function Dashboard({ idUser }) {
    const { selectedConversation } = useConversations()
    
    return (
        <div className='d-flex' style={{ height: '90vh' }}>
            <Sidebar idUser={idUser}/>
            {selectedConversation && <OpenConversations/>}
        </div>        
    )
}
