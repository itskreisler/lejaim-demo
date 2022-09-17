import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useHolder } from '../hooks/use-holder'
import { Link } from 'react-router-dom'
const TagCardNoticias = ({ number }) => {
  const [text, img] = useHolder({
    dimensions: '300x200',
    random: 'yes',
    text: 'LE JAIM',
    outline: 'yes',
    size: 30
  })

  return (
      <Col lg={6} className='mb-3 mx-auto'>
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
                  <Link to={'/noticias/' + number}>Ver más</Link>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
  )
}
TagCardNoticias.propTypes = {
  number: PropTypes.number.isRequired
}

export default TagCardNoticias
