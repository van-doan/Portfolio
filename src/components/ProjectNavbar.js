import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const ProjectNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
      display: 'flex',
      height: '60px',
      width: '100%',
      transition: 'top 0.6s',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      padding: '18px 18px',
      position: 'fixed',
      top: '8%',
      zIndex: '1' 
  }

  return(
    <div className="fixed-home" style={{...navbarStyles, top: visible ? '4rem' : '-60px'}}>
          <h2 className="home-nav">
            <Link to="/" className="backtoHome">VAN DOAN</Link>
          </h2>
        </div>
  )
}

export default ProjectNavbar;