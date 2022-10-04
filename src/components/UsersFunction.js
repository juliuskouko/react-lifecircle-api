import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersFunction() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {users.map((item) => {
        return (
          <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Username: {item.username}</p>
          <p>email: {item.email}</p>
          <p>website: {item.website}</p>
          <hr></hr>
        </div>
        );
      })}
    </>
  );
}

export default UsersFunction;
