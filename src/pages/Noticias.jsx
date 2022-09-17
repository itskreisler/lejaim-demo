import React from 'react'
import { Container, Row } from 'react-bootstrap'
import TagCardNoticias from '../components/TagCardNoticias'

const Noticias = () => {
  return (
    <Container>
      <Row>
        {[1, 2, 3, 4, 5].map((i) => (
          <TagCardNoticias key={i} number={i} />
        ))}
      </Row>
    </Container>
  )
}

export default Noticias
