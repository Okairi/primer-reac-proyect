import { useState } from "react";
import { UserList } from "./components/UserList";

export const UserApp = () => {
  const [url, setUrl] = useState("users");
  const handleFetch = () => {
    setUrl("comments ");
  };
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <UserList endpoint={url}></UserList>
      <button onClick={handleFetch}>OBtener data</button>
    </>
  );
};
