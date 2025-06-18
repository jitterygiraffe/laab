import './App.css';
import Faqs from './faqs';
import Home from './home';
import Navbar from './Navbar';
import OurStory from './OurStory';
import Change from './change';
import Footer from './footer';
import Contact from './contact_form';
import ReadMore from './read_more';
import { useState } from 'react';

function App() {
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <>
      <Navbar />

      {showReadMore ? (
        <ReadMore onBack={() => setShowReadMore(false)} />
      ) : (
        <>
          <Home />
          <OurStory onReadMoreClick={() => setShowReadMore(true)} />
          <Faqs />
          <Change />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
