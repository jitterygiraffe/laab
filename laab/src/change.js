import React from 'react';
import './change.css';
import changeImg from './images/change_img.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import abstractStarGif from './images/abstract_star.lottie';
import abstractSpiral from './images/abstract_spiral.png';

const Change = () => {
  return (
    <>
        <div >
          <img className="changeImg" src={changeImg} alt=""/>
        </div>

        <DotLottieReact className="abstractStarGif"
                    src={abstractStarGif}
                    loop
                    autoplay
        />

        <div >
          <img className="abstractSpiral" src={abstractSpiral} alt=""/>
        </div>
    
    <section className="cta-card">
      <h2 className="cta-title">Help us build for the future!</h2>
      <p className="cta-text">
        The playground will remain free and open 
        to the public — accessible to all. 
        This is non-negotiable, and speaks to 
        our values of community and play.   
        </p>
        
        <p className="cta-text">
        We believe that at the root of this 
        project is the importance of PLAY for 
        children, teens, and adults. Having a 
        safe, clean, functional and durable place 
        to play will improve the health and quality 
        of life for our whole community. 

      </p>
      <button className="cta-donate"
      onClick={() => window.open('https://your-donation-link.com', '_blank')}
      >Donate now!</button>
    </section>
    
    </>

    
  );
};

export default Change;
