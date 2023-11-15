import React from 'react'
import { Navigate } from 'react-router-dom'

function Proteger({estConnecte, children}) {
    if(!estConnecte) return <Navigate to="/" />
  return (
    <div>{children}</div>
  )
}

export default Proteger