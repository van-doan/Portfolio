import React from 'react';
import ProjectNavbar from './ProjectNavbar'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'
import Project5 from './Projects/Project5'

const Projects = () => {
  return(
    <Container fluid
      className="project-container">
        <ProjectNavbar/>
    <Tab.Container
      id="tab"
      className="tab-container"
      defaultActiveKey="first"
      >
      <div
        className="tab-row">
        <Col
          className="col-tabs">
        <Nav className="project-tabs">
          <Nav.Item className="proj-name">
            <Nav.Link eventKey="first">
              POKEGOTCHI
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="proj-name">
            <Nav.Link eventKey="second">
              FLIXR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="proj-name">
            <Nav.Link eventKey="third">
              EO-WAYFARER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="proj-name">
            <Nav.Link eventKey="fourth">
              ETELAGE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="proj-name">
            <Nav.Link eventKey="fifth">
              VAN DOAN
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </Col>
        <Col
          className="col-content">
        <Tab.Content>
          <Tab.Pane
            eventKey="first"
            className="proj-content">
              <Project1/>
          </Tab.Pane>
          <Tab.Pane
            eventKey="second"
            className="proj-content">
              <Project2/>
          </Tab.Pane>
          <Tab.Pane
            eventKey="third"
            className="proj-content">
              <Project3/>
          </Tab.Pane>
          <Tab.Pane
            eventKey="fourth"
            className="proj-content">
              <Project4/>
          </Tab.Pane>
          <Tab.Pane
            eventKey="fifth"
            className="proj-content">
              <Project5/>
          </Tab.Pane>
        </Tab.Content>
        </Col>
      </div>
    </Tab.Container>
    </Container>
  )
}

export default Projects