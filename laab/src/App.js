import './App.css';
import Home from './home';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className='navigation'>
          <Navbar/>
      </div>
      
      <div>
          <Home/>
      </div>
     
    </>
    
  );
}

export default App;
