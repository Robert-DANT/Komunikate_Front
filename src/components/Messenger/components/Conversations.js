import axios from 'axios'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations({idUser}) {
    const { conversations, selectConversationIndex } = useConversations()
    const id = idUser._id


    return (
        <ListGroup variant='flush'>
            {conversations.map((conversation, index) => (
                <ListGroup.Item 
                    key={index}
                    action
                    onClick={() => selectConversationIndex(index)}
                    active={conversation.selected}
                >
                    {conversation.recipients.map(recipient => (recipient.id !== id ? recipient.name : '')).join(' ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
