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
        Over 200 generous neighbors have already stepped up to help bring our playground back to life — and we’d love for you to be one of them!
        <br /><br />
        Every donation, big or small, gets us closer to swings that soar, slides that sparkle, and a park full of laughter. Be part of the story. Be part of the change.
      </p>
      <button className="cta-donate">Donate now!</button>
    </section>
    
    </>

    
  );
};

export default Change;
