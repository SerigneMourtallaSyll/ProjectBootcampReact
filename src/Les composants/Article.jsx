import React from 'react'
import { useParams } from 'react-router-dom'

function Article() {
  const {id} = useParams();
  return (
    <h2>Article avec id: {id}</h2>
  )
}

export default Article