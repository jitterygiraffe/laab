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

const htmlCode = `
        <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGrXQOl0UQ/LStCk8eVYpK8Gn37opf7HA/watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGrXQOl0UQ&#x2F;LStCk8eVYpK8Gn37opf7HA&#x2F;watch?utm_content=DAGrXQOl0UQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">laab_teaser</a> by churu puka
      `;


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

          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
          </div>

         
          
      ))}
    </section>
    </>
  );
};

export default FeaturesSection;
