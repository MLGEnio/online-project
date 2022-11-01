import React from "react";
import "./UserList.css";
function UserList(props) {
  return (
    <div>
      {props.users.map((el) => {
        return (
          <div key={el.id}>
            <p>User: {`${el.fname} ${el.lname}`}</p>
            <p>{`Email: ${el.email}`}</p>
            <p>Hobbies:</p>
            <ul key={el.id}>
              {el.hobbies.map((el) => {
                return <li>{el.label}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
