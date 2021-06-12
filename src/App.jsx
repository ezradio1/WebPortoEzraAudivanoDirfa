import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Download,
  Instagram,
  Linkedin,
  Whatsapp,
  Github,
} from 'react-bootstrap-icons';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import './style.css';

import LogoNav from './assets/logo-nav.png';
import Foto from './assets/foto.png';
import Foto2 from './assets/foto-2.png';
import Pdf from './assets/CV-EzraAudivanoDirfa.pdf';

const App = () => {
  return (
    <div className='myContent'>
      <Navbar
        // className='shadow'
        fixed='top'
        collapseOnSelect
        expand='lg'
        style={{
          backgroundColor: '#11100f',
          alignItems: 'center',
          display: ' flex',
        }}
        variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <Image src={LogoNav} style={{ width: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#about' className='nav-menu'>
                about
              </Nav.Link>
              <Nav.Link href='#blog' className='nav-menu'>
                blog
              </Nav.Link>
              <Nav.Link href='#skill' className='nav-menu'>
                skill
              </Nav.Link>
              <Nav.Link href='#contact' className='nav-menu'>
                contact
              </Nav.Link>
              <Nav.Link href='#contact' className='nav-menu'>
                <Button size='sm'>contact</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='sectionOne' id='home'>
        <Container>
          <div>
            <Row className='align-items-center'>
              <Col md={6} sm={12}>
                <div className='contentLeft'>
                  <hr />
                  <p className='title'>
                    Hi, Welcome to my <span>hut.</span>
                  </p>
                  <br />
                  <p className='subtitle'>
                    My name is Ezra Audivano Dirfa. Web developer and mobile
                    developer based in Surakarta, Indonesia. I also really like
                    web design and UI/UX. Apart from that, sometimes I also make
                    music in my spare time.
                  </p>
                </div>
                <br />
                <div className='button'>
                  <Button>
                    <a href='#contact'>contact</a>
                  </Button>
                  <Button className='dwnCV'>
                    <a href={Pdf} target='_blank' download>
                      Download CV
                    </a>
                    <Download />
                  </Button>
                </div>
                <br />
                <div className='sosmed'>
                  <Row className='align-items-center'>
                    <Col md={1} xs={4}>
                      <Button variant='secondary'>
                        <a
                          href='https://www.instagram.com/ezradio1/'
                          rel='noopener noreferrer'
                          target='_blank'>
                          <Instagram className='iconSosMed' />
                        </a>
                      </Button>
                    </Col>
                    <Col md={1} xs={4}>
                      <Button variant='secondary'>
                        <a
                          href='https://www.linkedin.com/in/ezra-audivano-5580881a0/'
                          rel='noopener noreferrer'
                          target='_blank'>
                          <Linkedin className='iconSosMed' />
                        </a>
                      </Button>
                    </Col>
                    <Col md={1} xs={4}>
                      <Button variant='secondary'>
                        <a
                          href='https://wa.me/6288227292405'
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Whatsapp className='iconSosMed' />
                        </a>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className='d-flex justify-content-center'>
                  <Image className='foto' src={Foto} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className='sectionTwo' id='about'>
        <Container>
          <p className='title'>About Me</p>
          <Container>
            <Row className='align-items-center'>
              <Col md={6} sm={12}>
                <div className='divFoto'>
                  <Image className='foto' src={Foto2} />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className='content'>
                  <p className='titletwo'>Who am I ?</p>
                  <hr />
                  <p>
                    I am a student from Atma Jaya University Yogyakarta with
                    Informatics study program. I live in the city of Surakarta.
                    Currently, apart from college, I also work on several
                    projects and become a freelancer.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      <div className='contact' id='contact'>
        <p className='title'>Contact</p>
        <div className='iconsosmed'>
          <Row className='justify-content-center align-items-center'>
            <Col md={2} xs={0}></Col>
            <Col md={2} xs={3}>
              <div className='divIco'>
                <Button variant='secondary'>
                  <a
                    href='https://www.instagram.com/ezradio1/'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <Instagram className='iconSosMed' />
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={2} xs={3}>
              <div className='divIco'>
                <Button variant='secondary'>
                  <a
                    href='https://www.linkedin.com/in/ezra-audivano-5580881a0/'
                    rel='noopener noreferrer'
                    target='_blank'>
                    <Linkedin className='iconSosMed' />
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={2} xs={3}>
              <div className='divIco'>
                <Button variant='secondary'>
                  <a
                    href='https://wa.me/6288227292405'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Whatsapp className='iconSosMed' />
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={2} xs={3}>
              <div className='divIco'>
                <Button variant='secondary'>
                  <a
                    href='https://github.com/ezradio1'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Github className='iconSosMed' />
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={2} xs={0}></Col>
          </Row>
        </div>
      </div>
      <div className='footer'>
        <p>ezraad © 2021 by Ezra Audivano Dirfa</p>
      </div>
    </div>
  );
};

export default App;
