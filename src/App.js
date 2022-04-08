import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import PokemonEvolution from './components/PokemonEvolution';
import NavBar from './components/Navbar';
import Pokemon from './components/Api/Card';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pokemon_evolution" element={<PokemonEvolution />} />
        <Route path="card" element={<Pokemon />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App;
