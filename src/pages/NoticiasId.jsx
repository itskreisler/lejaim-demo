import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const NoticiasId = () => {
  const { noticiaId } = useParams()

  return (
    <Container>
      <Row>
    {noticiaId}
      </Row>
    </Container>
  )
}

export default NoticiasId
