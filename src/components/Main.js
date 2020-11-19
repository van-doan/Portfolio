// Functional Imports
import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import {CARD_LICENSE_KEY} from '../.env/key'

// Importing Media
import video from '../media/video/van-doan-loop.mp4';
import gh from '../media/images/gh-icon.png';
import li from '../media/images/li-icon.png';
import mail from '../media/images/mail-icon.png';
import arrow from '../media/images/down-arrow.png';


const anchors = ["Intro", "Projects", "Art"];
const pluginWrapper = () => {
  require('../static/fullpage.cards.min');
};

const Main = () => (
  <ReactFullpage
  pluginWrapper = {pluginWrapper}
  anchors = {anchors}
  navigation
  navigationTooltips = {anchors}
  scrollingSpeed = {600}
  cards = {true}
  cardsOptions = {{perspective: 150, fadeContent: true, fadeBackground: true}}
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
            <source src={video} type="video/mp4"></source>
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
          <input className="home" type="button" onClick={() => fullpageApi.moveSectionDown()} value="VAN DOAN" alt="home"></input>
        </nav>
        <div className="fp-content content1">
          <div className="projects-container">
              <div className="project-one">
                <p>Testing</p>
              </div>
          </div>
        </div>
      </div>
      <div className="section" id="section3">
      <nav className="home-nav">
          <input className="home" type="button" onClick={() => fullpageApi.moveSectionDown()} value="VAN DOAN" alt="home"></input>
        </nav>
        <div className="fp-content content2">
          <div className="projects-container">
              <div className="project-two">
                <p>Testing</p>
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