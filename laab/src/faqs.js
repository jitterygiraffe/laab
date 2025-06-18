import React from 'react';
import pinkBar from './images/pink_bg.png';
import './faqs.css';
import AccordionFAQs from './accordion_faqs';
import faqsAnim from './images/faqs_anim.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import whiteStripes from './images/white_stripes.png';


function Faqs() {

    return (
      <div id="faqs">
        
            
            <div className="faqs">

            <div className="accordionContainer">
                <AccordionFAQs />
            </div>

            <div >
                <img className="whiteStripes" src={whiteStripes} alt=""/>
            </div>

            <DotLottieReact className="faqsAnim"
                    src={faqsAnim}
                    loop
                    autoplay
            />

            </div>
              <div >
                <img className="pinkBar" src={pinkBar} alt=""/>
            </div>


      </div>
    );
  }
  
  export default Faqs;
  