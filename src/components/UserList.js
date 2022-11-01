import React from "react";
import "./UserList.css";
function UserList(props) {
  return (
    <div>
      {props.users.map((el) => {
        return (
          <div key={el.id}>
            <p>{`${el.fname} ${el.lname} ${el.email}`}</p>
            {}
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
