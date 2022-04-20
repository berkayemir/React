import './App.css';
import User from './User';

function App() {

  const userName="Berkay";
  const name="Alper";
  const surname="Emir";
  const img="https://picsum.photos/200/300"


  

  return (
    <div>
      <User userName={userName} name={name} surname={surname} img={img}  />
    </div>
  );
}

export default App;
