import React from 'react';
import './features.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import abstractFlower1 from './images/flower_anim.lottie';  
import abstractFlower2 from './images/flower_anim.lottie';
import abstractFlower3 from './images/flower_anim.lottie'; 
import icon1 from './images/playground_icon1.png'; 
import icon2 from './images/playground_icon2.png'; 
import icon3 from './images/playground_icon3.png'; 


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
    <section className="features-section">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="playgroundIcon">
            <span className="icon">{feature.icon}</span>
          </div>
          <div className="flower-animation">
            <span className="icon">{feature.flower}</span>
          </div>
          <p className="feature-text">{feature.text}</p>
          {index < features.length - 1 && <div className="divider" />}
          </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
