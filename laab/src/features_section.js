import React from 'react';
import './features.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import abstractFlower1 from './images/flower_anim.lottie';  
import abstractFlower2 from './images/flower_anim.lottie';
import abstractFlower3 from './images/flower_anim.lottie'; 
import icon1 from './images/playground_icon1.png'; 
import icon2 from './images/playground_icon2.png'; 
import icon3 from './images/playground_icon3.png'; 
import laabTeaserDesktop from './images/laabTeaserDesktop.gif'; 
import laabTeaserTablet from './images/laabTeaserIpadPro.gif';
import laabTeaserMobile from './images/laabTeaserMobile.gif';
import arrow from './images/arrow.png';


const features = [
  { 
    icon: <div >
            <img className="playgroundIcon" id='icon1' src={icon1} alt=""/>
          </div>,
    flower:  <DotLottieReact className='flower-animation' id='flower1'
            src={abstractFlower1}
            loop
            autoplay
          />,  
    text: 'A modern, free-to-play playground that fosters curiosity and creativity',
  },
  {
    icon: <div >
            <img className="playgroundIcon" id='icon2' src={icon2} alt=""/>
          </div>,
    flower: <DotLottieReact className='flower-animation' id='flower2'
            src={abstractFlower2}
            loop
            autoplay
          />,
    text: 'An environment that values play diversity and inclusivity',
  },
  {
    icon: <div >
            <img className="playgroundIcon" id='icon1' src={icon3} alt=""/>
          </div>,
    flower: <DotLottieReact className='flower-animation' id='flower3'
            src={abstractFlower3}
            loop
            autoplay
          />,
    text: 'A sensory-rich space that is both safe and sustainable',
  },
  
];


const FeaturesSection = () => {
  return (
    <>
    <div className='features-title'>
     <p className='features-header'>Together we can build:</p>

    </div>
    <section className="features-section">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="playgroundIcon">
            <span className="icon">{feature.icon}</span>
          </div>
          <div className="flower-animation">
            <span className="flower-animation">{feature.flower}</span>
          </div>
          <p className="feature-text">{feature.text}</p>
          {index < features.length - 1 && <div className="divider" />}
         
          </div>
  
      ))}
    </section>

     <div>
            <div>
              <p className='featuresTxt'>Some of the equipment 
                we will buy with your donations</p>
            </div>
            <div >
              <img className="arrow" src={arrow} alt=""/>
            </div>

           <div >
              <img className="laabTeaserDesktop" src={laabTeaserDesktop} alt=""/>
            </div>
             <div >
              <img className="laabTeaserTablet" src={laabTeaserTablet} alt=""/>
            </div>
             <div >
              <img className="laabTeaserMobile" src={laabTeaserMobile} alt=""/>
            </div>
  
          </div>
    </>
  );
};

export default FeaturesSection;
