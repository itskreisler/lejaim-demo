import React, { useRef, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { Col, Container, Row } from 'react-bootstrap'
import { useHookForm } from '../hooks/use-hook-form'
import Carousel from 'react-bootstrap/Carousel'
const Home = () => {
  const [ifSend, setIfSend] = useState(false)
  const { register, handleSubmit } = useHookForm()
  const form = useRef()
  const onSubmit = (data) => {
    setIfSend(true)
    setTimeout(() => {
      setIfSend(false)
      form.current.reset()
    }, 2000)
  }
  return (
    <Container>
      <Row className="mb-3">
        <Col lg={6} className="mx-auto">
          <Card border="info">
            <Card.Body>
              <Carousel>
                {[
                  './img/1.jpg',
                  './img/2.jpg',
                  './img/3.jpg'
                ].map((el, index) => (
                  <Carousel.Item key={index} interval={2000}>
                    <img
                      className="d-block w-100 rounded object-fit-cover"
                      height={200}
                      src={el}
                      alt="..."
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="mb-3 mb-lg-0">
          <Card border="primary" className="h-100">
            <Card.Header>Inicio</Card.Header>
            <Card.Body>
              <Card.Title>Historia</Card.Title>
              <Card.Text className="text-justify">
                Comenzo como una idea, y poco a poco se fue formando, nuestra
                intencion es brindar acceso oportuno a los servicios de salud, y
                reducir los tiempos de espera.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="primary" className="h-100">
            <Card.Header>Suscribete a nuestro voletin de noticias.</Card.Header>
            <Card.Body>
              <Card.Title>Se uno de los primeros en enterarte!</Card.Title>
              <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Correo electronico"
                    aria-label="Correo electronico"
                    aria-describedby="basic-addon2"
                    {...register('email')}
                    autoComplete="off"
                    required
                  />
                  <Button variant="success" type="submit">
                    Suscribirme
                  </Button>
                </InputGroup>
                <Alert show={ifSend} variant={'info'}>
                  !Gracias por suscribirte!
                </Alert>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
