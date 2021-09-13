import React, {useState} from 'react';

const ProjectInfo3 = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);
  
  return(
    <div className="proj-container">
      <div className="proj">
          <div className="proj-line-text">
            <a className="proj-a" onClick={toggleActive}>
              <h4 className="proj-text">Info</h4>
            </a>
          </div>
          <div className={!active ? "proj-line-container":"proj-line-container-active"}></div>
      </div>
      <div className={!active ? "proj-desc":"proj-desc-active"}>
        <span className="proj-role">Software Engineer</span>
        <p className="proj-job-desc">CORL Technologies (a cybersecurity IT company) contracted Redswitch's team to develop a web application portal to automate their core manual processes.</p> 
        <p className="proj-job-desc">For this project, I provided front-end development support, created various endpoints to a headless CMS, and conducted unit tests.</p>
      </div>
    </div>
  )
}

export default ProjectInfo3