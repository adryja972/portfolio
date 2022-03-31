import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Image } from 'react-bootstrap'

export default function IndexPage() {

  return (
    <Layout title="Home | Next.js + TypeScript Example">

      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            {/* <img className="masthead-avatar mb-5" src="images/avatar.jpeg" alt="..." /> */}
            <Image className="masthead-avatar mb-5" src="images/avatar.jpeg" roundedCircle/>
            <h1 className="masthead-heading mb-0">Adry Joseph-Augustin</h1>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
              <div className="divider-custom-line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">Développeur Web - Programmeur</p>
        </div>
      </header>
      
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Mes projets</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row justify-content-center">
              <Card style={{ width: '26rem' }} className="col-md-6 col-lg-4 mb-5 mx-2">
                <Card.Img variant="top" src="images/gym.png" sizes="455px" className="mt-2"/>
                <Card.Body>
                  <Card.Title>App Muscu</Card.Title>
                  <Card.Text>
                    Application de musculation avec Next.JS
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/adryja972/fitlog">Demo</Button>
                </Card.Body>
              </Card>
              {/* <Card style={{ width: '26rem' }} className="col-md-6 col-lg-4 mb-5 mx-2">
                <Card.Img variant="top" src="images/cake.png" className="mt-2"/>
                <Card.Body>
                  <Card.Title>Nom du projet</Card.Title>
                  <Card.Text>
                    Description du projet
                    Description du projet
                    Description du projet
                  </Card.Text>
                  <Button variant="primary">Demo</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '26rem' }} className="col-md-6 col-lg-4 mb-5 mx-2">
                <Card.Img variant="top" src="images/circus.png" className="mt-2"/>
                <Card.Body>
                  <Card.Title>Nom du projet</Card.Title>
                  <Card.Text>
                    Description du projet
                    Description du projet
                    Description du projet
                  </Card.Text>
                  <Button variant="primary">Demo</Button>
                </Card.Body>
              </Card> */}
            </div>
        </div>
      </section>

      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">A propos</h2>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <div className="col-lg-4 ms-auto"><p className="lead">Je suis un jeune Martiniquais passionné d'informatique et en particulier de développement Web. J'utilise les languages PHP et Javascript. Les framework Laravel et Next.js me sont familiés.</p></div>
                <div className="col-lg-4 me-auto"><p className="lead">Je suis actuellement diplômé de SUPINFO (Bac +5) et je débute ma carrière en tant que développeur. <br /> Nésite pas à me contacter sur LinkedIn, je suis peut être le développeur que tu recherches ! </p></div>
            </div>
            {/* <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                    <i className="fas fa-download me-2"></i>
                    Free Download!
                </a>
            </div> */}
        </div>
      </section>
      
    </Layout>
  )
}
