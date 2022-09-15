import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useRandomItem } from '../hooks/use-random'

const Servicios = () => {
  const ser = [
    { title: 'Citas', body: 'Agendamiento de citas' },
    { title: 'Soporte', body: 'Brindamos soporte 24/7' },
    { title: 'Seguridad', body: 'Nada de que preocuparse' },
    { title: 'Asistencia', body: 'Ofrecemos asistencia en todo momento' },
    { title: 'Confidencial', body: 'Tus datos siempre estaran seguros' }
  ]

  return (
    <Container>
      <Row>
        {ser.map(({ title, body }, index) => {
          const variant = useRandomItem([
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark'
          ])
          return (
            <Col key={index} xs="auto" className='mb-3 m-auto'>
              <Card
                bg={variant.toLowerCase()}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              >
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{body}</p>
                    <footer className="blockquote-footer text-white">
                      <cite title="Source Title">Le Jaim</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Servicios
