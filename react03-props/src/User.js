import React from "react";

function User(props) {
  return (
    <div>
      <center>
        <h1>UserName: {props.userName} </h1>
        <h1>Name: {props.name}</h1>
        <h1>Surname: {props.surname}</h1>
        <img src={props.img} alt="" />
      </center>
    </div>
  );
}

export default User;
