import React from 'react';
import flowerPic from './images/flower_pic.png';
import blueBar from './images/blue_bar.svg';
import blueDots from './images/blue_dots.png';
import everyChild from './images/every_child.png';

function Home() {

    return (
      <>
            <div >
              <img className="flowerPic" src={flowerPic} alt=""/>
            </div>
            <div >
              <img className="blueBar" src={blueBar} alt=""/>
            </div>
            <div >
              <img className="blueDots" src={blueDots} alt=""/>
            </div>
            <div className="everyChild">
              <p id="everyChildHeading">
              Every child deserves a safe, 
              inspiring place to play.
              </p>

              <span id="everyChildTxt">
                <p>
                Our mission is to transform the 
                current dilapidated playground 
                into a vibrant, inclusive, and 
                eco-friendly space where children 
                of all ages and abilities can 
                explore, learn, and grow through play.
                </p>
                <p>
                This is more than just a 
                renovation — it's a chance to 
                invest in the well-being of our 
                children and the unity of our 
                community. 
                </p>
                <p>
                Every donation, volunteer hour, 
                and shared story helps us get 
                closer to our goal. Let’s 
                build a playground where 
                childhood can thrive again 
                — together.
                </p>
                
              </span>
              <button id='everyChildButton'>
                    Donate now
              </button>
            </div>
      </>
    );
  }
  
  export default Home;
  