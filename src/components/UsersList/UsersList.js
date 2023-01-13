import React from "react";

import styles from "./UsersList.module.css";
import Card from "../../UI/Card/Card";

const UsersList = (props) => {
  return (
    <>
      <Card className={styles.user}>
        <h1>Users</h1>
        <ul>
          {props.users &&
            props.users.map((user) => (
              <li key={user.id}>
                {user.name}, {user.age} years old
              </li>
            ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
