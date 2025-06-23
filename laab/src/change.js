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
      <h2 className="cta-title">A bold, curious future awaits!</h2>
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
      onClick={() => window.open('https://www.gofundme.com/f/help-build-the-new-sidi-bou-said-playground?lang=en_US&utm_campaign=man_sharesheet_dash&utm_content=amp10_t1-amp13_c-amp14_t2&utm_medium=customer&utm_source=copy_link&attribution_id=sl%3Ab976d453-7e48-4b13-96b7-0a89310ac81e', '_blank')}
      >Donate now!</button>
    </section>
    
    </>

    
  );
};

export default Change;
