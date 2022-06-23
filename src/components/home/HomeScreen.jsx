import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()
  let pokemonId = Math.floor(Math.random() * 152)

  const handelClick = () => {
    alert(`You have left Home to find Pokemon #${pokemonId}.`)
    navigate(`/details/${pokemonId}`)
  }

  return (
    <div>
      <h1>Welcome Home!</h1>
      <h2>Go Somewhere Else</h2>
      <button onClick={handelClick}>Leave to find a Pokemon</button>
    </div>
  )
}

export default HomeScreen