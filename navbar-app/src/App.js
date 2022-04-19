import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Contact/>} path="/Contact"/>

      </Routes>
    </div>
  );
}

export default App;
