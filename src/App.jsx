import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pokemons from "./components/Pokemons";
import pokemonsList from "./assets/pokemons";
// Test
function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {pokemonsList.map(({ name, type, image, id }) => (
            <Pokemons key={id} name={name} type={type} img={image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
