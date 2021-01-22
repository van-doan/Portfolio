import React, { useState } from 'react';
import {NavLink, useRouteMatch, withRouter} from 'react-router-dom';
import classNames from 'classnames';
import ProjectNavbar from './ProjectNavbar'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
// import Fade from 'react-bootstrap/Fade'

import Project1 from './Projects/Project1'
import Project2 from './Projects/Project2'
import Project3 from './Projects/Project3'
import Project4 from './Projects/Project4'
import Project5 from './Projects/Project5'

const Projects = (props) => {
  const [open, setOpen] = useState(false);
  const { url } = useRouteMatch();
  const [activeKey, setActiveKey] = useState(props.match.params.id);

  const toggle = key => {
    if(activeKey !== key){
      setActiveKey(key);
    }  
  }

  return(
    
    <Container fluid
      className="project-container">
        <ProjectNavbar/>
    <Tab.Container
      id="tab"
      className="tab-container"
      defaultActiveKey={activeKey}
      >
      <div
        className="tab-row">
        <Col
          className="col-tabs">
        <Nav className="project-tabs">
          <Nav.Item 
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="proj-name">
            <Nav.Link 
              className={classNames({active : activeKey === 'pokegotchi'})}
              onClick={() => {toggle('pokegotchi');}}
              as= {NavLink}
              to={`${url}/pokegotchi`}
              eventKey="pokegotchi"
              exact
              >
              POKEGOTCHI
            </Nav.Link>
          </Nav.Item>
          <Nav.Item 
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="proj-name">
            <Nav.Link 
              className={classNames({active : activeKey === 'flixr'})}
              onClick={() => {toggle('flixr');}}
              as= {NavLink}
              to={`${url}/flixr`}
              eventKey="flixr"
              >
              FLIXR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item 
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="proj-name">
            <Nav.Link 
              className={classNames({active : activeKey === 'eo-wayfarer'})}
              onClick={() => {toggle('eo-wayfarer');}}
              as= {NavLink}
              to={`${url}/eo-wayfarer`}
              eventKey="eo-wayfarer"
              >
              EO-WAYFARER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item 
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="proj-name">
            <Nav.Link 
              className={classNames({active : activeKey === 'etelage'})}
              onClick={() => {toggle('etelage');}}
              as= {NavLink}
              to={`${url}/etelage`}
              eventKey="etelage"
              >
              ETELAGE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item 
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="proj-name">
            <Nav.Link 
              className={classNames({active : activeKey === 'portfolio'})}
              onClick={() => {toggle('portfolio');}}
              as= {NavLink}
              to={`${url}/portfolio`}
              eventKey="portfolio"
              >
              VAN DOAN
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </Col>
        <Col
          className="col-content">
        <Tab.Content>
          <Tab.Pane
            eventKey="pokegotchi"
            className="proj-content">
              
              {/* <Fade in={open}> */}
                {/* <Project1/> */}
              {/* </Fade> */}
              {activeKey === 'pokegotchi' ? <Project1/> : null}
          </Tab.Pane>
          <Tab.Pane
            eventKey="flixr"
            className="proj-content">
              {/* <Fade in={open}> */}
                {/* <Project2/> */}
              {/* </Fade> */}
              {activeKey === 'flixr' ? <Project2/> : null}
          </Tab.Pane>
          <Tab.Pane
            eventKey="eo-wayfarer"
            className="proj-content">
              {/* <Fade in={open}> */}
                {/* <Project3/> */}
              {/* </Fade> */}
              {console.log(activeKey)}
              {activeKey === 'eo-wayfarer' ? <Project3/> : null}
          </Tab.Pane>
          <Tab.Pane
            eventKey="etelage"
            className="proj-content">
              {/* <Fade in={open}>   */}
                {/* <Project4/> */}
              {/* </Fade> */}
              {activeKey === 'etelage' ? <Project4/> : null}
          </Tab.Pane>
          <Tab.Pane
            eventKey="portfolio"
            className="proj-content">
              {/* <Fade in={open}> */}
                {/* <Project5/> */}
              {/* </Fade> */}

              {activeKey === 'portfolio' ? <Project5/> : null}
          </Tab.Pane>
        </Tab.Content>
        </Col>
      </div>
    </Tab.Container>
    </Container>
  )
}

export default withRouter(Projects)