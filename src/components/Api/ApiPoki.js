import React, { useEffect, useState } from 'react';
import PokemonMiniCard from './PokemonMiniCard';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const ApiPoki = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=30')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-container">
      <h1 className="app-container-up">Эвалюцыя покемонов</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) =>
            <PokemonMiniCard
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}

        </div>
          <Button variant="warning" className="load-more" onClick={() => getAllPokemons()}>Load more</Button>
      </div>
    </div>
  );
}

export default ApiPoki;