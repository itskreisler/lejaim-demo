import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const TagFooter = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <footer className="text-center bg-primary rounded p-3">
            Made with ❤️ by{' '}
            <a
              className="text-white"
              href="https://github.com/itskreisler/lejaim-demo"
              target="_blank"
              rel="noreferrer"
            >
              Le Jaim Team
            </a>
          </footer>
        </Col>
      </Row>
    </Container>
  )
}

export default TagFooter
