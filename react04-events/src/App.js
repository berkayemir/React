import './App.css';

function App() {
  return (
    <div onClick={()=>console.log("div clicked")}>
      <h1>Wissen Akademie</h1>
      <form onSubmit={(e)=>console.log("submit gerçekleşti",e.preventDefault())}>
        <label htmlFor="">Name</label>
        <input type="text"  onChange={(e)=>console.log('something changed',e.target.value)} name='isim'/>
        
      </form>


    </div>
  );
}

export default App;
