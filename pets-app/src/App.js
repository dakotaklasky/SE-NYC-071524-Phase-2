import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import React from "react"
import PetList from "./components/PetList"
import pets from "./data/petsData";


function App() {
  return (
    <div className = "app">
      <Header/>
      <PetList id image name/>
    </div>
  );
}

export default App;
