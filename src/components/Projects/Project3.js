import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

import { FaCss3Alt, FaPython, FaFigma } from "react-icons/fa";
import { DiDjango, DiPostgresql } from "react-icons/di";
import { ReactComponent as Ejs} from '../../media/icons/ejs.svg'

import img1 from '../../media/images/wayfarer-landing.png'
import img2 from '../../media/images/wayfarer-city.png'
import img3 from '../../media/images/wayfarer-search.png'
import img4 from '../../media/images/wayfarer-city-details.png'
import img5 from '../../media/images/wayfarer-city-articles.png'

const Project3 = () => {
  return(
    <Container fluid
      className="proj-container">
      <div className="proj-header">
        <h1 className="pheader">EO-WAYFARER</h1>
        <p className="pdesc">Interactive traveling blog to post articles and learn from other user's experiences. Exploring Odyssey also offers an internal API hosting 60+ destinations including travel tips and important info before you venture into your next adventure.</p>
        <div className="proj-button row flex-row">
          <div className='pbuttoncontainer'>
            <button className="pbutton"><Link className="plink" target="_blank" to="https://eo-wayfarer.herokuapp.com/">SEE WEBSITE</Link></button>
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
              alt="Slide 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="proj-img d-block w-100"
              src={img4}
              alt="Slide 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="proj-img d-block w-100"
              src={img5}
              alt="Slide 5"
            />
          </Carousel.Item>
      </Carousel>
      <div className="proj-description">
        <h2 className="desc-header">BACKGROUND</h2>
        <p className="desc-content">EO-Wayfarer (aka "Wayfarer") was created for aspiring travelers and active adventurers. EO-Wayfarer helps provide users with tips and location information for incredible getaway destinations. Additionally, the app aims to cultivate a community of travelers to share their experiences and advice for those looking to travel to the same location.</p>

        <h2 className="desc-header">TARGET USERS</h2>
        <p className="desc-content">
          <li>TripAdvisor/Airbnb/Expedia/Kayak members</li>
          <li>Vacation planners</li>
          <li>Honeymooners</li>
          </p>

        <h2 className="desc-header">CHALLENGES</h2>
        <p className="desc-content">EO-Wayfarer was a group project where I led 3 other members: <a href="https://github.com/j-blaz3" className="cohort" rel="noreferrer" target="_blank">Justin Blalock</a>, <a href="https://github.com/kihwan-lee" className="cohort" rel="noreferrer" target="_blank">Kihwan Lee</a>, and <a href="https://github.com/bservent" className="cohort" rel="noreferrer" target="_blank">Brittany Servent</a>. This was a challenge in itself but through consistent communication and task delegation, we were able to effectively fulfill the client prompt and deliver a stunning travel application.</p>
        <p className="desc-content">In the future, I'd like to configure the app to be mobile-responsive and continue to build the internal API with restaurant, things-to-do, and places to stay data. Additionally, I'd like to integrate hotel, flight, and car rental services from external databases.</p>

        <h2 className="desc-header">TOOLS &amp; TECHNOLOGY</h2>
        <p className="desc-content">
        <div className="proj-icons">
            <div className="picon">
              <Ejs/>
              <div className="picon-label">Ejs</div>
            </div>
            <div className="picon">
              <FaCss3Alt/>
              <div className="picon-label">CSS3</div>
            </div>
            <div className="picon">
              <DiDjango/>
              <div className="picon-label">Django</div>
            </div>
            <div className="picon">
              <FaPython/>
              <div className="picon-label">Python</div>
            </div>
          </div>
        </p>
        <p className="desc-content">
            <div className="proj-icons">
              <div className="picon">
                <DiPostgresql/>
                <div className="picon-label">PostgreSQL</div>
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

export default Project3;