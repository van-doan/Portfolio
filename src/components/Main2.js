// Functional Imports
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';

import {CARD_LICENSE_KEY, LICENSE_KEY} from '../.env/key'

// Importing Media
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import video from '../media/video/van-doan-loop.mp4';
import arrow from '../media/images/down-arrow.png';
import p1 from '../media/images/van-doan-proj-img.jpeg'
import p2 from '../media/images/wayfarer-city.png'
import p3 from '../media/images/flixr-playlist.png'
import p4 from '../media/images/etelage-search.png'
import p5 from '../media/images/vandoan-projects.png'

const anchors = ["Intro", "Projects"];
const pluginWrapper = () => {
  require('../static/fullpage.cards.min');
};

const Main2 = () => (

  <ReactFullpage
  // License Key ** After Deployment **
  pluginWrapper = {pluginWrapper}
  licenseKey = {LICENSE_KEY}
  // Required Extension Wrapper
  // Page Navigation States
  anchors = {anchors}
  navigation = {true}
  navigationTooltips = {anchors}
  scrollingSpeed = {600}
  showActiveTooltip = {true}
  // Card States
  cardsKey = {CARD_LICENSE_KEY}
  cards = {true}
  cardsOptions = {{perspective: 200, fadeContent: true, fadeBackground: true}}

  // Project Slides
  slidesNavigation = {true}
  controlArrows = {false}
  lazyLoading = {true}
  scrollOverflow={true}
  scrollBar={true}
  
  render={({ state, fullpageApi }) => {
    return (
    <ReactFullpage.Wrapper>
      <Navbar/>
      <div id="fullpage-wrapper" class="content">
        <div className="section" id="section1">
          <div className="title-content">
            <h1 className="name"><a href="/">van doan</a></h1>
            <h2 className="desc-one">creative tech / software engineer</h2>
            <h3 className="desc-two">based in Atlanta</h3>
          </div>
          <div className="dark-mode-switch">
          </div>
          <div className="video-container">
            <video id="video" 
            controls={false}
            playsInline 
            autoPlay 
            muted 
            loop 
            data-keepplaying>
              <source data-src={video} type="video/mp4"></source>
            </video>
          </div>
        <div className="contact-list">
          <a className="contact-icon" target="_blank" rel="noreferrer" href="mailto:van-doan@outlook.com"><FaEnvelope/></a>
          <a className="contact-icon" target="_blank" rel="noreferrer" href="https://github.com/van-doan"><FaGithub /></a>
          <a className="contact-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andyvdoan/"><FaLinkedin /></a>
        </div>
        <div className="v1-container"></div>
          <div className="arrow-div">
            <input className="arrow" type="image" onClick={() => fullpageApi.moveSectionDown()} src={arrow} alt="arrow"></input>
          </div>
        </div>

        <div className="section" id="section2">
          <nav className="home-nav">
            <input className="home" type="button" onClick={() => fullpageApi.moveTo('Intro', 0)} value="VAN DOAN" alt="home"></input>
          </nav>
            <div className="img-container">
            </div>
          <div className="fp-content content1">
            <div className="projects-container">
              <div className="projects-div">
                <div className="project-card">
                    <div className="proj-title-container">
                      <h2 className="proj-title">Studio Chimera</h2>
                    </div>
                  <a className="project-link" target="_blank" rel="noreferrer" href="https://eo-wayfarer.herokuapp.com/"><img data-src={p2} className="project-img" alt="" />
                  </a> 
                </div> 
                <div className="proj-container">
                  <div className="proj">
                    <div className="proj-line-container"></div>
                      <div className="proj-line-text">
                        <a className="proj-a" href="/work/projects/eo-wayfarer">
                          <h4 className="proj-text">Info</h4>
                        </a>
                      </div>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="proj-title-container">
                  <h2 className="proj-title">Redswitch LLC</h2>
                </div>
                <a className="project-link" target="_blank" rel="noreferrer" href="https://eo-wayfarer.herokuapp.com/"><img data-src={p2} className="project-img" alt="" />
                </a> 
              </div> 
              <div className="proj-container">
                <div className="proj">
                  <div className="proj-line-container"></div>
                    <div className="proj-line-text">
                      <a className="proj-a" href="/work/projects/eo-wayfarer">
                        <h4 className="proj-text">Info</h4>
                      </a>
                    </div>
                </div>
              </div>
              <div className="project-card">
                <div className="proj-title-container">
                  <h2 className="proj-title">CORL Technologies</h2>
                </div>
                <a className="project-link" target="_blank" rel="noreferrer" href="https://eo-wayfarer.herokuapp.com/"><img data-src={p2} className="project-img" alt="" />
                </a> 
              </div> 
              <div className="proj-container">
                <div className="proj">
                  <div className="proj-line-container"></div>
                    <div className="proj-line-text">
                      <a className="proj-a" href="/work/projects/eo-wayfarer">
                        <h4 className="proj-text">Info</h4>
                      </a>
                    </div>
                </div>
              </div> 
              <div className="project-archive-card">
                <div className="proj-title-container">
                  <h2 className="proj-archives"><a href="/work/projects/pokegotchi" className="archivedProjects">Archived Projects</a></h2>
                </div>
              </div> 
              <div className="project-spacer-container">
                <div className="project-spacer"></div> 
              </div>
          <Footer />
            </div> 
          </div>
        </div>
      </div>
    </ReactFullpage.Wrapper>
    );
  }}
/>
);

export default Main2;