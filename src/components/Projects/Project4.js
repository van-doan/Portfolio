import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import demo from '../../media/video/etelage-demo.mp4'
import img1 from '../../media/images/etelage-landing.png'
import img2 from '../../media/images/etelage-search.png'
import img3 from '../../media/images/etelage-home.png'

import { FaSass, FaHtml5, FaFigma, FaReact } from "react-icons/fa";
import { DiNodejsSmall, DiMongodb } from "react-icons/di";
import { ReactComponent as ExpressJs} from '../../media/icons/expressjs.svg'

const Project4 = () => {
  return(
    <Container fluid
      className="proj-container">
      <div className="proj-header">
        <h1 className="pheader">ETELAGE</h1>
        <p className="pdesc">Etelage blends the concept of social media and art curation into one immersive platform where users can create and share exhibits displayed in 3D or virtual reality.</p>
        <div className="proj-button row flex-row">
          <div className='pbuttoncontainer'>
            <button className="pbutton"><Link className="plink" to="#">UNDER CONSTRUCTION</Link></button>
          </div>
          <div className="pdiscretion">
            <p className="pdisc">This Site is Under Construction</p>
            <p className="pdisc"><a href="mailto:van-doan@outlook.com">Send Me an Email to Receive Updates When It's Back Up!</a></p>
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
            <video
              autoPlay 
              playsInline
              muted 
              loop
              controls={false}
              className="proj-img d-block w-100"
              alt="Slide 1">
              <source 
              src={demo} 
              type="video/mp4">
              </source>
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="proj-img d-block w-100"
              src={img1}
              alt="Slide 2"
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
              alt="Slide 3"
            />
          </Carousel.Item>
      </Carousel>
      <div className="proj-description">
        <h2 className="desc-header">BACKGROUND</h2>
        <p className="desc-content">Etelage is a solo project created for users to learn and appreciate existing art and other user's aesthetic on a fully interactive platform. Etelage accesses several APIs including the Harvard's Art Museum API, the MET Museum API, and Artsy's API allowing users access to several thousands of exhibits and artwork.</p>

        <h2 className="desc-header">TARGET USERS</h2>
        <p className="desc-content">
          <li>Artists, Aspiring Artists &amp; Art Enthusiasts</li>
          <li>First-time Art Explorers</li>
          <li>Avid Museum Goers</li>
          <li>Interior Designers</li>
          <li>Artsy Members</li>
        </p>

        <h2 className="desc-header">CHALLENGES</h2>
        <p className="desc-content">Etelage was developed in less than 3 days leaving missing components and key pieces to the full immersive experience. With more time, the application would have all features mentioned with the ability for users to fully customize their exhibit experiences.</p>
        <p className="desc-content">This project is still in development where I plan on configuring the application to be a mobile-app, develop smart algorithms to better customize a user's feed, and incorporate further customization abilities for a user's immersive exhibit experience.</p>

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
              <DiMongodb/>
              <div className="picon-label">MongoDB</div>
            </div>
            <div className="picon">
              <ExpressJs/>
              <div className="picon-label">Express</div>
            </div>
            <div className="picon">
              <FaReact/>
              <div className="picon-label">React</div>
            </div>
          </div>
        </p>
        <p className="desc-content">
            <div className="proj-icons">
              <div className="picon">
                <DiNodejsSmall/>
                <div className="picon-label">Node.js</div>
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

export default Project4;