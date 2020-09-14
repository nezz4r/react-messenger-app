import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";
const LOGOUT_KEY = "logout";

export default function Sidebar({ id, logout }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  return (
    <div style={{ width: "400px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red" }}
              onClick={() => {
                logout();
              }}
              eventKey={LOGOUT_KEY}
            >
              Log out
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>

          <Tab.Content>
            <Tab.Pane eventKey={CONTACTS_KEY}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}
