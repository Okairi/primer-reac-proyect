import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const UserList = ({ endpoint }) => {
  const [user, setuser] = useState([]);
  console.log(endpoint);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}`
      );
      const json = await response.json();

      setuser(json);
    };
    getUser();
  }, [endpoint]);

  return (
    <>
      <ul>
        {user.map((val) => {
          return <li key={val.id}>{val.name}</li>;
        })}
      </ul>
    </>
  );
};

UserList.propTypes = {
  endpoint: PropTypes.string.isRequired,
};
