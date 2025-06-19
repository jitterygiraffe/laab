import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './home';
import OurStory from './OurStory';
import Faqs from './faqs';
import Change from './change';
import Contact from './contact_form';
import Footer from './footer';
import ReadMore from './read_more';

function App() {
  const [page, setPage] = useState(window.location.hash || '#home');

  const homeSections = ['#home', '#our-story', '#faqs', '#contact-us', '#change'];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setPage(hash);

      // Smooth scroll if it's a home section
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

        <div id="contact-us">
              <Contact />
        </div>

        <div id="footer">
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
