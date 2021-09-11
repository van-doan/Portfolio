import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import { FaCss3Alt, FaHtml5, FaFigma, FaJs } from "react-icons/fa";

import img1 from '../../media/images/pokegotchi-main-screen.png'
import img2 from '../../media/images/pokegotchi-ingame.png'
import img3 from '../../media/images/pokegotchi-sprite-dev.png'

const Project1 = () => {
  return(
    <Container fluid
      className="proj-container">
      <div className="proj-header">
        <h1 className="pheader">POKEGOTCHI</h1>
        <p className="pdesc">Pokégotchi is a spin-off concept of Pokémon and Tamagotchi set in a post-apocalyptic era. Ensuring the Pokégotchi's survival is the user's job. The Pokégotchi may also evolve when meeting certain levels. When the Pokégotchi dies, the game ends.</p>
        <div className="proj-button row flex-row">
          <div className='pbuttoncontainer'>
            <button className="pbutton"><a className="plink" target="_blank" rel="noreferrer" href="https://pokegotchi-app.herokuapp.com/">SEE WEBSITE</a></button>
          </div>
          <div className="pdiscretion">
            <p className="pdisc">Not Mobile-Responsive</p>
            <p className="pdisc">Best Viewed in Browser</p>
          </div>
        </div>
      </div>
      <Carousel
        className="proj-carousel"
         fade={true}
         autoPlay={false}
         interval={null}
         >
          <Carousel.Item>
            <img
              className="proj-img d-block w-100"
              src={img1}
              alt="Slide 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="proj-img d-block w-100"
              src={img2}
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="proj-img d-block w-100"
              src={img3}
              alt="Slide 2"
            />
          </Carousel.Item>
      </Carousel>
      <div className="proj-description">
        <h2 className="desc-header">BACKGROUND</h2>
        <p className="desc-content">Pokégotchi incorporates earlier versions of Pokémon's load screen as the landing page. For the in-game interface, the GameBoy Color's structural design will serve as the user's main point of focus. All art besides the background images on the landing page and the in-game interface is originally created.</p>

        <h2 className="desc-header">TARGET USERS</h2>
        <p className="desc-content">
          <li>Game Enthusiasts</li>
        </p>

        <h2 className="desc-header">CHALLENGES</h2>
        <p className="desc-content">Pokégotchi is my first coding project where I had to navigate when and why events would be executed – which I solved with async/await functions and watching numerous tutorials.</p>
        <p className="desc-content">Revisiting this project, I'd like to configure the entire app to be completely responsive to all viewports with a focus on mobile devices incorporating touch functionality for smart phone/tablet users.</p>

        <h2 className="desc-header">TOOLS &amp; TECHNOLOGY</h2>
        <p className="desc-content">
          <div className="proj-icons">
            <div className="picon">
              <FaHtml5/>
              <div className="picon-label">HTML5</div>
            </div>
            <div className="picon">
              <FaCss3Alt/>
              <div className="picon-label">CSS3</div>
            </div>
            <div className="picon">
              <FaJs/>
              <div className="picon-label">Javascript</div>
            </div>
            <div className="picon">
              <FaFigma/>
              <div className="picon-label">Figma</div>
            </div>
          </div>
        </p>
      </div>
    </Container>
  )
}

export default Project1;