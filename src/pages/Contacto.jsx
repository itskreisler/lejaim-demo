import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { useHookForm } from '../hooks/use-hook-form'
import { useCss } from 'react-use'
const Contacto = () => {
  const [ifSend, setIfSend] = useState(false)
  const { register, handleSubmit } = useHookForm()
  const form = useRef()
  const onSubmit = (data) => {
    console.log(data)
    setIfSend(true)
    setTimeout(() => {
      setIfSend(false)
      form.current.reset()
    }, 2000)
  }
  const className = useCss({
    '@media (max-width: 992px)': {
      height: '200px',
      width: '320px'
    }
  })
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col xs={'auto'} className="mx-auto pt-3 pt-lg-0">
                    <Card.Img
                      className={`${className} object-fit-cover`}
                      src="./img/logo.jpeg"
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Card.Body>
                  <Card.Title className="text-center">Contactanos</Card.Title>
                  <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="contactoAsunto">
                      <Form.Label>Asunto: *</Form.Label>
                      <Form.Control
                        {...register('contactoAsunto')}
                        type="text"
                        autoComplete='off'
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactoNombresApellidos">
                      <Form.Label>Nombres y Apellidos: *</Form.Label>
                      <Form.Control
                        {...register('contactoNombresApellidos')}
                        type="text"
                        autoComplete='off'
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactoEmail">
                      <Form.Label>Correo Electronico: *</Form.Label>
                      <Form.Control
                        {...register('contactoEmail')}
                        type="email"
                        autoComplete='off'
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Mensaje: *</Form.Label>
                      <Form.Control
                        {...register('contactoMensaje')}
                        as="textarea"
                        rows={3}
                        required
                      />
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button
                        variant="outline-success"
                        type="submit"
                        {...{
                          disabled: ifSend
                        }}
                      >
                        {!ifSend
                          ? (
                              'Enviar'
                            )
                          : (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />{' '}
                            Enviando...
                          </>
                            )}
                      </Button>
                    </div>
                  </Form>

                  <Alert className="mt-3" show={ifSend} variant={'info'}>
                    !Gracias por contactarnos!
                  </Alert>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contacto
