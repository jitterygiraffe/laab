import './App.css';
import Faqs from './faqs';
import Home from './home';
import Navbar from './Navbar';
import OurStory from './OurStory';
import Change from './change';
import Footer from './footer';
import Contact from './contact_form';


function App() {
  return (
    <>
      <div>
          < Navbar/>
      </div>
      
      <div>
          <Home/>
      </div>
      
      <div> 
        <OurStory/>
      </div>

      <div> 
        <Faqs/>
      </div>

      <div> 
        <Change/>
      </div>

      <div> 
        <Contact/>
      </div>

       <div> 
        <Footer/>
      </div>

    </>
    
  );
}

export default App;
