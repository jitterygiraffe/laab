import React from 'react';
import ourStoryFlower from './images/flower_.png';
import blueBar from './images/blue_bg.svg';
import OurStoryCard from './ourStoryCard';
import blueDots from './images/blue_dots.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import redStripe from './images/red_bar.lottie';
import FeaturesSection from './features_section';


function OurStory({ onReadMoreClick }) {

    return (
    
          <div id="our-story">
                <div >
                <img className="ourStoryFlower" src={ourStoryFlower} alt=""/>
              </div>

              <div >
                <img className="blueBar" src={blueBar} alt=""/>
              </div>

              <div>
                <OurStoryCard onReadMoreClick={onReadMoreClick}/>
              </div>

                <div >
                <img className="blueDots" src={blueDots} alt=""/>
              </div>

              <DotLottieReact className="redStripe"
                    src={redStripe}
                    loop
                    autoplay
              />
      
              <div>
                <FeaturesSection/>
              </div>
          </div>
    
    );
  }
  
  export default OurStory;
  