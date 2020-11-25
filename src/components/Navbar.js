// G L O B A L   I M P O R T S //
import React, { useState } from 'react';
import Modal from 'react-modal';


// M E D I A   I M P O R T S //
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
                <h1 className="greeting2">I'm Andy <span className="highlight">Van Doan.</span></h1>
                <p className="desc">I'm a Chicago-based, full-stack savvy software engineer.</p>
                <p className="desc">I design and build engaging, performant applications.</p>
                <p className="desc">Machine learning and automation energize me.</p>
                <p className="desc">If you have any cool projects or opportunities, let's work together!</p>
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
            <div className="about-section2">
              <img src={img} className="headshot"/>
              <div className="techstack">
                <div className="type">
                  <div className="icons">
                    <div className="single-icon">
                  <h2 className="title">Recent Front-end</h2>
                      <div className="icon">
                      </div>
                    <div className="single-icon">
                      <div className="icon">
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                      </div>
                    </div>
                    <div className="single-icon">
                      <div className="icon">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="type">
                    <div className="icons">
                      <div className="single-icon">
                  <h2 className="title">Recent Back-end</h2>
                        <div className="icon">
                        </div>
                      </div>
                      <div className="single-icon">
                        <div className="icon">
                        </div>
                      </div>
                      <div className="single-icon">
                        <div className="icon">
                        </div>
                      </div>
                      <div className="single-icon">
                        <div className="icon">
                        </div>
                      </div>
                      <div className="single-icon">
                        <div className="icon">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </nav> 
  )
}

export default Navbar;