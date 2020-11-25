// Functional Imports
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// import {CARD_LICENSE_KEY} from '../.env/key'

// Importing Media
import video from '../media/video/van-doan-loop.mp4';
import gh from '../media/images/gh-icon.png';
import li from '../media/images/li-icon.png';
import mail from '../media/images/mail-icon.png';
import arrow from '../media/images/down-arrow.png';
import p1 from '../media/images/pokegotchi-main-screen.png'
import p2 from '../media/images/wayfarer-city.png'
import p3 from '../media/images/flixr-playlist.png'
import p4 from '../media/images/happy-ghost.png'


const anchors = ["Intro", "Projects", "Art"];
const pluginWrapper = () => {
  require('../static/fullpage.cards.min');
};

const Main = () => (
  <ReactFullpage
  // Required Extension Wrapper
  pluginWrapper = {pluginWrapper}
  // Page Navigation States
  anchors = {anchors}
  navigation = {true}
  navigationTooltips = {anchors}
  scrollingSpeed = {600}
  showActiveTooltip = {true}
  // Card States
  cards = {true}
  cardsOptions = {{perspective: 200, fadeContent: true, fadeBackground: true}}

  // Project Slides
  slidesNavigation = {true}
  controlArrows = {false}
  lazyLoading = {true}


  // License Key ** After Deployment **
  // licenseKey = {CARD_LICENSE_KEY}
  
  render={({ state, fullpageApi }) => {
    return (
    <ReactFullpage.Wrapper>
    <div id="fullpage-wrapper" class="content">
      <div className="section" id="section1">
        <div className="title-content">
          <h1 className="name">van doan</h1>
          <h2 className="desc-one">creative tech / software engineer</h2>
          <h3 className="desc-two">based in Chicago</h3>
        </div>
        <div className="dark-mode-switch">
        </div>
        <div className="video-container">
          <video id="video" autoPlay muted loop data-keepplaying>
            <source data-src={video} type="video/mp4"></source>
          </video>
        </div>
      <div className="contact-list">
        <img src={mail} alt="email"/>
        <img src={gh} alt="github"/>
        <img src={li} alt="linkedin"/>
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
        <div className="fp-content content1">
          <div className="projects-container">
            <div className="project-card">
              <div className="project-img">
                <img data-src={p1} className="project-img" /> 
              </div>
              <div className="proj-container">
              </div>
            </div>   
            <div className="project-card">
              <img data-src={p2} className="project-img" /> 
            </div> 
          </div> 
          <div className="projects-container">
            <div className="project-card">
              <img data-src={p3} className="project-img" /> 
            </div>  
            <div className="project-card">
              <img data-src={p4} className="project-img" /> 
            </div>  
          </div>
        </div>
      </div>
    </div>
    </ReactFullpage.Wrapper>
    );
  }}
/>
);

export default Main;