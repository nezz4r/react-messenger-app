import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import useLocalStorage from "../hooks/useLocalStorage";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { ContactsProvider } from "../contexts/ContactProvider";
import { SocketProvider } from "../contexts/SocketProvider";

export default function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard logout={setId} id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return <div>{id ? dashboard : <Login onIdSubmit={setId} />}</div>;
}
