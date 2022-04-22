import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiTest() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);

  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  const onChangeHandler = (e) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
      .then((response) => setSingleUser(response.data))
      console.log(e.target.value);
  };

  return (
    <div className="">
      <div>
        <select className="form-control w-25" onChange={onChangeHandler}>
          <option value="0">Kullanıcı Seçiniz</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
      <hr />
      <br />
      <br />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>{singleUser.id}</td>
                <td>{singleUser.name}</td>
                <td>{singleUser.username}</td>
                <td>{singleUser.email}</td>

            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApiTest;
