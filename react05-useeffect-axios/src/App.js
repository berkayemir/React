import './App.css';

function App() {

  const people=["Aslı","Mikail","Recep","Doğukan","Veli","Salih","Elif","Berkay","Ahmet","Mahir","Eren","Okan"];
  const liStyle={
    color:"blue",
    listStyleType:"none"
  }
  return (


    <div >
        {/* <h1>{people[0]}</h1>
        <h1>{people[1]}</h1>
        <h1>{people[2]}</h1>
        <h1>{people[3]}</h1>
        <h1>{people[4]}</h1>
        <h1>{people[5]}</h1>
        <h1>{people[6]}</h1>
        <h1>{people[7]}</h1>
        <h1>{people[8]}</h1>
        <h1>{people[9]}</h1>
        <h1>{people[10]}</h1>
        <h1>{people[11]}</h1>
        <hr /> */}

        {
          people.map((person)=>(
            <li >{person}</li>
          ))
        }

        <h1></h1>
    </div>
  );
}

export default App;
