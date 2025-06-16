import React from 'react';
import ourStoryFlower from './images/flower_.png';
import blueBar from './images/blue_bg.svg';
import OurStoryCard from './ourStoryCard';
import blueDots from './images/blue_dots.png';


function OurStory() {

    return (
      <>
              <div >
                <img className="ourStoryFlower" src={ourStoryFlower} alt=""/>
              </div>

              <div >
                <img className="blueBar" src={blueBar} alt=""/>
              </div>

              <div>
                <OurStoryCard/>
              </div>

                <div >
                <img className="blueDots" src={blueDots} alt=""/>
              </div>
      
      </>
    );
  }
  
  export default OurStory;
  