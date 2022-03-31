import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

type Props = {
  children?: ReactNode
  title?: string
}

export default function Layout ({ children, title = 'Titre par defaut' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
      </Head>
      
      <Navbar expand="lg" className="bg-secondary text-uppercase fixed-top" id="mainNav">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#/action-1">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="text-light" href="#/action-1">Portfolio</Nav.Link>
              <Nav.Link className="text-light" href="#/action-2">A propos</Nav.Link>
              {/* <Nav.Link className="text-light" href="#/action-3">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Container style={{minHeight: "93vh"}}> */}
        {children}
      {/* </Container> */}

      <footer className="footer text-center">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="mb-4">Adresse</h4>
                      <p className="lead mb-0">
                          Ducos
                          <br />
                          Martinique 972
                      </p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <h4 className="mb-4">LinkedIn</h4>
                      <a className="btn btn-outline-light btn-social mx-1" href="#"><FontAwesomeIcon icon={faNetworkWired} /></a>
                      {/* <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                      <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a> */}
                  </div>
                  <div className="col-lg-4">
                      <h4 className="mb-4">A propos</h4>
                      <p className="lead mb-0">
                      It's not about the destination it's about the journey
                      </p>
                  </div>
              </div>
          </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
          <div className="container"><small>Copyright &copy; 2022 - GORATECH</small></div>
      </div>
    </div>
  )
}
