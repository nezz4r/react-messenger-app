import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  const [id, setId] = useLocalStorage("id");
  return (
    <div>
      {id ? <Dashboard logout={setId} id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}
