import React from 'react'

function Navbar({ nombreLike }) {
  return (
        <div className='navbar'>
            <h2>Les posts liker sont: {nombreLike}</h2>
            
        </div>
    )
}

export default Navbar