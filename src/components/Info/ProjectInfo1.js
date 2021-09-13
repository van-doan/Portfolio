import React, {useState} from 'react';

const ProjectInfo1 = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(active => !active);
  
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
        <span className="proj-role">Co-Founder &amp; Software Engineer</span>
        <p className="proj-job-desc">Studio Chimera designs and constructs exquisite, modern software solutions. As a multi-faceted, software-focused agency, our team is profoundly obsessed with automating redudancy, product marketing/SEO, and creating the best digital experiences for our clients.</p>
      </div>
    </div>
  )
}

export default ProjectInfo1