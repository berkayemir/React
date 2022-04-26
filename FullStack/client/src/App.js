import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3050/getEmployee")
      .then((response) => setEmployees(response.data))
      .catch((err) => console.log(err));
  }, []);

  const createEmployee=()=>{
    axios.post("http://localhost:3050/createEmployee",{
      name:"",
      age:0,
      username:""
    }).then((res)=>{
      alert("Employee Created")
    })
  }

  return (
    <div className="App">
      {employees.map((employee) => (
        <div>
          <h1>Name: {employee.name}</h1>
          <h1>Age: {employee.age}</h1>
          <h1>Username: {employee.username}</h1>
        </div>
      ))}
      <br />
      <br />
      <div>
        <center>
          <input
            type="text"
            placeholder="İsim giriniz"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Yaş giriniz"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kullanıcı adı giriniz"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Create Employee</button>
        </center>
      </div>
    </div>
  );
}

export default App;
