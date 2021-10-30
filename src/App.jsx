import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Download,
  Instagram,
  Linkedin,
  Whatsapp,
  Github,
  ArrowRightShort,
  ArrowLeftShort,
  ArrowBarDown,
} from 'react-bootstrap-icons';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Image,
  Row,
  Col,
  Tab,
  Fade,
  Card,
  Carousel,
  Collapse,
} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import './style.css';
import { motion } from 'framer-motion';
import LogoNav from './assets/logo-nav.png';
import Foto from './assets/foto.png';
import Foto2 from './assets/foto-2.png';
import Pdf from './assets/CV-EzraAudivanoDirfa.pdf';

import Html from './assets/skills/html.png';
import Css from './assets/skills/css.png';
import Js from './assets/skills/js.png';
import Reactt from './assets/skills/react.png';
import Vue from './assets/skills/vue.png';
import Boot from './assets/skills/bootstrap.png';
import Vuetify from './assets/skills/vuetify.png';
import Antd from './assets/skills/antd.png';
import Laravel from './assets/skills/laravel.png';
import MySql from './assets/skills/mysql.png';
import Php from './assets/skills/php.png';
import Java from './assets/skills/java.png';
import Flutter from './assets/skills/flutter.png';
import Dart from './assets/skills/dart.png';
import Corel from './assets/skills/corel.png';
import Figma from './assets/skills/figma.png';
import Photoshop from './assets/skills/ps.png';

import Akb from './assets/project/akb.png';
import AkbMobile from './assets/project/mobile.png';
import Imoov from './assets/project/imoov.png';

import dataProject from './dataProject';

import { useEffect } from 'react';

const App = () => {
  const [key, setKey] = useState('home');
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState('fe');
  const [listSk, setListSkill] = useState(['fe', 'be', 'mb', 'ui']);
  useEffect(() => {});

  const onNext = () => {
    var item = listSk.indexOf(skill);
    if (item === 3) {
      setSkill('fe');
    } else {
      setSkill(listSk[listSk.indexOf(skill) + 1]);
    }
  };

  const onPrev = () => {
    var item = listSk.indexOf(skill);
    if (item === 0) {
      setSkill('ui');
    } else {
      setSkill(listSk[listSk.indexOf(skill) - 1]);
    }
  };

  const onOverview = () => {
    setOpen(!open);
  };

  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
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
              <Nav.Link href='#skill' className='nav-menu'>
                skill
              </Nav.Link>
              <Nav.Link href='#project' className='nav-menu'>
                project
              </Nav.Link>
              <Nav.Link href='#contact' className='nav-menu contactNav'>
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
                  <motion.hr
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.p
                    className='title'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Hi, Welcome to my <span>hut.</span>
                  </motion.p>
                  <br />
                  <motion.p
                    className='subtitle'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}>
                    My name is Ezra Audivano Dirfa. Web developer and mobile
                    developer based in Surakarta, Indonesia. I also really like
                    web design and UI/UX. Apart from that, sometimes I also make
                    music in my spare time.
                  </motion.p>
                </div>
                <br />

                <motion.div
                  className='button'
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}>
                  <Button style={{ marginRight: '10px' }}>
                    <a href='#contact'>contact</a>
                  </Button>
                  <a href={Pdf} target='_blank' download>
                    <Button className='dwnCV'>
                      Download CV
                      <span>
                        <Download />
                      </span>
                    </Button>
                  </a>
                </motion.div>
                <br />
                <div className='sosmed'>
                  <Row className='align-items-center'>
                    <Col md={1} xs={4}>
                      <Button variant='secondary'>
                        <motion.a
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.5 }}
                          href='https://www.instagram.com/ezradio1/'
                          rel='noopener noreferrer'
                          target='_blank'>
                          <Instagram className='iconSosMed' />
                        </motion.a>
                      </Button>
                    </Col>
                    <Col md={1} xs={4}>
                      <Button variant='secondary'>
                        <motion.a
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.7 }}
                          href='https://www.linkedin.com/in/ezra-audivano-5580881a0/'
                          rel='noopener noreferrer'
                          target='_blank'>
                          <Linkedin className='iconSosMed' />
                        </motion.a>
                      </Button>
                    </Col>
                    <Col md={1} xs={4}>
                      <Button variant='secondary'>
                        <motion.a
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1.9 }}
                          href='https://wa.me/6288227292405'
                          target='_blank'
                          rel='noopener noreferrer'>
                          <Whatsapp className='iconSosMed' />
                        </motion.a>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <motion.div
                  className='d-flex justify-content-end'
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}>
                  <Image className='foto' src={Foto} />
                </motion.div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className='sectionTwo' id='about'>
        <Container>
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='title'>
            About Me
          </motion.p>
          <Container>
            <Row className='align-items-center'>
              <Col md={6} sm={12}>
                <motion.div
                  className='d-flex justify-content-center'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                  <Image className='foto' src={Foto2} />
                </motion.div>
              </Col>
              <Col md={6} sm={12}>
                <div className='content'>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='titletwo'>
                    Who am I ?
                  </motion.p>
                  <motion.hr
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.p
                    className='d-flex justify-content-center'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}>
                    I am a student from Atma Jaya University Yogyakarta with
                    Informatics study program. I live in the city of Surakarta.
                    Currently, apart from college, I also work on several
                    projects and become a freelancer.
                  </motion.p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      <div className='sectionSkill' id='skill'>
        <Container>
          <p className='title'>Skill</p>
          <Container>
            <hr />
            <Container className='containerSkill'>
              <Row>
                <Col className='d-flex justify-content-end'>
                  <button onClick={onPrev}>
                    <motion.div whileHover={{ scale: 1.3 }}>
                      <ArrowLeftShort />
                    </motion.div>
                  </button>
                </Col>
                <Col>
                  {skill === 'fe' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}>
                      <p className='subtitle text-center'>front end</p>
                    </motion.div>
                  )}
                  {skill === 'be' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}>
                      <p className='subtitle text-center'>back end</p>
                    </motion.div>
                  )}
                  {skill === 'mb' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}>
                      <p className='subtitle text-center'>mobile</p>
                    </motion.div>
                  )}
                  {skill === 'ui' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}>
                      <p className='subtitle text-center'>ui/ux</p>
                    </motion.div>
                  )}
                </Col>
                <Col className='d-flex justify-content-start'>
                  <button onClick={onNext}>
                    <motion.div whileHover={{ scale: 1.3 }}>
                      <ArrowRightShort />
                    </motion.div>
                  </button>
                </Col>
              </Row>
            </Container>
            <hr />
            {skill === 'fe' && (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}>
                <Carousel autoPlay={true} interval={1000}>
                  <Carousel.Item>
                    <Row className='py-5' style={{ minHeight: '200px' }}>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Html} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Css} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Js} />
                        </div>
                      </Col>
                    </Row>
                    {/* <Carousel.Caption>
                  <h3>Language</h3>
                </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row className='py-5' style={{ minHeight: '200px' }}>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Boot} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Vuetify} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Antd} />
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row className='py-5' style={{ minHeight: '200px' }}>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Reactt} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Vue} />
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </motion.div>
            )}
            {skill === 'be' && (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <Row className='py-5'>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Php} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Laravel} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={MySql} />
                        </div>
                      </Col>
                    </Row>
                    {/* <Carousel.Caption>
                  <h3>Language</h3>
                </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </motion.div>
            )}
            {skill === 'mb' && (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <Row className='py-5'>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Java} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Dart} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Flutter} />
                        </div>
                      </Col>
                    </Row>
                    {/* <Carousel.Caption>
                  <h3>Language</h3>
                </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </motion.div>
            )}
            {skill === 'ui' && (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <Row className='py-5'>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Figma} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Photoshop} />
                        </div>
                      </Col>
                      <Col>
                        <div className='d-flex justify-content-center'>
                          <Image fluid src={Corel} />
                        </div>
                      </Col>
                    </Row>
                    {/* <Carousel.Caption>
                  <h3>Language</h3>
                </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </motion.div>
            )}

            <Row>
              <Col>
                <div className='d-flex justify-content-center'>
                  <p
                    className='details'
                    onClick={onOverview}
                    aria-controls='example-collapse-text'>
                    details <ArrowBarDown style={{ marginLeft: '7px' }} />
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <div className='d-flex justify-content-center'>
                <Collapse in={open}>
                  <Row>
                    <Col md={3} sm={12}>
                      <div className='d-flex justify-content-center'>
                        <Card
                          bg='dark'
                          text='dark'
                          style={{ width: '15rem', height: '18rem' }}
                          className='mb-2 shadow'>
                          <Card.Header
                            className='text-center'
                            style={{ color: 'white' }}>
                            Front-End
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              <Row>
                                <Col>
                                  <p>language</p>
                                </Col>
                                <Col>
                                  <p>HTML, CSS, Javascript</p>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <p>library</p>
                                </Col>
                                <Col>
                                  <p>React Js, Vue Js</p>
                                </Col>
                              </Row>
                              <Row className='align-items-center'>
                                <Col>
                                  <p>frameworks</p>
                                </Col>
                                <Col>
                                  <p>Bootstrap, Vuetify, ANTD</p>
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={3} sm={12}>
                      <div className='d-flex justify-content-center'>
                        <Card
                          bg='dark'
                          text='dark'
                          style={{ width: '15rem', height: '18rem' }}
                          className='mb-2 shadow'>
                          <Card.Header
                            className='text-center'
                            style={{ color: 'white' }}>
                            Back-End
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              <Row className='align-items-center'>
                                <Col>
                                  <p>language</p>
                                </Col>
                                <Col>
                                  <p>PHP, Javascript</p>
                                </Col>
                              </Row>
                              <Row className='align-items-center'>
                                <Col>
                                  <p>frameworks</p>
                                </Col>
                                <Col>
                                  <p>Laravel</p>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <p>database</p>
                                </Col>
                                <Col>
                                  <p>MySQL</p>
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={3} sm={12}>
                      <div className='d-flex justify-content-center'>
                        <Card
                          bg='dark'
                          text='dark'
                          style={{ width: '15rem', height: '18rem' }}
                          className='mb-2 shadow'>
                          <Card.Header
                            className='text-center'
                            style={{ color: 'white' }}>
                            Mobile
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              <Row>
                                <Col>
                                  <p>language</p>
                                </Col>
                                <Col>
                                  <p>Java, Dart</p>
                                </Col>
                              </Row>
                              <Row className='align-items-center'>
                                <Col>
                                  <p>frameworks</p>
                                </Col>
                                <Col>
                                  <p>Flutter</p>
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col md={3} sm={12}>
                      <div className='d-flex justify-content-center'>
                        <Card
                          bg='dark'
                          text='dark'
                          style={{ width: '15rem', height: '18rem' }}
                          className='mb-2 shadow'>
                          <Card.Header
                            className='text-center'
                            style={{ color: 'white' }}>
                            Tools
                          </Card.Header>
                          <Card.Body>
                            <Card.Text>
                              <Row>
                                <Col>
                                  <p className='text-center'>
                                    Visual Studio Code, GitHub, Terminal
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <p className='text-center'>
                                    Figma, Photoshop, Corel Draw
                                  </p>
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Col>
                  </Row>
                </Collapse>
              </div>
            </Row>
          </Container>
        </Container>
      </div>

      <div className='sectionProject' id='project'>
        <Container>
          <p className='title'>Project</p>
          <Tabs
            transition={Fade}
            id='controlled-tab-example'
            activeKey={key}
            onSelect={(k) => setKey(k)}>
            <Tab eventKey='home' title='Website'>
              <div className='projectWeb'>
                <Container>
                  {dataProject.map((val, idx) => {
                    return (
                      <Row className='align-items-center'>
                        <Col md={6} sm={12} className='untukWeb'>
                          {val.id % 2 != 0 ? (
                            <div className='fotoProject'>
                              <Image fluid src={val.img} />
                            </div>
                          ) : (
                            <div className='informasiProject'>
                              <h2>{val.title}</h2>
                              <hr />
                              <p>{val.content}</p>
                              <p>
                                Built using :<a>{val.built}</a>
                              </p>
                              <p>
                                Website
                                <a href={val.url} target='_blank'>
                                  : {val.url}
                                </a>
                              </p>
                            </div>
                          )}
                        </Col>
                        <Col md={6} sm={12}>
                          {val.id % 2 == 0 ? (
                            <div className='fotoProject'>
                              <Image fluid src={val.img} />
                            </div>
                          ) : (
                            <div className='informasiProject'>
                              <h2>{val.title}</h2>
                              <hr />
                              <p>{val.content}</p>
                              <p>
                                Built using :<a>{val.built}</a>
                              </p>
                              <p>
                                Website
                                <a href={val.url} target='_blank'>
                                  : {val.url}
                                </a>
                              </p>
                            </div>
                          )}
                        </Col>
                      </Row>
                    );
                  })}
                </Container>
              </div>
            </Tab>
            <Tab eventKey='profile' title='Mobile'>
              <div className='projectMob'>
                <Container>
                  <Row className='align-items-center'>
                    <Col md={6} sm={12}>
                      <div className='fotoProject'>
                        <Image fluid src={AkbMobile} />
                      </div>
                    </Col>
                    <Col md={6} sm={12}>
                      <div className='informasiProject'>
                        <h2>AKB Restaurant Mobile App</h2>
                        <hr />
                        <p>
                          This is a mobile-based application that was built to
                          make it easier for customers to order food. There are
                          several features such as: scanning qr before placing
                          an order, adding orders, editing orders, and ending
                          transactions.
                        </p>
                        <p>
                          Built using :<a>Dart, Flutter</a>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Tab>
          </Tabs>
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
