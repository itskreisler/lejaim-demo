import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useHolder } from '../hooks/use-holder'

const Noticias = () => {
  const CardNoticias = ({ number, ...props }) => {
    const [text, img] = useHolder({
      dimensions: '300x200',
      random: 'yes',
      text: 'LE JAIM',
      outline: 'yes',
      size: 30
    })

    return (
      <Col lg={6} className="mb-3 mx-auto">
        <Card>
          <Row>
            <Col lg={6}>
              <Row>
                <Col xs={'auto'} className='mx-auto pt-3 pt-lg-0'>
                <Card.Img className='img-fluid' style={{ width: '100%' }} ref={img} src={text} />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Card.Body>
                <Card.Title>Noticia #{number}</Card.Title>
                <Card.Text>
                  Algún texto de ejemplo rápido para construir el título de la
                  tarjeta y inventar el La mayor parte del contenido de las
                  tarjetas...
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    )
  }
  CardNoticias.propTypes = {
    number: PropTypes.number.isRequired
  }
  return (
    <Container>
      <Row>
        {[1, 2, 3, 4, 5].map((i) => (
          <CardNoticias key={i} number={i} />
        ))}
      </Row>
    </Container>
  )
}

export default Noticias
