import React, { Component } from 'react';
import { Carousel, Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function Home() {
  return (
    <>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.pokemon.com/assets//cms2-ru-ru/img/video-games/_tiles/pokemon-unite/launch/pokemon-unite-169.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Pokémon UNITE выйшаў на мабільныя прылады.</h3>
      <Button variant="outline-secondary">Падрабязней</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.pokemon.com/assets//cms2-ru-ru/img/watch-pokemon-tv/_tiles/generic/watch-pokemon-tv-169.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Глядзі Покемон ТБ прама зараз!</h3>
      <Button variant="outline-secondary">Падрабязней</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.pokemon.com/assets//cms2-ru-ru/img/trading-card-game/_tiles/translations/pokemon_tcg_russian_logo.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Карты пашырэння Калекцыйная картачная гульнi Покемон</h3>
      <Button variant="outline-secondary">Падрабязней</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
}


export default Home;

