import React, { useState, useRef } from 'react';
import useWindowDimensions from './WindowResize';


const HomeText = () => {
  return(
    <div className='page_content home'>
            <p className='home_aboutme'>
              <span>Born in 1994</span>
              <span>in Atlanta, Georgia.</span>
              <span>I am a front-end</span>
              <span>developer who</span>
              <span>incorporates years</span>
              <span>of applied</span>
              <span>IO Psychology &amp;</span>
              <span>product marketing</span>
              <span>experience into</span>
              <span>application design</span>
              <span>&amp; production.</span>
              <span>I am currently</span>
              <span>a product strategist</span>
              <span>at Aptitude.</span>
            </p>
          </div>
  )
}

// Project Variables //

let padding = 20
let maxTop = (padding*2) +125

const ProjectText = () => {
  const projectRef = useRef(null);
  const [top, setTop] = useState(maxTop);
  const { height, width } = useWindowDimensions();

  
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      
    } else {

    }
  }

  function checkScrollDirectionIsUp(event) {
    let newTop = top + event.deltaY;
    // fullHeight of page - maxTop = x
    // projectDivHeight - x = y
    // final: maxTop - (y + m*2)
    let startingTopDivDist = height - maxTop
    let overflowDivDist = projectRef.current.clientHeight- startingTopDivDist;
    let maxDistFromBottom = maxTop- (overflowDivDist +(padding*2))
    
    if(newTop>maxTop){
      setTop(maxTop);
    } else if (newTop>maxDistFromBottom){
      setTop(newTop);
    }
    event.preventDefault();
    return event.deltaY < 0;
  }

  // to be implemented - mobile scroll option to get rid of mobile breakpoint (text shrink)

  return(
    <div className='page_content projects' onWheel={checkScrollDirection} style={{top: top}} ref={projectRef}>
      <div className='project_wrapper'>
      <div className='project_section'>
        <h2 className='project_heading'><span className="project_box">■ </span>Projects</h2>
        <div className='project_list'>
          <a className='project_item text-btn' href="https://studiochimera.dev" target="_blank" rel='noopener'>
            <div className='project_title'>Studio Chimera</div>
            <div className='project_info'>2021 - 2022 / Co-founder</div>
          </a>
          <a className='project_item text-btn' href="" >
            <div className='project_title'>CORL Technologies</div>
            <div className='project_info'>2021 / Front-End Development</div>
          </a>
          <a className='project_item text-btn' href="" >
            <div className='project_title'>General Assembly</div>
            <div className='project_info'>2021 / Full-Stack Development</div>
          </a>
        </div>
      </div>
      <div className='project_section' style={{marginTop: '50px'}}>
        <h2 className='project_heading'><span className="project_box">■ </span>Experience</h2>
        <div className='project_list'>
          <a className='project_item text-btn' href="https://aptitudeii.com" target="_blank" rel='noopener'>
            <div className='project_title'>Aptitude</div>
            <div className='project_info'>Present / Estimating + Product Strategy</div>
          </a>
          <a className='project_item text-btn' href="https://redswitch.dev" target="_blank" rel='noopener'>
            <div className='project_title'>RedSwitch LLC</div>
            <div className='project_info'>2021 - 2022 / Front-End Dev + Operations</div>
          </a>
          <a className='project_item text-btn' href="https://ridewithvia.com" target="_blank" rel='noopener'>
            <div className='project_title'>Via Transportation</div>
            <div className='project_info'>2016 - 2020 / Growth Associate</div>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

const ContactText = () => {
  return (
    <div className='page_content contacts'>
      <div className='contact_wrap socials'>
        <div className='contact_links'>
          <a className='contact_item text-btn' href="mailto:van-doan@outlook.com" target='_blank' rel='noreferrer'>Email ↗</a>
          <a className='contact_item text-btn' href="https://github.com/van-doan" target='_blank' rel='noreferrer'>Github ↗</a>
          <a className='contact_item text-btn' href="https://www.linkedin.com/in/andyvdoan/" target='_blank' rel='noreferrer'>LinkedIn ↗</a>
        </div>
        <div className='affiliated_links'>
          <a className='affiliate_item text-btn' href='studiochimera.dev' target='_blank' rel='noreferrer'>studiochimera.dev ↗</a>
          <a className='affiliate_item text-btn' href='redswitch.dev' target='_blank' rel='noreferrer'>redswitch.dev ↗</a>
        </div>
      </div>
    </div>
  )
}


export { HomeText, ProjectText, ContactText };