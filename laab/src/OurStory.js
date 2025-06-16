import React from 'react';
import ourStoryFlower from './images/flower_.png';
import blueBar from './images/blue_bg.svg';


function OurStory() {

    return (
      <>
              <div >
                <img className="ourStoryFlower" src={ourStoryFlower} alt=""/>
              </div>

              <div >
                <img className="blueBar" src={blueBar} alt=""/>
              </div>
      
      </>
    );
  }
  
  export default OurStory;
  