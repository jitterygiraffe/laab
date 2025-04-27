import React from 'react';
import wavy_line from './images/wavy_yellow_line.png'



function Home() {

    return (
      <>
              <div >
              <img className="wavyLine" src={wavy_line} alt=""/>
              </div>
              <div className='main-title'>LAAB!</div>
              <div className='body-txt' id='homeTxt'>
              Help us build a better playground in Sidi Bou Said.
              </div>
      
      </>
    );
  }
  
  export default Home;
  