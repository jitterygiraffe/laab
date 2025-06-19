import React from 'react';
import './readmore.css';
import Chicken from './images/chicken.png';
import Star from './images/starr.png';
import Apple from './images/apple.png';
import Splash from './images/splash.png';
import blueBar1 from './images/blueBar.svg';
import blueBar2 from './images/blueBar2.svg';
import FooterTwo from './footer_two.js';
import wavyBlue from './images/wavyBlue.png';
import redStarAnim from './images/redStar.lottie';
import orangeDotsTwo from './images/orangeDotsTwo.png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const ReadMore = () => {
  return (
    <section className="our-story">
      <h1 className="story-title">Our story</h1>

      <div className="story-section white">
        <p id="story-txt">
          In 2024, a small group of friends and neighbors got together with the mission to revamp the playground.
          Our initial goal was to work with the municipality to make basic repairs so the playground was safe and functional.
          Once we accomplished that, we began to dream bigger. We knew the children of our community deserved more, and
          also knew that our community could come together to make the dream of a better, free-to-play playground a reality.
        </p>
         
      </div>

         <div >
            <img className="wavyBlue" src={wavyBlue} alt=""/>
         </div>

         <div >
            <img className="chicken" src={Chicken} alt=""/>
         </div>

      <div className="story-section blue">
        
        <p id="story-txt2">
          We've received the go-ahead from the municipality to raise money for an entirely new playground — one that is built on
          the values of play diversity, inclusivity, sustainability and safety. We've worked with Kompan, a leading playground equipment
          manufacturer in Europe, and a landscape architect and playground designer who has kindly donated her time to create a vision
          of what the new playground can look like with incredible play equipment that is exciting, challenging, built-to-last and eco-friendly.
        </p>
      </div>

      <DotLottieReact className="redStarAnim"
                    src={redStarAnim}
                    loop
                    autoplay
              />

      <div >
            <img className="star" src={Star} alt=""/>
      </div>

      <div className="story-section white">
        <p id="story-txt3">
          The new design features a dedicated area for little kids (0-5) with a colorful play structure, spring toys and an embankment slide,
          all shaded under the jacaranda trees just to the west of the main playground; and a big kids' area with a balance course, custom bird's nest swing,
          spinner toys and a massive space net climbing tower — something you'll not find at any other public park in Tunisia.
        </p>
        
      </div>

      <div >
            <img className="apple" src={Apple} alt=""/>
      </div>

      <div className="story-section blue">
  
        <p id="story-txt4">
          All of this equipment is built to last, with 10–20 year guarantees (depending on the piece), which means it is an investment that
          will give joy to generations of kids.
          <br /><br />
          We need your help. This playground will not be built without the financial contributions of community members — including you! If you are
          a parent, grandparent, friend or neighbor of a child in Tunis, this is the time to embrace your generosity and donate. Our goal is lofty —
          in addition to the equipment, we will need to pay for shipping, installation, surfacing and shade structures — but we know our community is mighty.
          <br /><br />
          We hope you'll give generously and help us achieve the dream of a fantastic new playground in Sidi Bou Said park.
        </p>
      </div>
         <div >
            <img className="splash" src={Splash} alt=""/>
         </div>
      <div >
        <img className="blueBar1" src={blueBar1} alt=""/>
      </div>

      <div >
        <img className="blueBar2" src={blueBar2} alt=""/>
      </div>

      <div id="footer-two">
              <FooterTwo />
        </div>
      
      
    </section>
  );
};

export default ReadMore;
