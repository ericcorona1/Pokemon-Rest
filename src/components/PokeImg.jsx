import React from 'react'

const PokeImg = (pathToImage, name) => {
  return (
    <div>
      <img src={pathToImage} alt={name} />
    </div>
  )
}

export default PokeImg