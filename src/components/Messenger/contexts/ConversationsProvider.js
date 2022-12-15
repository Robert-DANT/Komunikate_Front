import { useContext, useState, useEffect, useCallback, createContext } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useContacts } from './ContactsProvider'
import { useSocket } from './SocketProvider'
//import useLocalStorage from '../hooks/useLocalStorage';


const PORT = 'https://komunikate-backend.onrender.com'

const ConversationsContext = createContext()

export const useConversations = () => {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ token, idUser, children, user, setUser }) {
    const [conversations, setConversations] = useState([]) //useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const { mapContacts } = useContacts()
    const socket = useSocket()
    const id = idUser._id
    
    


    const arrayEquality = (a, b) => {

        if (a.length !== b.length) { return false }

        a.sort()
        b.sort()

        const result = a.every((element, index) => {
            return element === b[index]
        })

        return result
    }


    const getConversations = () => {
        axios
            .get(`${PORT}/conversations/ind`,
                {
                    headers: {
                        'auth-token': token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            .then(res => {
                console.log(res)
                if (Array.isArray(res.data)) {
                    const newConversations = res.data.map(el => {
                        const recipients = el.participants.filter(p => p !== id)
                        const messages = el.messages
                        return { recipients, messages }
                    })
                    if (user) {
                        const convIndex = newConversations.findIndex(conversation => conversation.recipients.length === 1 ? conversation.recipients[0] === user.id : false
                        );

                        setConversations(prevConv => convIndex >= 0 ? newConversations : [...newConversations, { recipients: [user.id], messages: [] }]);
                        setSelectedConversationIndex(convIndex >= 0 ? convIndex : newConversations.length);
                        setUser()
                    } else if (!conversations.length) {
                        setConversations(newConversations);
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (token && id) getConversations()
    }, [token, id, user])






    const createConversation = (recipients) => {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        })
    }

    //this function is called when we send messages to other people, but also from the server when we receive a message >> taking messages from sender but also taking messages from others
    //here, the main action of the app happens
    //THIS GONNA BE USECALLBACK, because we don't want this function to be rebuild on every rerender
    const addMessageToConversation = useCallback(({ recipients, text, sender }) => {
        setConversations(prevConversations => {
            let madeChange = false //evaluates whether a new conversations has to be created or whether the message is to be added to an existing conversation (if false, create; if true, add)
            const newMessage = { sender, text }

            //see whether recipients matches conversations and update this conversation
            const newConversations = prevConversations.map(conversation => {
                if (arrayEquality(conversation.recipients, recipients)) {
                    madeChange = true
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage]
                    }
                }

                return conversation
            })
            if (madeChange) {
                return newConversations
            } else {
                return [
                    ...prevConversations,
                    { recipients, messages: [newMessage] }
                ]
            }
        })
    }, [setConversations])

    useEffect(() => {
        if (!socket) return

        socket.on('receive-message', addMessageToConversation)

        return () => socket.off('receive-message')
    }, [socket, addMessageToConversation])

    const sendMessage = (recipients, text) => {
        socket.emit('send-message', { recipients, text })

        addMessageToConversation({ recipients, text, sender: id })
    }


    //recipient is only an id. we also want to get the name of the recipient
    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = mapContacts.find(contact => {
                return contact._id === recipient
            })
            let name = (contact && contact.username)
            return { id: recipient, name }
        })

        const messages = conversation.messages.map(message => {
            const contact = mapContacts.find(contact => {
                return contact._id === message.sender
            })
            const name = (contact && contact.username)
            const fromMe = id === message.sender
            return { ...message, senderName: name, fromMe }
        })

        const selected = index === selectedConversationIndex
        //if (selected) return { ...conversation, messages, recipients, selected, newMessage: false }
        return { ...conversation, messages, recipients, selected }
    })

    // useEffect(() => {
    //     setFormattedConversations(formattedConversationsFunc())
    // }, [stringifiedConversations, selectedConversationIndex])

    // useEffect(()=> {
    //     setConversations(conversations.map(conversation => conversation.selected ? {...conversation, newMessage: false} : conversation))
    // }, [formattedConversations])

    const value = {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,
        createConversation,
        arrayEquality
    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    )
}

