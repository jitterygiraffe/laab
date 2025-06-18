import './App.css';
import Faqs from './faqs';
import Home from './home';
import Navbar from './Navbar';
import OurStory from './OurStory';
import Change from './change';
import Footer from './footer';
import Contact from './contact_form';
import ReadMore from './read_more';
import { useEffect, useState } from 'react';


function App() {
  const [page, setPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (page) {
      case '#home':
        return (
          <>
            <Home />
            <OurStory />
            <Faqs />
            <Change />
            <Contact />
            <Footer />
          </>
        );
      case '#read-more':
        return <ReadMore />;
      default:
        return <Home />;

      
    }
  };

  return (
    <>
      <Navbar />
      {renderPage()}
    </>
  );
}

export default App;
