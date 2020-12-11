import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import img1 from '../../media/images/vandoan-landing.png'
import img2 from '../../media/images/vandoan-about.png'
import img3 from '../../media/images/vandoan-projects.png'

import { FaSass, FaHtml5, FaFigma, FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Project5 = () => {
  return(
    <Container 
      className="proj-container">
      <div className="proj-header">
        <h1 className="pheader">VAN DOAN</h1>
        <p className="pdesc">Van Doan is a constantly evolving portfolio created by Andy Van Doan. The intention of Van Doan is to market my brand, to exhibit technology I've recently utilized, and to display my programming experience &amp; work to the curious few willing to explore.</p>
        <div className="proj-button row flex-row">
          <div className='pbuttoncontainer'>
            <button className="pbutton"><Link className="plink" to="/">SEE WEBSITE</Link></button>
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
        <p className="desc-content">Van Doan was created to share my programming/artistic journey with anyone. The design was originally imagined with the focus on a sleek, minimalistic interface and seamless functionality to allow users to easily navigate from page to page.</p>

        <h2 className="desc-header">TARGET USERS</h2>
        <p className="desc-content">
          <li>Employers</li>
          <li>Collaborators</li>
        </p>

        <h2 className="desc-header">CHALLENGES</h2>
        <p className="desc-content">I started Van Doan in the middle of my bootcamp with General Assembly. At the time, I had limited knowledge on how to utilize React and implement the features I wanted. Firebase is also a new back-end technology that I implemented with this application. With what I've learned, I plan on continuously developing this piece to further incorporate future projects and other artistic ventures.</p>

        <h2 className="desc-header">TOOLS &amp; TECHNOLOGY</h2>
        <p className="desc-content">
        <div className="proj-icons">
            <div className="picon">
              <FaHtml5/>
              <div className="picon-label">HTML5</div>
            </div>
            <div className="picon">
              <FaSass/>
              <div className="picon-label">Sass</div>
            </div>
            <div className="picon">
              <FaReact/>
              <div className="picon-label">React</div>
            </div>
            <div className="picon">
              <SiFirebase/>
              <div className="picon-label">Firebase</div>
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

export default Project5;