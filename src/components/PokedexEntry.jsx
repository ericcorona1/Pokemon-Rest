import React from 'react'

const PokedexEntry = ({name, description}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  )
}

export default PokedexEntry