import React, {useState} from 'react';

const ProjectInfo2 = () => {
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
        <span className="proj-role">Marketing &amp; Software Engineer</span>
        <p className="proj-job-desc">RedSwitch is an Atlanta-based software development agency comprised of some of the most talented developers in the tech space. With RedSwitch, my role has been focused on general marketing for the firm + developing front-end infrastructure for high-profile clients.</p>
      </div>
    </div>
  )
}

export default ProjectInfo2