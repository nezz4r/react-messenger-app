import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import useLocalStorage from "../hooks/useLocalStorage";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { ContactsProvider } from "../contexts/ContactProvider";

export default function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard logout={setId} id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );
  return <div>{id ? dashboard : <Login onIdSubmit={setId} />}</div>;
}
