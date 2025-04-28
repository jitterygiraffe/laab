import React from 'react';
import flowerPic from './images/flower_pic.png';
import blueBar from './images/blue_bar.svg';
import blueDots from './images/blue_dots.png';
import redStripe from './images/Red Stripe Block.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import blueShape from './images/Main Scene.lottie';


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

            <DotLottieReact className="redStripe"
                src={redStripe}
                loop
                autoplay
            />

            <div className="everyChild">
              <p id="everyChildHeading">
              EVERY CHILD DESERVES A SAFE, 
              INSPIRING PLACE TO PLAY.
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

            <div className='togetherTxt'>
                <p>TOGETHER WE CAN CREATE:</p>
            </div>

        
        <div className='togetherItems'>

            <div className="abstractShapes">
                <DotLottieReact className="blueShape1"
                    src={blueShape}
                    loop
                    autoplay
                />
               
               <p className='p1'>
                A safe and modern space 
                built to last
                </p>
               
            </div>

    
        </div>
      </>
    );
  }
  
  export default Home;
  