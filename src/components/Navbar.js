import React, { useState } from 'react';
import Modal from 'react-modal';

import img from '../media/images/andy_headshot.jpeg'

Modal.setAppElement("#root");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="about-modal">
      <a className="about" onClick={toggleModal}>About</a>
      <Modal 
        isOpen={isOpen}
        overlayClassName="modal-overlay"
        className="modal"
        onRequestClose={toggleModal}
        closeTimeoutMS={500}>
          <div className="aboutme">
            <div className="about-section">
              <div className="head-section">
                <h1 className="greeting">Hello,</h1>
                <h2 className="greeting2">I'm Andy <span className="highlight">Van Doan</span></h2>
                <p className="desc">I'm a Chicago-based software engineer.</p>
                <p className="desc">Full-stack savvy and adept at designing/building engaging, performant applications.</p>
                <p className="desc">Innovation and automation energize me.</p>
                <p className="desc">If you have any cool projects or opportunities, get in touch!</p>
              </div>
              <div className="subsection">
                <h3>Education</h3>
                <p className="subdesc">Text text text</p>
              </div>
              <div className="subsection">
              <h3>Experience</h3>
                <p className="subdesc">Text text text</p>
              </div>
            </div>
            <div className="about-section">
              <img src={img} className="headshot"/>
            </div>
          </div>
        </Modal>
      </nav> 
  )
}

export default Navbar;