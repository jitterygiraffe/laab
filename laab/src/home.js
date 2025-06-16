import React from 'react';
import wavy_line from './images/wavy_yellow_line.png';
import homeImg from './images/home_gif.gif';
import yellowStar from './images/yellow_star.png';
import redStar from './images/red_star.png';
import blueStar from './images/blue_star.png';
import heartDots from './images/heart_dots.png';



function Home() {

    return (
      <>
              <div >
                <img className="wavyLine" src={wavy_line} alt=""/>
              </div>
              <div className="mask">
                <img className="homeGif" src={homeImg} alt=""/>
              </div>
             
              <div >
                <img className="red_star2" src={redStar} alt=""/>
              </div>
        
        
        
              <div >
                <img className="heart_dots" src={heartDots} alt=""/>
              </div>
              <div className='main-title'>LAAB!</div>
              <div className='body-txt' id='homeTxt'>
              Help us build a better playground in Sidi Bou Said.
              </div>
      
      </>
    );
  }
  
  export default Home;
  