import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleCheckboxChange(contactId) {
    setSelectedIds((prevSelected) => {
      if (prevSelected.includes(contactId)) {
        return prevSelected.filter((prevId) => {
          return contactId !== prevId;
        });
      } else return [...prevSelected, contactId];
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    createConversation(selectedIds);
    closeModal();
  }

  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
