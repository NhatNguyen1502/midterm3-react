import React from "react";
import UserItem from "./UserItem";
const Users = (props) => {
  const { users } = props;
  return (
    <div className="cardList">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
export default Users;
