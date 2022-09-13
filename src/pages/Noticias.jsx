import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useHolder } from '../hooks/use-holder'

const Noticias = () => {
  const CardNoticias = ({ number, ...props }) => {
    const [status, text] = useHolder({
      dimensions: '350x200',
      random: 'yes',
      text: 'Le Jaim',
      size: 50
    })
    const myImage = useRef()
    useEffect(() => {
      status === 'ready' &&
        (() => {
          !(typeof Holder === 'undefined') &&
          // TODO: Holder no funciona con npm
            // eslint-disable-next-line no-undef
            Holder.run({
              images: myImage.current
            })
        })()
    }, [status])

    return (
      <Col lg={6} className="mb-3 mx-auto">
        <Card>
          <Row>
            <Col lg={6}>
              <Card.Img ref={myImage} src={text} />
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
