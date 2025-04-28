import './App.css';
import Home from './home';
import Navbar from './navbar';
import OurStory from './ourStory';

function App() {
  return (
    <>
      <div className='navigation'>
          <Navbar/>
      </div>
      <div>
          <Home/>
      </div>
      <div>
          <OurStory/>
      </div>
    </>
    
  );
}

export default App;
