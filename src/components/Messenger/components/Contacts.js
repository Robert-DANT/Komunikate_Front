import React, { useState } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";
import SearchModal from "./SearchModal";
import "../../fonts.css";
import "./Contacts.css";

export default function Contacts({ setActiveKey, conversationsKey, idUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { contacts, setContacts, connectedUsers } = useContacts();
  const {
    conversations,
    createConversation,
    selectConversationIndex,
    arrayEquality,
  } = useConversations();

  //method to filter out duplicate conversations
  const conversationsPlusRecipients = conversations
    .map((conversation) => conversation.recipients)
    .map((el) => el.map((el) => el.id));

  const checkDuplicate = () => {
    return conversationsPlusRecipients.filter((el) =>
      arrayEquality(el, selectedContactIds)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedContactIds.length) {
      if (checkDuplicate().flat().length) {
        const selectIndex = conversationsPlusRecipients.findIndex(
          (recipientsArray) =>
            arrayEquality(recipientsArray, checkDuplicate().flat())
        );
        selectConversationIndex(selectIndex);
        setActiveKey(conversationsKey);
      } else {
        createConversation(selectedContactIds);
        selectConversationIndex(conversations.length);
        setActiveKey(conversationsKey);
      }
    } else {
      alert("No contacts selected");
    }
    setSelectedContactIds([]);
    const checkboxFalse = contacts.map((contact) => ({
      ...contact,
      isChecked: false,
    }));
    setContacts(checkboxFalse);
  };

  const handleCheckboxChange = (e) => {
    let checkedArray = contacts.map((contact) => ({ ...contact }));
    let contactIndex = checkedArray.findIndex(
      (contact) => contact._id === e.target.value
    );
    checkedArray[contactIndex].isChecked = e.target.checked;
    setContacts(checkedArray);
    setSelectedContactIds([
      ...selectedContactIds,
      checkedArray[contactIndex]._id,
    ]);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="d-flex flex-column flex-grow-1">
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "white",
          }}
          className="p-2 border border-top border-right small"
        >
          <Button
            className="contact-field-buttons"
            form="checkbox-form"
            type="submit"
            size="lg"
            block
          >
            Komunikate
          </Button>
          <br />
          <Button
            className="contact-field-buttons"
            onClick={() => setModalOpen(true)}
            block
          >
            Search Komunikators
          </Button>
        </div>
        <div className="flex-grow-1 overflow-auto komunikators-list">
          <Form onSubmit={handleSubmit} id="checkbox-form">
            {contacts.map(
              (contact) =>
                contact._id !== idUser._id && (
                  <Form.Group key={contact._id}>
                    <Form.Check
                      type="checkbox"
                      checked={contact.isChecked}
                      value={contact._id}
                      label={
                        <>
                          <span>
                            <h6 className="user-id">
                              {/* <img
                                src={contact.userImg}
                                width="50px"
                                height="50px"
                                alt="user-img"
                              /> */}
                              {contact.username}....
                              {connectedUsers.includes(contact._id) ? (
                                <Badge pill variant="success">
                                  @ {contact.user_role}
                                </Badge>
                              ) : (
                                <Badge pill variant="secondary">
                                  @ {contact.user_role}
                                </Badge>
                              )}
                            </h6>
                            <small className="user-languages">
                              {contact.languages.map((el) => el)}
                            </small>
                          </span>
                          <ul style={{ listStyleType: "none" }}>
                            {/* <li>{contact.user_role}</li> */}
                            {/* <li>{contact.languages.map((el) => el)}</li> */}
                            <li>{contacts.city_in_germany}</li>
                          </ul>
                        </>
                      }
                      onChange={handleCheckboxChange}
                    />
                  </Form.Group>
                )
            )}
          </Form>
        </div>
      </div>

      <Modal show={modalOpen} onHide={closeModal}>
        <SearchModal closeModal={closeModal} />
      </Modal>
    </>
  );
}
