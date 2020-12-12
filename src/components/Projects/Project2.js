import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import { FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import { DiNodejsSmall, DiMongodb } from "react-icons/di";
import { ReactComponent as ExpressJs} from '../../media/icons/expressjs.svg'

import demo from '../../media/video/flixr-demo.mp4'
import img1 from '../../media/images/flixr-landing.png'
import img2 from '../../media/images/flixr-playlist.png'

const Project2 = () => {
  return(
    <Container fluid
      className="proj-container">
      <div className="proj-header">
        <h1 className="pheader">FLIXR</h1>
        <p className="pdesc">Flixr is a cinematic search engine powered by user responses to a simple this or that quizlet that generates movie choices to best match the user's current mood and interests. Flixr users are able to create their customized watchlist and also have the ability to see other user's playlists.</p>
        <div className="proj-button row flex-row">
          <div className='pbuttoncontainer'>
            <button className="pbutton"><Link className="plink" target="_blank" to="https://flixr.herokuapp.com/">SEE WEBSITE</Link></button>
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
          <video
              autoPlay
              playsInline 
              muted 
              controls={false}
              loop
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
      </Carousel>
      <div className="proj-description">
        <h2 className="desc-header">BACKGROUND</h2>
        <p className="desc-content">Flixr was created for users who are in search of the perfect movie to watch but are overwhelmed with the variety of choices. Flixr's unique algorithm solves this issue by providing movie choices based on the users quiz results. The Flixr app accesses The Movie Database filtering over thousands of movies but only providing choices relevant to the user.</p>

        <h2 className="desc-header">TARGET USERS</h2>
        <p className="desc-content">
          <li>Film explorers</li>
          <li>Netflix/Hulu/Prime/HBO/Disney+ members</li>
        </p>

        <h2 className="desc-header">CHALLENGES</h2>
        <p className="desc-content">Flixr is my second project where I pair-programmed with <a href="https://github.com/cooperama" className="cohort" rel="noreferrer" target="_blank">Jia Cooper</a>. Accessing The Movie Database seemed to be the biggest challenge – this was solved using async/await Axios calls.</p>
        <p className="desc-content">In the future, I'd like to configure this app to be mobile-responsive allowing users to search and create watchlists on the go.</p>

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
                <DiMongodb/>
                <div className="picon-label">MongoDB</div>
              </div>
              <div className="picon">
                <ExpressJs/>
                <div className="picon-label">Express.js</div>
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

export default Project2;