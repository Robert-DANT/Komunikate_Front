import React, { useState } from 'react'
import { Modal, Form, Button, Badge } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import { useConversations } from '../contexts/ConversationsProvider' 
import SearchModal from './SearchModal'


export default function Contacts({ setActiveKey, conversationsKey, idUser }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const { contacts, connectedUsers } = useContacts()
    const { conversations, createConversation, selectConversationIndex, arrayEquality } = useConversations()

    
    
    
    
    
    //method to filter out duplicate conversations
    const checkDuplicate = () => {
        const conversationsPlusRecipients = conversations.map(conversation => conversation.recipients).map(el => el.map(el => el.id)) //an array of arrays of recipients
         return conversationsPlusRecipients.filter(el => arrayEquality(el, selectedContactIds))          
        }
    
    console.log(checkDuplicate())
    
    const conversationsPlusRecipients = conversations.map(conversation => conversation.recipients).map(el => el.map(el => el.id))
    console.log(conversationsPlusRecipients)
    console.log(selectedContactIds)
    
    

    
    
    // console.log(conversationsPlusRecipients.findIndex(recipientsArray => {
    //     let result = arrayEquality(recipientsArray, checkDuplicate().flat())
    //     console.log(recipientsArray, checkDuplicate().flat())
    //     console.log(result)
    //     return result
    // }))


    // if a contact is clicked, it is either removed from the list of selected contacts (the if statement)(i.e. it was selected before) or it is added (i.e. it was not selected before)
    const handleCheckboxChange = (contactId) => {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(checkDuplicate())
        console.log(checkDuplicate().flat().length)
        if(selectedContactIds.length){
        if (checkDuplicate().flat().length) {
            console.log('enter checkDuplicate')
            const selectIndex = conversationsPlusRecipients.findIndex(recipientsArray => arrayEquality(recipientsArray, checkDuplicate().flat()))
            console.log(selectIndex)
            selectConversationIndex(selectIndex)
            setActiveKey(conversationsKey)
         } else {
        createConversation(selectedContactIds)
        selectConversationIndex(conversations.length)// is this the right way to do it?
        setActiveKey(conversationsKey)}
        setSelectedContactIds([])
        const form = document.getElementById('checkbox-form')
        form.reset() //this no working
        }
        else {
            alert('No contacts selected')
        }
      }
    

    const closeModal = () => {
        setModalOpen(false)
      }


    


    return (
        <>
        <div className='d-flex flex-column flex-grow-1'>
        <div style={{position: 'sticky', top: 0, zIndex: 10,
                backgroundColor: 'white'}} className='p-2 border border-top border-right small'>
                <Button form='checkbox-form' type='submit' size="lg" block>Komunikate</Button>
                <br/>
                <Button onClick={() => setModalOpen(true)} block>Search Komunikators</Button>
        </div>
            <div className='flex-grow-1 overflow-auto'>
                <Form onSubmit={handleSubmit} id='checkbox-form'>
                            {contacts.map(contact => (contact._id !== idUser._id &&
                                <Form.Group key={contact._id}>
                                    <Form.Check
                                        type='checkbox'
                                        value={selectedContactIds.includes(contact._id)}
                                        label={(
                                        <>
                                            <span><h6>{contact.username}.... 
                                                {connectedUsers.includes(contact._id) ? <Badge pill variant="success">@</Badge> : <Badge pill variant="secondary">@</Badge>}</h6></span>
                                            <ul style={{listStyleType: 'none'}}>
                                                <li>{contact.user_role}</li>
                                                <li>{contact.languages.map(el => el)}</li>
                                                <li>{contacts.city_in_germany}</li>
                                            </ul> 
                                        </>
                                        )}
                                        onChange={() => handleCheckboxChange(contact._id)}
                                    />
                                </Form.Group>
                            ))}
                    </Form>
            </div>
        </div>

            

            <Modal show={modalOpen} onHide={closeModal}>
                <SearchModal closeModal={closeModal} />               
            </Modal>

        </>
    )
}



