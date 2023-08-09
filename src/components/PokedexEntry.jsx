import React from 'react'

const PokedexEntry = ({name, description}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

export default PokedexEntry