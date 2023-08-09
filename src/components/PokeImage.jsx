import React from 'react'

const PokeImage = ({pathToImage, name}) => {
  return (
    <div>
      <img src={pathToImage} alt={name} />
    </div>
  )
}

export default PokeImage