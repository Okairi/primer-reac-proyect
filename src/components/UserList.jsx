import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFetchUser } from "../hooks/useFetchData";

export const UserList = ({ endpoint }) => {
  const { user, isLoading } = useFetchUser();
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
