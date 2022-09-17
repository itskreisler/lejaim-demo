import React from 'react'
import { useParams } from 'react-router-dom'
const NoticiasId = () => {
  const { noticiaId } = useParams()

  return (
    <div>NoticiasId</div>
  )
}

export default NoticiasId
