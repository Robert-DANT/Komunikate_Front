import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import ISO6391 from 'iso-639-1'

export default function SearchModal({ closeModal }) {
  const languagesRef = useRef()
  const citiesRef = useRef()
  const roleRef = useRef()
  const usernameRef = useRef()
  const { searchedUsersGet } = useContacts()

  const languagesArray = ISO6391.getAllNames()
  
  //from the tutorial
//   const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
//   const [modalOpen, setModalOpen] = useState(false)
//   const conversationsOpen = activeKey === CONVERSATIONS_KEY



  const handleSubmit = (e) => {
    e.preventDefault()

    const newQueryString = {languages: languagesRef.current.value, city_in_germany: citiesRef.current.value, user_role: roleRef.current.value, username: usernameRef.current.value}

    console.log(newQueryString)

    searchedUsersGet(newQueryString)

    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton>Search Komunikators</Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>By Language</Form.Label>
                <Form.Control as="select" ref={languagesRef}>
                    <option></option>
                    {languagesArray.map(el => <option>{el}</option>)}
                </Form.Control>
                <Form.Label>By City</Form.Label>
                <Form.Control as="select" ref={citiesRef}>
                    <option ></option>
                    <option value='Berlin'>Berlin</option>
                    <option value='Frankfurt am Main'>Frankfurt am Main</option>
                    <option value='Hamburg'>Hamburg</option>
                    <option value='Stuttgart'>Stuttgart</option>
                    <option value='Munich'>Munich</option>
                </Form.Control>
                <Form.Label>By Role</Form.Label>
                <Form.Control as="select" ref={roleRef}>
                    <option value=''></option>
                    <option value='Mentor'>Mentor</option>
                    <option value='Seeker'>Seeker</option>
                </Form.Control>
                <Form.Label>By Username</Form.Label>
                <Form.Control type="text" placeholder="Username" ref={usernameRef} />
                <Form.Text className="text-muted">
                    Please leave the fields you don't want to search for blank.
                </Form.Text>
                </Form.Group>
                <Button type="submit" block>
                    Search
                </Button> 
        </ Form>        
      </Modal.Body>
    </>
  )
}


    

{/* <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form> */}