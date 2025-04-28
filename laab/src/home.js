import React from 'react';
import wavy_line from './images/wavy_yellow_line.png';
import homeImg from './images/home_img.png';
import redStar from './images/red_star.png';
import heartDots from './images/heart_dots.png';



function Home() {

    return (
      <>
              <div >
              <img className="wavyLine" src={wavy_line} alt=""/>
              </div>
              <div >
              <img className="home_img" src={homeImg} alt=""/>
              </div>
              <div >
              <img className="red_star" src={redStar} alt=""/>
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
  