import React,{ useState, useEffect, useRef } from 'react';
import { Menu, Layout, Button } from 'antd';
import { HomeText, ProjectText, ContactText } from './MainText';
import '../static/styles/global/page.scss';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import Basep5 from 'p5'

const { Header, Content } = Layout;


const Main = (props) => {
  const [theme, setTheme] = useState(false);
  const [selected, setSelected] = useState(true);
  const [key, setKey] = useState('home');
  const [offsetY, setOffsetY] = useState(0);
  const divRef = useRef(null);

///////// CANVAS FUNCTIONS //////////

  let width = 500;
  let height = 500;


  const MainCanvas = (p5) => {
    let pathPoints = []
    let strokeColor;

    p5.updateWithProps = props => {
      if (props.theme!==undefined) {
        strokeColor = props.theme ? 'rgba(255,255,255,0.2)': 'rgba(0,0,0,0.2)'
      }
    };

    if(theme){
      p5.setup = () => {
        p5.createCanvas(600,600)
        p5.background('rgba(26, 26, 26, 0)')
        p5.frameRate(30)
        // 30FPS is dec but may need to revisit for optimization (mobile specifically) //
      }

      p5.draw = () => {
        pathPoints = circlePoints();
        for(let j=0; j<6; j++){
          pathPoints = complexifyPath(pathPoints);
        }  
        p5.stroke(strokeColor);
        p5.strokeWeight(.12);
          
        for(var i=0;i<pathPoints.length -1;i++){
          var v1 = pathPoints[i];
          var v2 = pathPoints[i+1];
          p5.line(v1.x,v1.y,v2.x,v2.y);
        }
      }

      const complexifyPath = (pathPoints) => {
        let newPath = [];

        for(var i=0;i<pathPoints.length -1;i++){
          let v1 = pathPoints[i];
          let v2 = pathPoints[i+1];
          let midPoint = Basep5.Vector.add(v1, v2).mult(0.5);
          let distance =  v1.dist(v2);

          let standardDeviation = 0.125*distance;
          let v = p5.createVector(p5.randomGaussian(midPoint.x, standardDeviation), p5.randomGaussian(midPoint.y, standardDeviation))
          newPath.push(v1);
          newPath.push(v);
        }
        newPath.push(pathPoints[pathPoints.length-1])
        return newPath;
      }

      const circlePoints=()=>{
        let r = p5.width/2.1;
        let theta1 = p5.randomGaussian(0, p5.PI/4);
        let theta2 = theta1 + p5.randomGaussian(0, p5.PI/3);
        let v1 = p5.createVector(p5.width/2 + r*p5.cos(theta1), p5.width/2 + r*p5.sin(theta1));
        let v2 = p5.createVector(p5.width/2 + r*p5.cos(theta2), p5.width/2 + r*p5.sin(theta2));
        return [v1,v2];
      }
    } else {
      p5.setup = () => {
        p5.createCanvas(600,600)
        p5.background('rgba(230,230,230,0)')
        p5.frameRate(30)
        // 30FPS is dec but may need to revisit for optimization (mobile specifically) //
      }

      p5.draw = () => {
        pathPoints = circlePoints();
        for(let j=0; j<6; j++){
          pathPoints = complexifyPath(pathPoints);
        }
        // p5.strokeWeight(.05);
        p5.stroke(strokeColor);
        p5.strokeWeight(.12);
        
        
        for(var i=0;i<pathPoints.length -1;i++){
          var v1 = pathPoints[i];
          var v2 = pathPoints[i+1];
          p5.line(v1.x,v1.y,v2.x,v2.y);
        }
      }

      const complexifyPath = (pathPoints) => {
        let newPath = [];

        for(var i=0;i<pathPoints.length -1;i++){
          let v1 = pathPoints[i];
          let v2 = pathPoints[i+1];
          let midPoint = Basep5.Vector.add(v1, v2).mult(0.5);
          let distance =  v1.dist(v2);

          let standardDeviation = 0.125*distance;
          let v = p5.createVector(p5.randomGaussian(midPoint.x, standardDeviation), p5.randomGaussian(midPoint.y, standardDeviation))
          newPath.push(v1);
          newPath.push(v);
        }
        newPath.push(pathPoints[pathPoints.length-1])
        return newPath;
      }

      const circlePoints=()=>{
        let r = p5.width/2.1;
        let theta1 = p5.randomGaussian(0, p5.PI/4);
        let theta2 = theta1 + p5.randomGaussian(0, p5.PI/3);
        let v1 = p5.createVector(p5.width/2 + r*p5.cos(theta1), p5.width/2 + r*p5.sin(theta1));
        let v2 = p5.createVector(p5.width/2 + r*p5.cos(theta2), p5.width/2 + r*p5.sin(theta2));
        return [v1,v2];
      }
    }
  }

  ///////// SCROLL FUNCTIONS //////////

    // useEffect(()=> {
    //   const onScroll = () => setOffsetY(window.pageYOffset);
    //   window.removeEventListener('scroll', onScroll);
    //   window.addEventListener('scroll', onScroll, {passive: true});
    //   return () => window.removeEventListener('scroll', onScroll)
    // }, [])
    // console.log(offsetY)

    // const handleScroll = (e) => {
    //   let srcElement = document.querySelector('.projects');
    //   let scrollTop = e.srcElement.body.scrollTop,
    //       offsetY = Math.min(0, scrollTop/3 - 60);
    //       setOffsetY(offsetY);
    // }

///////// TOGGLING FUNCTIONS //////////  

    const toggleLightMode = () =>{
      setTheme(false);
    }
  
    const toggleDarkMode = () =>{
      setTheme(true);
    }

    const handleSelect = () => {
      if(selected){
        setSelected(false);
    } 
  }


    const handleMenuSelection = (event) => {
      if(selected){
        setSelected(false);
        setKey(event.key)
        setSelected(true);
      } 
    }


  return(
    <div id='Page' className={`page ${theme ? 'is_dark' : ''}`}>
    {/* <Loader /> */}
      {/* React Three component will be inserted */}
      <div id='Background'>
        <ReactP5Wrapper theme={theme} sketch={MainCanvas} />
      </div>
      <div className='mask' id='Mask'>
        <div className={`mask_top ${theme ? 'dark_mask' : 'light_mask'}`}></div>
        <div className={`mask_bottom ${theme ? 'dark_mask' : 'light_mask'}`}></div>
      </div>
      {/* Lines to encase content */}
      <div id='Frame' className='frame'>
        <div className={`frame_line frame_line_left ${theme ? 'lighten_border' : 'darken_border'}`}></div>
        <div className={`frame_line frame_line_right ${theme ? 'lighten_border' : 'darken_border'}`}></div>
        <div className={`frame_line frame_line_top ${theme ? 'lighten_border' : 'darken_border'}`}></div>
        <div className={`frame_line frame_line_bottom ${theme ? 'lighten_border' : 'darken_border'}`}></div>
      </div>
      {/* Toggle Theme from Dark to Light Mode */}
      <div className='theme' id='Theme'>
        <div className='theme_color'>
          <div className={`theme_btn ${theme ? 'dark_btn' : 'light_btn'} ${theme ? '' : 'is-selected'}`} onClick={toggleLightMode}>
              <span className={`_box`}></span>
              <span className='_text'>Light</span>
          </div>
        </div>
        <div className='theme_color'>
          <div className={`theme_btn ${theme ? 'dark_btn' : 'light_btn'} ${theme ? 'is-selected' : ''}`} onClick={toggleDarkMode}>
            <span className={`_box`}></span>
            <span className='_text'>Dark</span>
          </div>
        </div>
      </div>
    <Header className='siteHeader' id='SiteHeader'>
      <h1 className='siteHeader_title'>Van Doan</h1>
      <p className='siteHeader_label'>Developer &amp; Product Strategist</p>
      <Menu 
        className='siteHeader_nav' 
        onClick={handleMenuSelection}>
        <Menu.Item className='nav-item' key='home' onClick={handleSelect} style={selected && key==='home' ? { fontWeight: '700'} : {fontWeight: 'inherit'}}>
          Home
        </Menu.Item>
        <Menu.Item className='nav-item' key='projects' onClick={handleSelect} style={selected && key==='projects' ? { fontWeight: '700'} : {fontWeight: 'inherit'}}>Projects</Menu.Item>
        <Menu.Item className='nav-item' key='contact' onClick={handleSelect} style={selected && key==='contact' ? { fontWeight: '700'} : {fontWeight: 'inherit'}}>Contact</Menu.Item>
      </Menu>
    </Header>
    <Content className='content' id='Content'>
      <div className="content_inner">
      
        <section className="page" data-page='home' style={selected && key==='home' ? { display: 'block', animation:'fadeIn 1000ms'} : {display: 'none', opacity: '0', }}>
          
          <HomeText/>
        </section>
        <section className="page" data-page='projects' style={selected && key==='projects' ? { display: 'block', animation:'fadeIn 1000ms'} : {display: 'none', opacity: '0'}}>
        
          <ProjectText/>
        </section>
        <section className="page" data-page='contact' style={selected && key==='contact' ? { display: 'block', animation:'fadeIn 1000ms'} : {display: 'none', opacity: '0'}}>
          <ContactText/>
        </section>
      </div>
    </Content>

    </div>
    )
  }



export default Main;