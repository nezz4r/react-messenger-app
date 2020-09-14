import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard({ id, logout }) {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} logout={logout} />
    </div>
  );
}
