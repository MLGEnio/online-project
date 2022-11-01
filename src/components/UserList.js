import React from "react";
import "./UserList.css";
function UserList(props) {
  return (
    <div>
      {props.users.map((el) => {
        return (
          <div key={el.id}>
            <h5>User: {`${el.fname} ${el.lname}`}</h5>
            <h5>{`Email: ${el.email}`}</h5>
            <h5>Hobbies:</h5>
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
