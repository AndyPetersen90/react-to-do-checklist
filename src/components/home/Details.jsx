import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const [data, setData] = useState({})
  const {pokemon} = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => setData(res.data))
  }, [])

  return (
    <div>
      <h1>A wild {data.name} has been found!</h1>
      <h2>name: {data.name}</h2>
      <h3>Pokemon ID: {pokemon}</h3>
      <img className="pokemon-img" src={data.sprites?.front_default} alt="" />
    </div>
  )
}

export default Details