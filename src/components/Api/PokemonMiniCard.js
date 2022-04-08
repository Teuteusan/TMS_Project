import React from 'react'
import {Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";


const PokemonMiniCard = ({id, image, name, type}) => {
    const style = type + " thumb-container";
    return (
    <Button variant="outline-light" as={Link} to={"/card"}>
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h4>{name}</h4>
                <small>Type: {type}</small>
            </div>
        </div>

        </Button>
    )
}

export default PokemonMiniCard;