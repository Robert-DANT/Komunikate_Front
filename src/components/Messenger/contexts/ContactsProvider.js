import { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { useSocket } from './SocketProvider'

const PORT = 'https://komunikate-backend.onrender.com'
// Pointing the port to the .env doesn't seem to work?
/* process.env.REACT_APP_ENDPOINT ||  */

const ContactsContext = createContext()

export const useContacts = () => {
    return useContext(ContactsContext)
}

export function ContactsProvider({ token, children }) {
    const [contacts, setContacts] = useState([]) //storing searched contacts, initially set to all contacts
    const [mapContacts, setMapContacts] = useState([]) //storing all contacts
    const [connectedUsers, setConnectedUsers] = useState([])
    const socket = useSocket()


    // const [contacts, setContacts] = useLocalStorage('contacts', [])

    // const createContact = (id, name) => { //was passed as a prop
    //     setContacts(prevContacts => {
    //         return [...prevContacts, {id, name}]
    //     })
    // }


    const searchedUsersGet = (queryString) => {
        axios
            .get(`${PORT}/users`,
                {
                    headers: {
                        'auth-token': token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params: queryString
                }
            )
            .then(res => {
                let contacts = res.data.users.map(({ _id, username, languages, city_in_germany, user_role, userImg
                }) => ({ _id, username, languages, city_in_germany, user_role, userImg,
                    isChecked: false }))
                setContacts(contacts)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const usersGet = () => {
        axios
            .get(`${PORT}/users`,
                {
                    headers: {
                        'auth-token': token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            .then(res => {
                console.log(res)
                let allContacts = res.data.users.map(({ _id, username }) => ({ _id, username })) 
                setMapContacts(allContacts)
            })
            .catch(err => {
                console.log(err)
            })

    }



    useEffect(() => {
        if (token) {
            usersGet()
            searchedUsersGet('')
        }
    }, [token])


    useEffect(() => {
        if (!socket) return

        socket.on('user-joined', data => {
            setConnectedUsers(data)
        })

        socket.on('user-left', data => {
            setConnectedUsers(data)
        })

        return () => {
            socket.off('user-joined')
            socket.off('user-left')
        }
    }, [socket])

    // const sendMessage = (recipients, text) => {
    //     socket.emit('send-message', { recipients, text })

    //     addMessageToConversation({ recipients, text, sender: id})
    // }




    return (
        <ContactsContext.Provider value={{ contacts, setContacts, mapContacts, connectedUsers, searchedUsersGet }}>
            {children}
        </ContactsContext.Provider>
    )
}
