import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './home.js';
import OurStory from './OurStory.js';
import Faqs from './faqs.js';
import Change from './change.js';
import Contact from './contact_form.js';
import Footer from './footer.js';
import ReadMore from './read_more.js';

const homeSections = ['#home', '#our-story', '#faqs', '#contact-us', '#change'];

function App() {
  const [page, setPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setPage(hash);

      
      const el = document.getElementById(hash.replace('#', ''));
      if (el && homeSections.includes(hash)) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // trigger on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (page === '#read-more') return <ReadMore />;

    return (
      <>
        <div id="home">
              <Home />
        </div>

        <div id="our-story">
              <OurStory />
        </div>

        <div id="faqs">
              <Faqs />
        </div>

      <div id="change">
              <Change />
        </div>

      <div id="change">
              <Contact />
        </div>

      <div id="change">
              <Footer />
        </div>

        
    
      </>
    );
  };

  return (
    <>
      <Navbar />
      {renderPage()}
      
    </>
  );
}

export default App;
