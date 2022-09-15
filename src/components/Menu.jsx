import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { appPages } from '../pages/urls'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Col, Row } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
const Menu = () => {
  const { pathname } = useLocation()
  const [activeMenu] = useState(true)
  const logo = './img/logo.jpeg'
  const navigateTo = useNavigate()
  const temp = appPages.find(({ url, title }) => url === pathname && { title })
  useEffect(() => {
    !temp && navigateTo('/')
    document.title = `Le jaim | ${temp?.title}`
  }, [temp])
  const TagListMenu = () => {
    return appPages.map(({ url, title }, index) => {
      return (
        <Nav.Link active={pathname === url}
          key={index}
          href={'#' + url}
        >
          <span className='h5'>{title}</span>
        </Nav.Link>
      )
    })
  }
  return (
    <>
      <Navbar bg="" expand="lg" collapseOnSelect={activeMenu}>
        <Container>
          <Navbar.Brand href="#/">
            <img
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top object-fit-cover rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <TagListMenu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='d-lg-none'>
        <Row>
          <Col>
            <hr />
            <Breadcrumb>
              <Breadcrumb.Item href="#/">Le Jaim</Breadcrumb.Item>
              <Breadcrumb.Item active>
                {temp?.title}
              </Breadcrumb.Item>
            </Breadcrumb>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Menu
