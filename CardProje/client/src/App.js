import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cards, setCard] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [newName, setSetNewName] = useState("");
  const [newAge, setNewAge] = useState(0)

  useEffect(() => {
    axios
      .get("http://localhost:3050/getCards")
      .then((response) => setCard(response.data))
      .catch((err) => console.log(err));
  }, [cards]);

  const createCards = () => {
    
    axios
      .post("http://localhost:3050/createCards", {
        name: name,
        age: age,
        username: username,
        img:img
      })
      .then((res) => {
        alert("Card Created");
      });
  };
  const updateCard=(id)=>{

    axios
      .put("http://localhost:3050/updateCards/", {
        id:id,
        newName:newName,
        newAge: newAge,
      })
      .then((res) => {
        alert("Card Updated");
      });
  }


  return (
    <div className="container">
      <div className="row ">
        {cards.map((card) => (
          <div className="card col-md-3">
            <img src={card.img==="" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" : card.img} className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <h5 className="card-title">{card.age}</h5>

              <input
                type="text"
                placeholder="Güncellenecek Adı Giriniz"
                className="form-control"
                onChange={(e) => setSetNewName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Güncellenecek Yaşı Giriniz"
                className="form-control"
                onChange={(e) => setNewAge(e.target.value)}
              />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <button className="btn btn-primary"  onClick={()=>updateCard(card._id)}>Güncelle</button>
              </li>
              <li className="list-group-item">
                <button className="btn btn-danger">Sil</button>
              </li>
            </ul>
            <div className="card-body">
              <h5 className="card-title">{card.username}</h5>
            </div>
          </div>
        ))}
      </div>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3 form-check">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Img
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={createCards}>
          Create Card
        </button>
      </form>
    </div>
  );
}

export default App;
